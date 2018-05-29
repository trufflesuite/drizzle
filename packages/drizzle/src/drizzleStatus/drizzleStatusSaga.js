import { call, put, select, takeLatest } from 'redux-saga/effects'
import defaultOptions from '../defaultOptions'
import merge from 'deepmerge'

// Initialization Functions
import { initializeWeb3, getNetworkId } from '../web3/web3Saga'
import { getAccounts } from '../accounts/accountsSaga'
import { getAccountBalances } from '../accountBalances/accountBalancesSaga'
import { instantiateContract } from '../contracts/contractsSaga'

function* initializeDrizzle(action) {
  try {
    const options = merge(defaultOptions, action.options)
    const web3Options = options.web3

    // Initialize web3 and get the current network ID.
    var web3 = yield call(initializeWeb3, {options: web3Options})

    if (!web3) {
      throw 'Web3 could not be initialized.'
    }

    action.drizzle.web3 = web3

    yield call(getNetworkId, {web3})

    // Get initial accounts list and balances.
    yield call(getAccounts, {web3})
    yield call(getAccountBalances, {web3})

    // Instantiate contracts passed through via options.
    for (var i = 0; i < options.contracts.length; i++)
    {
      var contractArtifact = options.contracts[i]
      var events = []

      if (contractArtifact.contractName in options.events) {
        events = options.events[contractArtifact.contractName]
      }

      action.drizzle.contracts[contractArtifact.contractName] = yield call(instantiateContract, {contractArtifact, events, store: action.drizzle.store, web3})
    }

    // Collect contract addresses in an array for later comparison in txs.
    var contractAddresses = []
    var contractNames = []

    for (var contract in action.drizzle.contracts)
    {
      contractNames.push(action.drizzle.contracts[contract].contractArtifact.contractName)
      contractAddresses.push(action.drizzle.contracts[contract].options.address.toLowerCase())
    }

    if (web3.currentProvider.isMetaMask) {
      // Using MetaMask, attempt block polling.
      const interval = options.polls.blocks

      yield put({type: 'BLOCKS_POLLING', contracts: action.drizzle.contracts, interval, contractAddresses, contractNames, web3})
    }
    else {
      // Not using MetaMask, attempt subscription block listening.
      yield put({type: 'BLOCKS_LISTENING', contracts: action.drizzle.contracts, contractAddresses, contractNames, web3})
    }

    // Accounts Polling
    if ('accounts' in options.polls) {
      yield put({type: 'ACCOUNTS_POLLING', interval: options.polls.accounts, web3})
    }
  }
  catch (error) {
    yield put({type: 'DRIZZLE_FAILED', error})

    console.error('Error initializing Drizzle:')
    console.error(error)

    return
  }

  yield put({type: 'DRIZZLE_INITIALIZED'})

  return
}

function* drizzleStatusSaga() {
  yield takeLatest('DRIZZLE_INITIALIZING', initializeDrizzle)
}

export default drizzleStatusSaga;