import { generateStore } from './generateStore'
import defaultOptions from './defaultOptions'
import merge from './mergeOptions'
import DrizzleContract from './DrizzleContract'
import * as ContractActions from './contracts/constants'
import * as DrizzleActions from './drizzleStatus/constants'

// Load as promise so that async Drizzle initialization can still resolve
var isEnvReadyPromise = new Promise((resolve, reject) => {
  const hasNavigator = typeof navigator !== 'undefined'
  const hasWindow = typeof window !== 'undefined'
  const hasDocument = typeof document !== 'undefined'

  if (hasNavigator && navigator.product === 'ReactNative') {
    return resolve()
  }

  if (hasWindow) {
    return window.addEventListener('load', resolve)
  }

  // resolve in any case if we missed the load event and the document is already loaded
  if (hasDocument && document.readyState === `complete`) {
    return resolve()
  }
})

export const getOrCreateWeb3Contract = (store, contractConfig, web3) => {
  if (contractConfig.web3Contract) {
    return contractConfig.web3Contract
  }

  const state = store.getState()
  const networkId = state.web3 && state.web3.networkId
  const selectedAccount = state.accounts[0]

  const { abi, networks, deployedBytecode } = contractConfig
  return (
    new web3.eth.Contract(abi, networks[networkId].address, {
      from: selectedAccount,
      data: deployedBytecode
    })
  )
}

class Drizzle {
  constructor (givenOptions, store) {
    const options = merge(defaultOptions, givenOptions)

    // Variables
    this.contracts = {}
    this.contractList = []
    this.options = options
    this.store = store || this.generateStore(options)
    this.web3 = {}

    this.loadingContract = {}

    // Wait for window load event in case of injected web3.
    isEnvReadyPromise.then(() => {
      // Begin Drizzle initialization.
      this.store.dispatch({
        type: DrizzleActions.DRIZZLE_INITIALIZING,
        drizzle: this,
        options
      })
    })
  }

  addContract (contractConfig, events = []) {
    const web3Contract = getOrCreateWeb3Contract(
      this.store,
      contractConfig,
      this.web3
    )
    const drizzleContract = new DrizzleContract(
      web3Contract,
      this.web3,
      contractConfig.contractName,
      this.store,
      events
    )

    if (this.contracts[drizzleContract.contractName]) {
      throw new Error(
        `Contract already exists: ${drizzleContract.contractName}`
      )
    }

    this.store.dispatch({ type: ContractActions.CONTRACT_INITIALIZING, contractConfig })

    this.contracts[drizzleContract.contractName] = drizzleContract
    this.contractList.push(drizzleContract)

    this.store.dispatch({
      type: ContractActions.CONTRACT_INITIALIZED,
      name: contractConfig.contractName
    })
  }

  deleteContract (contractName) {
    // Deleting a contract means removing it from this instance's
    // `contractList`, `contracts`, and `loadingContract`

    if (!this.contracts[contractName]) {
      throw new Error(`Contract does not exist: ${contractName}`)
    }

    this.contractList = this.contractList.filter(
      contract => contract.contractName !== contractName
    )

    const { [contractName]: omittedContract, ...restContracts } = this.contracts
    this.contracts = restContracts

    const {
      [contractName]: omittedLoading,
      ...restLoadingContract
    } = this.loadingContract

    this.loadingContract = restLoadingContract

    this.store.dispatch({
      type: ContractActions.DELETE_CONTRACT,
      contractName
    })
  }

  findContractByAddress (address) {
    return this.contractList.find(contract => {
      return contract.address.toLowerCase() === address.toLowerCase()
    })
  }

  /*
   * NOTE
   * This strangeness is for backward compatibility with < v1.2.4
   * Future versions will have generateStore's contents here
   */
  generateStore (options) {
    return generateStore(options)
  }
}

export default Drizzle
