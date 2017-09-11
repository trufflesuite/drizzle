import store from './store'
import DrizzleError from './DrizzleError'

class Drizzle {
  constructor(contractArtifacts) {
    this.contractArtifacts = contractArtifacts
    this.contracts = {}
    this.errors = {}
    this.initialized = false
    this.store = store
    this.web3 = {}

    window.addEventListener('load', () => {
      this.getWeb3()
    })
  }

  getWeb3() {
    return new Promise((resolve, reject) => {
      store.dispatch({ type: 'WEB3_INITIALIZING', resolve, reject })
    })
      .then(() => {
        this.getAccounts()
      })
      .catch(error => {
        new DrizzleError(error)
      })
  }

  getAccounts() {
    return new Promise((resolve, reject) => {
      store.dispatch({ type: 'ACCOUNTS_FETCHING', resolve, reject })
    })
      .then(() => {
        this.getContracts()
      })
      .catch(error => {
        new DrizzleError(error)
      })
  }

  getContracts() {
    // Get all JSON artifacts passed in by user, instantiating and storing each contract.
    for (var i = 0; i < this.contractArtifacts.length; i++) {
      var contractArtifact = this.contractArtifacts[i]

      new Promise((resolve, reject) => {
        store.dispatch({
          type: 'INITIALIZING_CONTRACT',
          contractArtifact,
          resolve,
          reject
        })
      }).catch(error => {
        new DrizzleError(error)
      })
    }

    this.observeBlocks()
  }

  observeBlocks() {
    this.initialized = true

    // Observe new blocks and re-sync accounts and contracts.
    let web3 = store.getState().web3

    web3.eth
      .subscribe('newBlockHeaders', (error, result) => {
        if (error) {
          console.error(error)
        }
      })
      .on('data', blockHeader => {
        console.log('New block!')
      })
  }
}

export default Drizzle
