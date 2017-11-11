import DrizzleError from './DrizzleError'

class DrizzleContract {
  constructor(contractArtifact, web3, store) {
    this.contractArtifact = contractArtifact
    this.abi = contractArtifact.abi
    this.web3 = web3
    this.store = store

    var networkId = 0

    web3.eth.net.getId()
    .then((networkId) => {
      var web3Contract = new web3.eth.Contract(
        this.abi,
        this.contractArtifact.networks[networkId].address,
        {
          from: this.store.getState().accounts[0],
          data: this.contractArtifact.deployedBytecode
        }
      )

      Object.assign(this, web3Contract)

      return this.syncData(0)
    })
  }

  syncData(i) {
    let contract = this

    // Indicate contract syncing for loading spinners, etc.
    this.store.dispatch({type: 'CONTRACT_SYNCING', contract})

    if (this.abi[i].constant === true && this.abi[i].payable === false && this.abi[i].inputs.length === 0)
    {
      var name = this.abi[i].name
      var web3 = this.web3

      new Promise((resolve, reject) => {
        this.store.dispatch({type: 'GETTING_CONTRACT_VAR', resolve, reject, contract, i, name, web3})
      }).catch((error) => {
        new DrizzleError(error)
      })
    }

    // More to sync!
    if (i < this.abi.length - 1)
    {
      return this.syncData(i + 1)
    }

    // Sync Complete!
    return this.store.dispatch({type: 'CONTRACT_SYNCED', contract})
  }

  /*
   * string cFunction: The name of the function to be called.
   * object cFunctionParams: {
   *  int accountNumber
   *  object params
   * }
   * string datumToSync
   */
  tx(cFunction, cFunctionParams) {
    let contract = this

    return new Promise((resolve, reject) => {
      this.store.dispatch({type: 'SENDING_CONTRACT_TX', resolve, reject, contract, cFunction, cFunctionParams})
    }).then(() => {
      console.log('Transaction sent, attempting to sync contract data with store...')

      this.syncData(0)
    }).catch((error) => {
      new DrizzleError(error)
    })
  }
}

export default DrizzleContract
