import { all, fork } from 'redux-saga/effects'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import drizzleSagas from './rootSaga'
import drizzleReducers from './reducer'
import { generateContractsInitialState } from './contractStateUtils'

const composeSagas = sagas =>
  function*() {
    yield all(sagas.map(fork))
  }

/**
 * Generate the redux store by combining drizzleOptions, application reducers,
 * middleware and initial app state.
 *
 * @param {object} config - The configuration object
 * @param {object} config.drizzleOptions - drizzle configuration object
 * @param {object} [config.reducers={}] - application level reducers to include in drizzle's redux store
 * @param {object[]} [config.appSagas=[]] - application sagas to be managed by drizzle's saga middleware
 * @param {object} [config.initialAppState={}] - application store tree initial value
 * @param {boolean} [config.disableReduxDevTools=false] - disable redux devtools hook
 * @returns {object} Redux store
 *
 */
export function generateStore({
  drizzleOptions,
  appReducers = {},
  appSagas = [],
  initialAppState = {},
  disableReduxDevTools = false,
  ...options
}) {
  // Note: Preserve backwards compatibility for passing options to `generageStore`.
  // in drizzle v1.3.3 and prior of generate had a signature of `generateStore(options)`.
  //
  // {...options} exists to capture previous signature. The following line
  // checks for the newer drizzleOptions and falls back to the rest-constructed
  // options variable.
  //
  drizzleOptions = drizzleOptions || options

  const composeEnhancers = !disableReduxDevTools
    ? global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose

  let initialState = {
    contracts: generateContractsInitialState(drizzleOptions),
    ...initialAppState
  }

  const sagaMiddleware = createSagaMiddleware()
  const allMiddlewares = [sagaMiddleware]
  const allReducers = { ...drizzleReducers, ...appReducers }

  const store = createStore(
    combineReducers(allReducers),
    initialState,
    composeEnhancers(applyMiddleware(...allMiddlewares))
  )

  sagaMiddleware.run(composeSagas([...drizzleSagas, ...appSagas]))
  return store
}
