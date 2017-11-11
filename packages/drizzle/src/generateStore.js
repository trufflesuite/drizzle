import 'babel-polyfill' // Required for async/await in redux-saga
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
import reducer from './reducer'

function generateStore(options) {
  // Redux DevTools
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // Preloaded state
  var contractsInitialState = {}

  for (var i = 0; i < options.contracts.length; i++)
  {
    var contractName = options.contracts[i].contractName

    contractsInitialState[contractName] = {
      initialized: false,
      synced: false
    }
  }

  console.log(contractsInitialState)

  var preloadedState = {
    accounts: {},
    contracts: contractsInitialState,
    //web3: {}
  }

  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    reducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        sagaMiddleware,
        thunkMiddleware
      )
    )
  )

  sagaMiddleware.run(rootSaga)

  return store
}

module.exports = generateStore
