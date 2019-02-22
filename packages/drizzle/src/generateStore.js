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
 * @param {object} [config.reducers={}] - application level reducers to include in store
 * @param {object[]} [config.appSagas=[]] - application saga middlewares to include in store
 * @param {object[]} [config.appMiddlewares=[]] - application middlewares to include in store
 * @param {object} [config.initialAppState={}] - application store tree initial value
 * @param {boolean} [config.disableReduxDevTools=false] - disable redux devtools hook
 * @returns {object} Redux store
 *
 */
export function generateStore({
  drizzleOptions,
  appReducers = {},
  appSagas = [],
  appMiddlewares = [],
  initialAppState = {},
  disableReduxDevTools = false,
  ...options
}) {
  // oh boy! Not elegant, 不好！
  // Note: This is for backwards compatibility. Pre version(todo: insert
  // version) of generate had a signature of `generateStore(options)`.
  //
  // This hack of {...options} exists to capture usage of prior versions. The
  // following line checks for the newer drizzleOptions and falls back to the
  // rest-constructed options variable
  //
  drizzleOptions = drizzleOptions || options
  // Redux DevTools
  const composeEnhancers = !disableReduxDevTools
    ? global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose

  // Preloaded state
  let preloadedState = {
    contracts: generateContractsInitialState(drizzleOptions),
    ...initialAppState
  }

  const sagaMiddleware = createSagaMiddleware()

  // consolidate all redux middleware
  const allMiddlewares = [sagaMiddleware, ...appMiddlewares]
  // and reducers
  const allReducers = { ...drizzleReducers, ...appReducers }

  const store = createStore(
    combineReducers(allReducers),
    preloadedState,
    composeEnhancers(applyMiddleware(...allMiddlewares))
  )

  sagaMiddleware.run(composeSagas([...drizzleSagas, ...appSagas]))
  return store
}
