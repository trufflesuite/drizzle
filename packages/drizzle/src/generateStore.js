import 'babel-polyfill' // Required for async/await in redux-saga
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { combineReducers } from 'redux'

// Reducers
import accountsReducer from './accounts/accountsReducer'
import accountBalancesReducer from './accountBalances/accountBalancesReducer'
import contractsReducer from './contracts/contractsReducer'
import drizzleStatusReducer from './drizzleStatus/drizzleStatusReducer'
import transactionsReducer from './transactions/transactionsReducer'
import transactionStackReducer from './transactions/transactionStackReducer'
import web3Reducer from './web3/web3Reducer'
import { all, fork } from 'redux-saga/effects'

// Sagas
import accountsSaga from './accounts/accountsSaga'
import accountBalancesSaga from './accountBalances/accountBalancesSaga'
import blocksSaga from './blocks/blocksSaga'
import contractsSaga from './contracts/contractsSaga'
import drizzleStatusSaga from './drizzleStatus/drizzleStatusSaga'
import web3Saga from './web3/web3Saga'
import sagaMiddlewareFactory from 'redux-saga'

function generateStore(options) {
  // Combine Drizzle reducers and sagas with user's.
  const reducer = combineReducers({
    accounts: accountsReducer,
    accountBalances: accountBalancesReducer,
    contracts: contractsReducer,
    drizzleStatus: drizzleStatusReducer,
    transactions: transactionsReducer,
    transactionStack: transactionStackReducer,
    web3: web3Reducer,
    ...options.reducers
  })

  const sagas = [
    accountsSaga,
    accountBalancesSaga,
    blocksSaga,
    contractsSaga,
    drizzleStatusSaga,
    web3Saga
  ]

  if (options.sagas) {
    sagas.push(options.sagas)
  }

  function* rootSaga() {
    yield all(sagas.map(saga => fork(saga)))
  }

  // Redux DevTools
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  // Preloaded state
  var contractsInitialState = {}

  for (var i = 0; i < options.contracts.length; i++) {
    // Initial contract details
    var contractName = options.contracts[i].contractName

    contractsInitialState[contractName] = {
      initialized: false,
      synced: false
    }

    // Constant getters
    for (var i2 = 0; i2 < options.contracts[i].abi.length; i2++) {
      var item = options.contracts[i].abi[i2]

      if (item.type == 'function' && item.constant === true) {
        contractsInitialState[contractName][item.name] = {}
      }
    }
  }

  var preloadedState = {
    accounts: {},
    contracts: contractsInitialState
    //web3: {}
  }

  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    reducer,
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  )

  sagaMiddleware.run(rootSaga)

  return store
}

module.exports = generateStore
