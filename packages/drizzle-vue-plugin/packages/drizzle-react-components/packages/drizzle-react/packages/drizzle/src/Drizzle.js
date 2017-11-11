import DrizzleContract from './DrizzleContract'
import DrizzleError from './DrizzleError'

var Web3 = require('web3')

class Drizzle {
  constructor(options, store) {
    // Variables
    // TODO: Add default options.
    this.options = options
    this.contracts = {}
    this.errors = {}
    this.initialized = false
    this.store = store
    this.web3 = {}

    // Function Bindings
    this.getWeb3 = this.getWeb3.bind(this)
    this.getAccounts = this.getAccounts.bind(this)
    this.getContracts = this.getContracts.bind(this)
    this.observeBlocks = this.observeBlocks.bind(this)

    window.addEventListener('load', () => {
      this.getWeb3()
    })
  }

  getWeb3() {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider.
      this.web3 = new Web3(window.web3.currentProvider)

      console.log('Injected web3 detected.')

      return this.getAccounts()
    } else {

      if (this.options.web3.fallback) {
        // Attempt fallback if no web3 injection.
        console.log('No web3 instance injected, using fallback.')

        switch (this.options.web3.fallback.type) {
          case 'ws':
            var provider = new Web3.providers.WebsocketProvider(this.options.web3.fallback.url)
            this.web3 = new Web3(provider)
            return this.getAccounts()
            break
          default:
            // Invalid options; throw.
            console.error('Invalid web3 fallback provided.')
        }
      }

      // Out of web3 options; throw.
      console.error('Cannot initialize web3.')
    }
  }

  getAccounts() {
    var web3 = this.web3

    return new Promise((resolve, reject) => {
      this.store.dispatch({type: 'ACCOUNTS_FETCHING', web3, resolve, reject})
    }).then(() => {
      this.getContracts()
    }).catch((error) => {
      new DrizzleError(error)
    })
  }

  getContracts() {
    var store = this.store
    var web3 = this.web3

    // Get all JSON artifacts passed in by user, instantiating and storing each contract.
    for (var i = 0; i < this.options.contracts.length; i++)
    {
      var contractArtifact = this.options.contracts[i]

      this.contracts[contractArtifact.contractName] = new DrizzleContract(contractArtifact, web3, store)
    }

    this.observeBlocks()
  }

  observeBlocks() {
    this.initialized = true

    // Observe new blocks and re-sync accounts and contracts.
    this.web3.eth.subscribe('newBlockHeaders', (error, result) => {
      if (error)
      {
        console.error(error)
      }
    })
    .on('data', (blockHeader) => {
      console.log('New block!')
    })
  }
}

export default Drizzle
