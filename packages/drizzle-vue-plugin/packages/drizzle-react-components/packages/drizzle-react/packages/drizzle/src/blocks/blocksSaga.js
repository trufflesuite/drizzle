import { END, eventChannel } from 'redux-saga'
import { call, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
const BlockTracker = require('eth-block-tracker')

/*
 * Listen for Blocks
 */

function createBlockChannel({contracts, contractAddresses, contractNames, web3}) {
  return eventChannel(emit => {
    const blockEvents = web3.eth.subscribe('newBlockHeaders', (error, result) => {
      if (error)
      {
        emit({type: 'BLOCKS_FAILED', error})

        console.error('Error in block header subscription:')
        console.error(error)

        emit(END)
      }
    })
    .on('data', (blockHeader) => {
      emit({type: 'BLOCK_RECEIVED', blockHeader, contracts, contractAddresses, contractNames, web3})
    })
    .on('error', error => {
      emit({type: 'BLOCKS_FAILED', error})
      emit(END)
    })

    const unsubscribe = () => {
      blockEvents.off()
    }

    return unsubscribe
  })
}

function* callCreateBlockChannel({contracts, contractAddresses, contractNames, web3}) {
  const blockChannel = yield call(createBlockChannel, {contracts, contractAddresses, contractNames, web3})

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

function createBlockPollChannel({contracts, contractAddresses, contractNames, interval, web3}) {
  return eventChannel(emit => {
    const blockTracker = new BlockTracker({ provider: web3.currentProvider, pollingInterval: interval})

    blockTracker.on('latest', (block) => {
      emit({type: 'BLOCK_FOUND', block, contracts, contractAddresses, contractNames, web3})
    })

    blockTracker
    .start()
    .catch((error) => {
      emit({type: 'BLOCKS_FAILED', error})
      emit(END)
    })

    const unsubscribe = () => {
      blockTracker.stop()
    }

    return unsubscribe
  })
}

function* callCreateBlockPollChannel({contracts, contractAddresses, contractNames, interval, web3}) {
  const blockChannel = yield call(createBlockPollChannel, {contracts, contractAddresses, contractNames, interval, web3})

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

function* processBlockHeader({blockHeader, contracts, contractAddresses, contractNames, web3}) {
  const blockNumber = blockHeader.number

  try {
    const block = yield call(web3.eth.getBlock, blockNumber, true)

    yield call(processBlock, {block, contracts, contractAddresses, contractNames, web3})
  }
  catch (error) {
    console.error('Error in block processing:')
    console.error(error)

    yield put({type: 'BLOCK_FAILED', error})

    return
  }
}

function* processBlock({block, contracts, contractAddresses, contractNames, web3}) {
  try {
    const txs = block.transactions

    if (txs.length > 0)
    {
      // Loop through txs looking for any contract address of interest
      for (var i = 0; i < txs.length; i++)
      {
        const fromAddr = txs[i].from
        const toAddr = txs[i].to

        // Some txs are special cases (e.g. undefined "to" when it is a contract deploy TX)
        // Prevent the toLowerCase call when it is undefined.
        const fromTxIndex = fromAddr ? contractAddresses.indexOf(fromAddr.toLowerCase()) : -1
        const toTxIndex = toAddr ? contractAddresses.indexOf(toAddr.toLowerCase()) : -1

        const index = fromTxIndex !== -1 ? fromTxIndex : toTxIndex

        if (index !== -1)
        {
          const contractName = contractNames[index]

          yield put({type: 'CONTRACT_SYNCING', contract: contracts[contractName]})
        }
      }
    }
  }
  catch (error) {
    console.error('Error in block processing:')
    console.error(error)

    yield put({type: 'BLOCK_FAILED', error})

    return
  }
}

function* blocksSaga() {
  // Block Subscriptions
  yield takeLatest('BLOCKS_LISTENING', callCreateBlockChannel)
  yield takeEvery('BLOCK_RECEIVED', processBlockHeader)

  // Block Polling
  yield takeLatest('BLOCKS_POLLING', callCreateBlockPollChannel)  
  yield takeEvery('BLOCK_FOUND', processBlock)
}

export default blocksSaga