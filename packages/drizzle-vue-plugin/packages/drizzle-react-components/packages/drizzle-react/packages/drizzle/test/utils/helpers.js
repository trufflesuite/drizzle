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

/**
 * mockWeb3AndContract deploys a contract on ganache provider
 *
 * @returns {Object} with web3Provider, deployedContract, abi, byteCode and accounts
 */
const mockWeb3AndContract = async () => {
  const abi = require('./data/TestContract-abi.json')
  const byteCode = require('./data/TestContract-byteCode.json')
  const web3Provider = new Web3(global.provider)
  const accounts = await web3Provider.eth.getAccounts() // use global.accounts?

  const instance = new web3Provider.eth.Contract(abi)
  const deployedContract = await instance
    .deploy({ data: byteCode.object })
    .send({ from: accounts[0], gas: 150000 })

  return { web3Provider, deployedContract, abi, byteCode, accounts }
}

module.exports = {
  mockDrizzleStore,
  mockWeb3,
  mockWeb3AndContract
}
