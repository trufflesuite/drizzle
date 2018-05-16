// Load as promise so that async Drizzle initialization can still resolve
var windowPromise = new Promise((resolve, reject) => {
  window.addEventListener('load', resolve)
})

class Drizzle {
  constructor(options, store) {
    // Variables
    this.contracts = {}
    this.contractList = []
    this.options = options
    this.store = store
    this.web3 = {}

    this.loadingContract = {}

    // Wait for window load event in case of injected web3.
    windowPromise.then(() => {
      // Begin Drizzle initialization.
      store.dispatch({type: 'DRIZZLE_INITIALIZING', drizzle: this, options})
    })
  }

  addContract (contractConfig, events = []) {
    this.store.dispatch({type: 'ADD_CONTRACT', drizzle: this, contractConfig, events, web3: this.web3})
  }

  _addContract (drizzleContract) {
    if (this.contracts[drizzleContract.contractName]) { throw `Contract already exists: ${drizzleContract.contractName}` }
    this.contracts[drizzleContract.contractName] = drizzleContract
    this.contractList.push(drizzleContract)
  }

  findContractByAddress (address) {
    return this.contractList.find((contract) => {
      return contract.address.toLowerCase() === address.toLowerCase()
    })
  }
}

export default Drizzle
