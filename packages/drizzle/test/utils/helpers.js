import Web3 from 'web3'

/**
 * mockDrizzleStore
 *
 * @param {Object} initialState={} Set the initial State of the drizzle store.
 * @returns {Array} [mockStore, dispatchedActions]
 */
const mockDrizzleStore = (initialState = {}) => {
  const dispatchedActions = []
  const mockStore = {
    getState: () => initialState,
    dispatch: action => dispatchedActions.push(action)
  }

  return [mockStore, dispatchedActions]
}

/**
 * mockWeb3
 *
 * @returns {Object} A Web3 provider sourced from `global.provider`
 */
const mockWeb3 = () => new Web3(global.provider)

module.exports = {
  mockDrizzleStore,
  mockWeb3
}
