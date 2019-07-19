import { all, fork } from 'redux-saga/effects'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import drizzleSagas from './rootSaga'
import drizzleReducers from './reducer'
import { generateContractsInitialState } from './contractStateUtils'
import drizzleMW from './drizzle-middleware'

const composeSagas = sagas =>
  function * () {
    yield all(sagas.map(fork))
  }

/**
 * Generate the redux store by combining drizzleOptions, application reducers,
 * middleware and initial app state.
 *
 * @param {object} config - The configuration object
 * @param {object} config.drizzleOptions - drizzle configuration object
 * @param {object} config.reducers={} - application level reducers to include in drizzle's redux store
 * @param {object[]} config.appSagas=[] - application sagas to be managed by drizzle's saga middleware
 * @param {object[]} config.appMiddlewares=[] - application middlewares to be managed by drizzle's saga middleware
 * @param {boolean} config.disableReduxDevTools=false - disable redux devtools hook
 * @returns {object} Redux store
 *
 */
export function generateStore ({
  drizzleOptions,
  appReducers = {},
  appSagas = [],
  appMiddlewares = [],
  disableReduxDevTools = false,
  ...options
}) {
  // Note: Preserve backwards compatibility for passing options to
  // `generateStore`.  in drizzle v1.3.3 and prior of generate had a signature
  // of `generateStore(options)`.
  //
  // The updated signature looks for `drizzleOptions`, `appReducers`,
  // `appSagas`, `initialAppStore` and `disableReduxDevTools` while
  // {...options} captures the previous release's signature.
  //
  // Resolve drizzleOptions. If called by dapps written to previous API, then
  // drizzleOptions will be `undefined` and will resolve to rest constructed
  // options.
  //
  drizzleOptions = drizzleOptions || options

  const composeEnhancers = !disableReduxDevTools
    ? global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose

  let initialContractsState = {
    contracts: generateContractsInitialState(drizzleOptions)
  }

  const sagaMiddleware = createSagaMiddleware()
  const allMiddlewares = [...appMiddlewares, sagaMiddleware, drizzleMW]
  const allReducers = { ...drizzleReducers, ...appReducers }

  const store = createStore(
    combineReducers(allReducers),
    initialContractsState,
    composeEnhancers(applyMiddleware(...allMiddlewares))
  )

  sagaMiddleware.run(composeSagas([...drizzleSagas, ...appSagas]))
  return store
}
