import { generateStore } from './generateStore'

// Load as promise so that async Drizzle initialization can still resolve
var windowPromise = new Promise((resolve, reject) => {
  window.addEventListener('load', resolve)
  
  // resolve in any case if we missed the load event and the document is already loaded
  if (document.readyState === `complete`) resolve()
})

class Drizzle {
  constructor (options, store) {
    // Variables
    this.contracts = {}
    this.contractList = []
    this.options = options
    this.store = store || this.generateStore(options)
    this.web3 = {}

    this.loadingContract = {}

    // Wait for window load event in case of injected web3.
    windowPromise.then(() => {
      // Begin Drizzle initialization.
      this.store.dispatch({ type: 'DRIZZLE_INITIALIZING', drizzle: this, options })
    })
  }

  addContract (contractConfig, events = []) {
    this.store.dispatch({
      type: 'ADD_CONTRACT',
      drizzle: this,
      contractConfig,
      events,
      web3: this.web3
    })
  }

  _addContract (drizzleContract) {
    if (this.contracts[drizzleContract.contractName]) {
      throw `Contract already exists: ${drizzleContract.contractName}`
    }
    this.contracts[drizzleContract.contractName] = drizzleContract
    this.contractList.push(drizzleContract)
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
