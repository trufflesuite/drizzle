class DrizzleContract {
  constructor (
    web3Contract,
    web3,
    name,
    store,
    events = [],
    contractArtifact = {}
  ) {
    this.abi = web3Contract.options.jsonInterface
    this.address = web3Contract.options.address
    this.web3 = web3
    this.contractName = name
    this.contractArtifact = contractArtifact
    this.store = store

    // Merge web3 contract instance into DrizzleContract instance.
    Object.assign(this, web3Contract)

    for (var i = 0; i < this.abi.length; i++) {
      var item = this.abi[i]

      if (item.type == 'function' && item.constant === true) {
        this.methods[item.name].cacheCall = this.cacheCallFunction(item.name, i)
      }

      if (item.type == 'function' && item.constant === false) {
        this.methods[item.name].cacheSend = this.cacheSendFunction(item.name, i)
      }
    }

    // Register event listeners if any events.
    if (events.length > 0) {
      for (i = 0; i < events.length; i++) {
        let event = events[i]

        if (typeof event === 'object') {
          store.dispatch({
            type: 'LISTEN_FOR_EVENT',
            contract: this,
            eventName: event.eventName,
            eventOptions: event.eventOptions
          })
        } else {
          store.dispatch({
            type: 'LISTEN_FOR_EVENT',
            contract: this,
            eventName: event
          })
        }
      }
    }
  }

  cacheCallFunction (fnName, fnIndex, fn) {
    var contract = this

    return function () {
      // Collect args and hash to use as key, 0x0 if no args
      var argsHash = '0x0'
      var args = arguments

      if (args.length > 0) {
        argsHash = contract.generateArgsHash(args)
      }
      const contractName = contract.contractName
      const functionState = contract.store.getState().contracts[contractName][
        fnName
      ]

      // If call result is in state and fresh, return value instead of calling
      if (argsHash in functionState) {
        if (contract.store.getState().contracts[contractName].synced === true) {
          return argsHash
        }
      }

      // Otherwise, call function and update store
      contract.store.dispatch({
        type: 'CALL_CONTRACT_FN',
        contract,
        fnName,
        fnIndex,
        args,
        argsHash
      })

      // Return nothing because state is currently empty.
      return argsHash
    }
  }

  cacheSendFunction (fnName, fnIndex, fn) {
    // NOTE: May not need fn index
    var contract = this

    return function () {
      var args = arguments

      // Generate temporary ID
      const transactionStack = contract.store.getState().transactionStack
      const stackId = transactionStack.length
      const stackTempKey = `TEMP_${new Date().getTime()}`

      // Add ID to "transactionStack" with temp value, will be overwritten on TX_BROADCASTED
      contract.store.dispatch({ type: 'PUSH_TO_TXSTACK', stackTempKey })

      // Dispatch tx to saga
      // When txhash received, will be value of stack ID
      contract.store.dispatch({
        type: 'SEND_CONTRACT_TX',
        contract,
        fnName,
        fnIndex,
        args,
        stackId,
        stackTempKey
      })

      // return stack ID
      return stackId
    }
  }

  generateArgsHash (args) {
    var web3 = this.web3
    var hashString = ''

    for (var i = 0; i < args.length; i++) {
      if (typeof args[i] !== 'function') {
        var argToHash = args[i]

        // Stringify objects to allow hashing
        if (typeof argToHash === 'object') {
          argToHash = JSON.stringify(argToHash)
        }

        // Convert number to strong to allow hashing
        if (typeof argToHash === 'number') {
          argToHash = argToHash.toString()
        }

        // This check is in place for web3 v0.x
        if ('utils' in web3) {
          var hashPiece = web3.utils.sha3(argToHash)
        } else {
          var hashPiece = web3.sha3(argToHash)
        }

        hashString += hashPiece
      }
    }

    return web3.utils.sha3(hashString)
  }
}

export default DrizzleContract
