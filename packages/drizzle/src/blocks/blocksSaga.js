import { END, eventChannel } from 'redux-saga'
import { call, put, take, takeEvery, takeLatest } from 'redux-saga/effects'

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
    const blockPoller = setInterval(() => {
      web3.eth.getBlock('latest').then((block) => {
        emit({type: 'BLOCK_RECEIVED', blockHeader: block, contracts, contractAddresses, contractNames, web3})
      })
      .catch((error) => {
        emit({type: 'BLOCKS_FAILED', error})
        emit(END)
      })
    }, interval) // options.polls.blocks
    
    const unsubscribe = () => {
      clearInterval(blockPoller)
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

function* processBlock({blockHeader, contracts, contractAddresses, contractNames, web3}) {
  const blockNumber = blockHeader.number

  try {
    const block = yield call(web3.eth.getBlock, blockNumber, true)
    const txs = block.transactions

    if (txs.length > 0)
    {
      // Loop through txs looking for contract address
      for (var i = 0; i < txs.length; i++)
      {
        if (contractAddresses.indexOf(txs[i].from) !== -1 || contractAddresses.indexOf(txs[i].to) !== -1)
        {
          const index = contractAddresses.indexOf(txs[i].from) !== -1 ? contractAddresses.indexOf(txs[i].from) : contractAddresses.indexOf(txs[i].to)
          const contractName = contractNames[index]
                  
          yield put({type: 'CONTRACT_SYNCING', contract: contracts[contractName]})

          return
        }
      }

      return
    }

    return
  }
  catch (error) {
    console.error('Error in block processing:')
    console.error(error)

    yield put({type: 'BLOCK_FAILED', error})

    return
  }
}

function* blocksSaga() {
  yield takeLatest('BLOCKS_LISTENING', callCreateBlockChannel)
  yield takeLatest('BLOCKS_POLLING', callCreateBlockPollChannel)
  yield takeEvery('BLOCK_RECEIVED', processBlock)
}

export default blocksSaga