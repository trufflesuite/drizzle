import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
import reducer from './reducer'
import { generateContractsInitialState } from './generateContractsInitialState'
import getAbi from './getAbi'

export function generateStore (options) {
  // Redux DevTools
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  // Preloaded state
  var preloadedState = {
    contracts: generateContractsInitialState(options)
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
