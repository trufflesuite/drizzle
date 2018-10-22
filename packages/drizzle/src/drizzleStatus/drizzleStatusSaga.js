import { call, put, select, takeLatest } from 'redux-saga/effects'
import defaultOptions from '../defaultOptions'
import merge from '../mergeOptions'

// Initialization Functions
import { initializeWeb3, getNetworkId } from '../web3/web3Saga'
import { getAccounts } from '../accounts/accountsSaga'
import { getAccountBalances } from '../accountBalances/accountBalancesSaga'

function * initializeDrizzle (action) {
  try {
    const options = merge(defaultOptions, action.options)
    const web3Options = options.web3
    const drizzle = action.drizzle

    // Initialize web3 and get the current network ID.
    var web3 = yield call(initializeWeb3, { options: web3Options })
    drizzle.web3 = web3

    yield call(getNetworkId, { web3 })

    // Get initial accounts list and balances.
    yield call(getAccounts, { web3 })
    yield call(getAccountBalances, { web3 })

    // Instantiate contracts passed through via options.
    for (var i = 0; i < options.contracts.length; i++) {
      var contractConfig = options.contracts[i]
      var events = []
      var contractName = contractConfig.contractName

      if (contractName in options.events) {
        events = options.events[contractName]
      }

      yield put({ type: 'ADD_CONTRACT', drizzle, contractConfig, events, web3 })
    }

    const syncAlways = options.syncAlways

    if (web3.currentProvider.isMetaMask && !window.ethereum) {
      // Using old MetaMask, attempt block polling.
      const interval = options.polls.blocks
      yield put({ type: 'BLOCKS_POLLING', drizzle, interval, web3, syncAlways })
    } else {
      // Not using old MetaMask, attempt subscription block listening.
      yield put({ type: 'BLOCKS_LISTENING', drizzle, web3, syncAlways })
    }

    // Accounts Polling
    if ('accounts' in options.polls) {
      yield put({
        type: 'ACCOUNTS_POLLING',
        interval: options.polls.accounts,
        web3
      })
    }
  } catch (error) {
    yield put({ type: 'DRIZZLE_FAILED', error })

    console.error('Error initializing Drizzle:')
    console.error(error)

    return
  }

  yield put({ type: 'DRIZZLE_INITIALIZED' })
}

function * drizzleStatusSaga () {
  yield takeLatest('DRIZZLE_INITIALIZING', initializeDrizzle)
}

export default drizzleStatusSaga
