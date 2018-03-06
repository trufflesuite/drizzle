import { call, put, select, takeLatest } from 'redux-saga/effects'

var Web3 = require('web3')

/*
 * Initialization
 */

export function* initializeWeb3({ options }) {
  var web3 = {}

  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof window.web3 !== 'undefined') {
    // Use Mist/MetaMask's provider.
    web3 = new Web3(window.web3.currentProvider)

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
}

function* callInitializeWeb3(action) {
  try {
    const web3 = yield call(initializeWeb3, { options: action.options })
    return web3
  } catch (error) {
    store.dispatch({ type: 'WEB3_FAILED', error })
    console.error('Error intializing web3:')
    console.error(error)
  }
}

/*
 * Network ID
 */

export function* getNetworkId({ web3 }) {
  try {
    const networkId = yield call(web3.eth.net.getId)

    yield put({ type: 'NETWORK_ID_FETCHED', networkId })

    return networkId
  } catch (error) {
    yield put({ type: 'NETWORK_ID_FAILED', error })

    console.error('Erorr fetching network ID:')
    console.error(error)

    return
  }
}

function* web3Saga() {
  yield takeLatest('WEB3_INITIALIZING', callInitializeWeb3)
  yield takeLatest('NETWORK_ID_FETCHING', getNetworkId)
}

export default web3Saga
