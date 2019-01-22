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
 * getWeb3
 * @param {object} provider
 *
 * @returns {Object} A Web3 provider sourced from `global.provider`
 */
const getWeb3 = (provider = global.provider) => new Web3(provider)

/**
 * getWeb3Assets deploys a contract on ganache provider
 *
 * @returns {Object} with web3, accounts & truffleArtifact
 */
const getWeb3Assets = async () => {
  const abi = require('./data/TestContract-abi.json')
  const byteCode = require('./data/TestContract-byteCode.json')
  // const web3 = new Web3(global.provider)
  const web3 = getWeb3()
  const accounts = await web3.eth.getAccounts() // use global.accounts?

  const instance = new web3.eth.Contract(abi)
  const deployedByteCode = await instance
    .deploy({ data: byteCode.object })
    .send({ from: accounts[0], gas: 150000 })

  const truffleArtifact = {
    contractName: 'TestContract',
    abi,
    byteCode,
    deployedByteCode,
    networks: {
      [global.defaultNetworkId]: { address: deployedByteCode._address }
    }
  }

  return { web3, accounts, truffleArtifact }
}

module.exports = {
  mockDrizzleStore,
  getWeb3,
  getWeb3Assets
}
