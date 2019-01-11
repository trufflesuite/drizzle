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
 * mockWeb3Assets deploys a contract on ganache provider
 *
 * @returns {Object} with web3Provider, accounts & truffleArtifact
 */
const mockWeb3Assets = async () => {
  const abi = require('./data/TestContract-abi.json')
  const byteCode = require('./data/TestContract-byteCode.json')
  const web3Provider = new Web3(global.provider)
  const accounts = await web3Provider.eth.getAccounts() // use global.accounts?

  const instance = new web3Provider.eth.Contract(abi)
  const deployedByteCode = await instance.deploy({ data: byteCode.object }).send({ from: accounts[0], gas: 150000 })

  const truffleArtifact = {
    contractName: 'TestContract',
    abi,
    byteCode,
    deployedByteCode,
    networks: { [global.defaultNetworkId]: { address: deployedByteCode._address } }
  }

  return { web3Provider, accounts, truffleArtifact }
}

module.exports = {
  mockDrizzleStore,
  mockWeb3,
  mockWeb3Assets
}
