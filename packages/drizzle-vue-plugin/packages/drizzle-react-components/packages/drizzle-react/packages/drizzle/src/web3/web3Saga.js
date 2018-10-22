import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects'

var Web3 = require('web3')

/*
 * Initialization
 */

export function * initializeWeb3 ({ options }) {
  try {
    var web3 = {}

    if (window.ethereum) {
      const { ethereum } = window
      web3 = new Web3(ethereum)
      try {
        yield call(ethereum.enable)

        web3.eth.cacheSendTransaction = txObject =>
          put({ type: 'SEND_WEB3_TX', txObject, stackId, web3 })

        yield put({ type: 'WEB3_INITIALIZED' })

        return web3
      } catch (error) {
        // User denied account access...
        console.log(error)
      }
    }

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    else if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider.
      web3 = new Web3(window.web3.currentProvider)
      web3.eth.cacheSendTransaction = txObject =>
        put({ type: 'SEND_WEB3_TX', txObject, stackId, web3 })

      console.log('Injected web3 detected.')

      yield put({ type: 'WEB3_INITIALIZED' })

      return web3
    } else {
      if (options.fallback) {
        // Attempt fallback if no web3 injection.
        console.log('No web3 instance injected, using fallback.')

        switch (options.fallback.type) {
          case 'ws':
            var provider = new Web3.providers.WebsocketProvider(
              options.fallback.url
            )
            web3 = new Web3(provider)

            // Attach drizzle functions
            web3.eth['cacheSendTransaction'] = txObject =>
              put({ type: 'SEND_WEB3_TX', txObject, stackId, web3 })

            yield put({ type: 'WEB3_INITIALIZED' })

            return web3

            break
          default:
            // Invalid options; throw.
            throw 'Invalid web3 fallback provided.'
        }
      }

      // Out of web3 options; throw.
      throw 'Cannot find injected web3 or valid fallback.'
    }
  } catch (error) {
    yield put({ type: 'WEB3_FAILED', error })
    console.error('Error intializing web3:')
    console.error(error)
  }
}

/*
 * Network ID
 */

export function * getNetworkId ({ web3 }) {
  try {
    const networkId = yield call(web3.eth.net.getId)

    yield put({ type: 'NETWORK_ID_FETCHED', networkId })

    return networkId
  } catch (error) {
    yield put({ type: 'NETWORK_ID_FAILED', error })

    console.error('Error fetching network ID:')
    console.error(error)
  }
}

/*
 * Send Transaction
 */

function createTxChannel ({ txObject, stackId, web3 }) {
  var persistTxHash

  return eventChannel(emit => {
    const txPromiEvent = web3.eth
      .sendTransaction(txObject)
      .on('transactionHash', txHash => {
        persistTxHash = txHash

        emit({ type: 'W3TX_BROADCASTED', txHash, stackId })
      })
      .on('confirmation', (confirmationNumber, receipt) => {
        emit({
          type: 'W3TX_CONFIRMAITON',
          confirmationReceipt: receipt,
          txHash: persistTxHash
        })
      })
      .on('receipt', receipt => {
        emit({
          type: 'W3TX_SUCCESSFUL',
          receipt: receipt,
          txHash: persistTxHash
        })
        emit(END)
      })
      .on('error', error => {
        emit({ type: 'W3TX_ERROR', error: error, txHash: persistTxHash })
        emit(END)
      })

    const unsubscribe = () => {
      txPromiEvent.off()
    }

    return unsubscribe
  })
}

function * callSendTx ({ txObject, stackId, web3 }) {
  const txChannel = yield call(createTxChannel, { txObject, stackId, web3 })

  try {
    while (true) {
      var event = yield take(txChannel)
      yield put(event)
    }
  } finally {
    txChannel.close()
  }
}

function * web3Saga () {
  yield takeLatest('NETWORK_ID_FETCHING', getNetworkId)
  yield takeEvery('SEND_WEB3_TX', callSendTx)
}

export default web3Saga
