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

      /*
      Loop through contract functions similar to TrufflContract and add check store first for data then:
        return store data then refresh
      or (if no data from that function at all)
        return loading and get data

      Removes need for most of these functions
      */
      for (var i = 0; i < this.abi.length; i++) {
        var item = this.abi[i];

        if (item.type == "function" && item.constant === true) {
          this.methods[item.name].data = this.dataFunction(item.name, i);
        }
      }

      const name = contractArtifact.contractName

      store.dispatch({type: 'CONTRACT_INITIALIZED', name})
    })
  }

  dataFunction(fnName, fnIndex, fn) {
    var contract = this

    return function() {
      // Collect args and has to use as key, 0x0 if no args
      var argsHash = '0x0'
      var args = arguments

      if (args.length > 0) {
        argsHash = contract.generateArgsHash(args)
      }
      const contractName = contract.contractArtifact.contractName
      const functionState = contract.store.getState().contracts[contractName][fnName]

      // If call result is in state and fresh, return value instead of calling
      if (argsHash in functionState) {
        if (contract.store.getState().contracts[contractName].synced === true) {
          return functionState[argsHash].value;
        }
      }

      // Otherwise, call function and update store
      contract.store.dispatch({type: 'DERP_CONTRACT_VAR', contract, fnName, fnIndex, args, argsHash})

      // Return nothing because state is currently empty.
      return '';
    };

    // Check if value in store
      // Check if value fresh
      // If fresh, return value
        // If stale, dispatch action with:
          // function, this (contract instance)

    // Can do 90% of this with a simple "data() function"
    // txs no longer need be tracked as block observer takes care of this
  }

  generateArgsHash(args) {
    var web3 = this.web3
    var hashString = ''

    for (var i = 0; i < args.length; i++)
    {
      if (typeof args[i] !== 'function')
      {
        var hashPiece = web3.utils.sha3(args[i])

        hashString += hashPiece
      }
    }

    return web3.utils.sha3(hashString)
  }
}

export default DrizzleContract
