import { call, put } from 'redux-saga/effects'
import * as Action from './constants'

var Web3 = require('web3')

/*
 * Initialization
 */

export function * initializeWeb3 (options) {
  try {
    let web3 = {}

    if (options.customProvider) {
      yield put({ type: Action.WEB3_INITIALIZED })
      return options.customProvider
    }

    if (window.ethereum) {
      const { ethereum } = window
      web3 = new Web3(ethereum)
      try {
        // ethereum.enable() will return the selected account
        // unless user opts out and then it will return undefined
        const selectedAccount = yield call([ethereum, 'enable'])

        yield put({ type: Action.WEB3_INITIALIZED })

        if (!selectedAccount) {
          yield put({ type: Action.WEB3_USER_DENIED })
          return
        }
        return web3
      } catch (error) {
        console.error(error)
        yield put({ type: Action.WEB3_FAILED })
        return
      }
    } else if (typeof window.web3 !== 'undefined') {
      // Checking if Web3 has been injected by the browser (Mist/MetaMask)
      // Use Mist/MetaMask's provider.
      web3 = new Web3(window.web3.currentProvider)
      yield put({ type: Action.WEB3_INITIALIZED })

      return web3
    } else if (options.fallback) {
      // Attempt fallback if no web3 injection.
      switch (options.fallback.type) {
        case 'ws':
          var provider = new Web3.providers.WebsocketProvider(
            options.fallback.url
          )
          web3 = new Web3(provider)
          yield put({ type: Action.WEB3_INITIALIZED })
          return web3

        default:
          // Invalid options; throw.
          throw new Error('Invalid web3 fallback provided.')
      }
    } else {
      // Out of web3 options; throw.
      throw new Error('Cannot find injected web3 or valid fallback.')
    }
  } catch (error) {
    yield put({ type: Action.WEB3_FAILED, error })
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

    yield put({ type: Action.NETWORK_ID_FETCHED, networkId })

    return networkId
  } catch (error) {
    yield put({ type: Action.NETWORK_ID_FAILED, error })

    console.error('Error fetching network ID:')
    console.error(error)
  }
}
