import { END, eventChannel } from 'redux-saga'
import { call, put, take, takeEvery, takeLatest, all } from 'redux-saga/effects'
import BlockTracker from 'eth-block-tracker-es5'
import * as BlocksActions from './constants'
import * as ContractActions from '../contracts/constants'

/*
 * Listen for Blocks
 */

export function createBlockChannel ({ drizzle, web3, syncAlways }) {
  return eventChannel(emit => {
    const blockEvents = web3.eth
      .subscribe('newBlockHeaders', (error, result) => {
        if (error) {
          emit({ type: BlocksActions.BLOCKS_FAILED, error })

          console.error('Error in block header subscription:')
          console.error(error)

          emit(END)
        }
      })
      .on('data', blockHeader => {
        emit({ type: BlocksActions.BLOCK_RECEIVED, blockHeader, drizzle, web3, syncAlways })
      })
      .on('error', error => {
        emit({ type: BlocksActions.BLOCKS_FAILED, error })
        emit(END)
      })

    const unsubscribe = () => {
      blockEvents.off()
    }

    return unsubscribe
  })
}

function * callCreateBlockChannel ({ drizzle, web3, syncAlways }) {
  const blockChannel = yield call(createBlockChannel, {
    drizzle,
    web3,
    syncAlways
  })

  try {
    while (true) {
      var event = yield take(blockChannel)
      yield put(event)
    }
  } finally {
    blockChannel.close()
  }
}

/*
 * Poll for Blocks
 */

export function createBlockPollChannel ({
  drizzle,
  interval,
  web3,
  syncAlways
}) {
  return eventChannel(emit => {
    const blockTracker = new BlockTracker({
      provider: web3.currentProvider,
      pollingInterval: interval
    })

    blockTracker.on('block', block => {
      emit({ type: BlocksActions.BLOCK_FOUND, block, drizzle, web3, syncAlways })
    })

    blockTracker.start().catch(error => {
      emit({ type: BlocksActions.BLOCKS_FAILED, error })
      emit(END)
    })

    const unsubscribe = () => {
      blockTracker.stop().catch(_ => {
        // BlockTracker assumes there is an outstanding event subscription.
        // However for our tests we start and stop a BlockTracker in succession
        // that triggers an error.
      })
    }

    return unsubscribe
  })
}

function * callCreateBlockPollChannel ({
  drizzle,
  interval,
  web3,
  syncAlways
}) {
  const blockChannel = yield call(createBlockPollChannel, {
    drizzle,
    interval,
    web3,
    syncAlways
  })

  try {
    while (true) {
      var event = yield take(blockChannel)
      yield put(event)
    }
  } finally {
    blockChannel.close()
  }
}

/*
 * Process Blocks
 */

function * processBlockHeader ({ blockHeader, drizzle, web3, syncAlways }) {
  const blockNumber = blockHeader.number

  try {
    const block = yield call(web3.eth.getBlock, blockNumber, true)

    yield call(processBlock, { block, drizzle, web3, syncAlways })
  } catch (error) {
    console.error('Error in block processing:')
    console.error(error)

    yield put({ type: BlocksActions.BLOCK_FAILED, error })
  }
}

function * processBlock ({ block, drizzle, web3, syncAlways }) {
  try {
    // Emit block for addition to store.
    // Regardless of syncing success/failure, this is still the latest block.
    yield put({ type: BlocksActions.BLOCK_PROCESSING, block })

    if (syncAlways) {
      yield all(
        Object.keys(drizzle.contracts).map(key => {
          return put({
            type: ContractActions.CONTRACT_SYNCING,
            contract: drizzle.contracts[key]
          })
        })
      )

      return
    }

    const txs = block.transactions

    if (txs.length > 0) {
      // Loop through txs looking for any contract address of interest
      for (var i = 0; i < txs.length; i++) {
        var from = txs[i].from || ''
        var fromContract = drizzle.findContractByAddress(from.toLowerCase())
        if (fromContract) {
          yield put({ type: ContractActions.CONTRACT_SYNCING, contract: fromContract })
        }

        var to = txs[i].to || ''
        var toContract = drizzle.findContractByAddress(to.toLowerCase())
        if (toContract) {
          yield put({ type: ContractActions.CONTRACT_SYNCING, contract: toContract })
        }
      }
    }
  } catch (error) {
    console.error('Error in block processing:')
    console.error(error)

    yield put({ type: BlocksActions.BLOCK_FAILED, error })
  }
}

function * blocksSaga () {
  // Block Subscriptions
  yield takeLatest(BlocksActions.BLOCKS_LISTENING, callCreateBlockChannel)
  yield takeEvery(BlocksActions.BLOCK_RECEIVED, processBlockHeader)

  // Block Polling
  yield takeLatest(BlocksActions.BLOCKS_POLLING, callCreateBlockPollChannel)
  yield takeEvery(BlocksActions.BLOCK_FOUND, processBlock)
}

export default blocksSaga
