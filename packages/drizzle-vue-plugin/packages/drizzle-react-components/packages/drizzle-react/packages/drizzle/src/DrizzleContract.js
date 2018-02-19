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

      for (var i = 0; i < this.abi.length; i++) {
        var item = this.abi[i]

        if (item.type == "function" && item.constant === true) {
          this.methods[item.name].cacheCall = this.cacheCallFunction(item.name, i)
        }

        if (item.type == "function" && item.constant === false) {
          this.methods[item.name].cacheSend = this.cacheSendFunction(item.name, i)
        }
      }

      const name = contractArtifact.contractName

      store.dispatch({type: 'CONTRACT_INITIALIZED', name})
    })
  }

  cacheCallFunction(fnName, fnIndex, fn) {
    var contract = this

    return function() {
      // Collect args and hash to use as key, 0x0 if no args
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
          return argsHash
        }
      }

      // Otherwise, call function and update store
      contract.store.dispatch({type: 'CALL_CONTRACT_FN', contract, fnName, fnIndex, args, argsHash})

      // Return nothing because state is currently empty.
      return argsHash
    }
  }

  cacheSendFunction(fnName, fnIndex, fn) {
    // NOTE: May not need fn index
    var contract = this

    return function() {
      var args = arguments

      // Generate temporary ID
      var stackId = contract.store.getState().transactionStack.length

      // Add ID to "transactionStack" with empty value
      contract.store.dispatch({type: 'PUSH_TO_STACK'})

      // TODO: FOR DEMO, MOVE MOVE MOVE
      const name = contract.contractArtifact.contractName
      contract.store.dispatch({type: 'CONTRACT_SYNC_IND', contractName: name})
      
      // Dispatch tx to saga
      // When txhash received, will be value of stack ID
      contract.store.dispatch({type: 'SEND_CONTRACT_TX', contract, fnName, fnIndex, args, stackId})
     
      // return promise that observes store, checks when stack ID has tx ID
      // resolve tx ID
      // Destroy store listener
      return new Promise((resolve, reject) => {
        let unsubscribe = contract.store.subscribe(() => {
          var stackHash = contract.store.store.getState().transactionStack[stackId]

          if (stackHash) {
            resolve(stackHash)
          }
        })

        unsubscribe()
      })
    }
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
