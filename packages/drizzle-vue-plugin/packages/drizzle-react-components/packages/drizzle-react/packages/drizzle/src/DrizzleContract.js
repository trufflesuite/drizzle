import store from './store'
import DrizzleError from './DrizzleError'

class DrizzleContract {
  constructor(contractArtifact, networkId) {
    this.contractArtifact = contractArtifact
    this.abi = contractArtifact.abi
    this.data = {}
    this.synced = false

    var web3 = store.getState().web3

    var web3Contract = new web3.eth.Contract(
      this.abi,
      this.contractArtifact.networks[networkId].address,
      {
        from: store.getState().accounts[0],
        data: this.contractArtifact.unlinked_binary
      }
    )

    Object.assign(this, web3Contract)

    this.syncData(0)
  }

  getData(key) {
    if (key in this.data) {
      return this.data[key]
    }

    return 'X'
  }

  syncData(i) {
    let contract = this

    if (
      this.abi[i].constant === true &&
      this.abi[i].payable === false &&
      this.abi[i].inputs.length === 0
    ) {
      var name = this.abi[i].name

      new Promise((resolve, reject) => {
        store.dispatch({
          type: 'GETTING_CONTRACT_VAR',
          resolve,
          reject,
          contract,
          i,
          name
        })
      }).catch(error => {
        new DrizzleError(error)
      })
    }

    // More to sync!
    if (i < this.abi.length - 1) {
      return this.syncData(i + 1)
    }

    // Sync Complete!
    return store.dispatch({ type: 'CONTRACT_SYNCED', contract })
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
      store.dispatch({
        type: 'SENDING_CONTRACT_TX',
        resolve,
        reject,
        contract,
        cFunction,
        cFunctionParams
      })
    })
      .then(() => {
        console.log(
          'Transaction sent, attempting to sync contract data with store...'
        )

        this.syncData(0)
      })
      .catch(error => {
        new DrizzleError(error)
      })
  }
}

export default DrizzleContract
