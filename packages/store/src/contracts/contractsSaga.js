import { END, eventChannel } from 'redux-saga'
import { call, put, select, take, takeEvery } from 'redux-saga/effects'
import * as ContractActions from './constants'
import * as TransactionsActions from '../transactions/constants'

/*
 * Events
 */

export function createContractEventChannel ({
  contract,
  eventName,
  eventOptions
}) {
  const name = contract.contractName

  return eventChannel(emit => {
    const eventListener = contract.events[eventName](eventOptions)
      .on('data', event => {
        emit({ type: ContractActions.EVENT_FIRED, name, event })
      })
      .on('changed', event => {
        emit({ type: ContractActions.EVENT_CHANGED, name, event })
      })
      .on('error', error => {
        emit({ type: ContractActions.EVENT_ERROR, name, error })
        emit(END)
      })

    const unsubscribe = () => {
      eventListener.removeListener(eventName)
    }

    return unsubscribe
  })
}

function * callListenForContractEvent ({ contract, eventName, eventOptions }) {
  const contractEventChannel = yield call(createContractEventChannel, {
    contract,
    eventName,
    eventOptions
  })

  while (true) {
    var event = yield take(contractEventChannel)
    yield put(event)
  }
}

/*
 * Send and Cache
 */

function createTxChannel ({
  txObject,
  stackId,
  sendArgs = {},
  contractName,
  stackTempKey
}) {
  var persistTxHash

  return eventChannel(emit => {
    const txPromiEvent = txObject
      .send(sendArgs)
      .on('transactionHash', txHash => {
        persistTxHash = txHash

        emit({ type: TransactionsActions.TX_BROADCASTED, txHash, stackId })
        emit({ type: ContractActions.CONTRACT_SYNC_IND, contractName })
      })
      .on('confirmation', (confirmationNumber, receipt) => {
        emit({
          type: TransactionsActions.TX_CONFIRMATION,
          confirmationReceipt: receipt,
          txHash: persistTxHash
        })
      })
      .on('receipt', receipt => {
        emit({ type: TransactionsActions.TX_SUCCESSFUL, receipt: receipt, txHash: persistTxHash })
        emit(END)
      })
      .on('error', (error, receipt) => {
        console.error(error)
        console.error(receipt)

        emit({ type: TransactionsActions.TX_ERROR, error: error, stackTempKey })
        emit(END)
      })

    const unsubscribe = () => {
      txPromiEvent.off()
    }

    return unsubscribe
  })
}

function * callSendContractTx ({
  contract,
  fnName,
  fnIndex,
  args,
  stackId,
  stackTempKey
}) {
  // Check for type of object and properties indicative of call/send options.
  if (args.length) {
    const finalArg = args.length > 1 ? args[args.length - 1] : args[0]
    var sendArgs = {}
    var finalArgTest = false

    if (typeof finalArg === 'object') {
      var finalArgTest = yield call(isSendOrCallOptions, finalArg)
    }

    if (finalArgTest) {
      sendArgs = finalArg

      args.length > 1 ? delete args[args.length - 1] : delete args[0]
      args.length = args.length - 1
    }
  }

  // Get name to mark as desynchronized on tx creation
  const contractName = contract.contractName

  // Create the transaction object and execute the tx.
  const txObject = yield call(contract.methods[fnName], ...args)
  const txChannel = yield call(createTxChannel, {
    txObject,
    stackId,
    sendArgs,
    contractName,
    stackTempKey
  })

  try {
    while (true) {
      var event = yield take(txChannel)
      yield put(event)
    }
  } finally {
    txChannel.close()
  }
}

/*
 * Call and Cache
 */

function * callCallContractFn ({
  contract,
  fnName,
  fnIndex,
  args,
  argsHash,
  sync = false
}) {
  // keeping for pre-v1.1.5 compatibility with CALL_CONTRACT_FN event.
  if (sync) {
    return
  }

  // Check for type of object and properties indicative of call/send options.
  if (args.length) {
    const finalArg = args.length > 1 ? args[args.length - 1] : args[0]
    var callArgs = {}
    var finalArgTest = false

    if (typeof finalArg === 'object') {
      var finalArgTest = yield call(isSendOrCallOptions, finalArg)
    }

    if (finalArgTest) {
      callArgs = finalArg

      args.length > 1 ? delete args[args.length - 1] : delete args[0]
      args.length = args.length - 1
    }
  }

  // Create the transaction object and execute the call.
  const txObject = yield call(contract.methods[fnName], ...args)

  try {
    const callResult = yield call(txObject.call, callArgs)

    var dispatchArgs = {
      name: contract.contractName,
      variable: contract.abi[fnIndex].name,
      argsHash: argsHash,
      args: args,
      value: callResult,
      fnIndex: fnIndex
    }

    yield put({ type: ContractActions.GOT_CONTRACT_VAR, ...dispatchArgs })
  } catch (error) {
    console.error(error)

    var errorArgs = {
      name: contract.contractName,
      variable: contract.abi[fnIndex].name,
      argsHash: argsHash,
      args: args,
      error: error,
      fnIndex: fnIndex
    }

    yield put({ type: ContractActions.ERROR_CONTRACT_VAR, ...errorArgs })
  }
}

/*
 * Sync Contract
 */

function * callSyncContract (action) {
  // Get contract state from store
  const contract = action.contract
  const contractName = contract.contractName

  const contractsState = yield select(getContractsState)
  var contractFnsState = Object.assign({}, contractsState[contractName])

  // Remove unnecessary keys
  delete contractFnsState.initialized
  delete contractFnsState.synced
  delete contractFnsState.events

  // Iterate over functions and hashes
  for (var fnName in contractFnsState) {
    for (var argsHash in contractFnsState[fnName]) {
      const fnIndex = contractFnsState[fnName][argsHash].fnIndex
      const args = contractFnsState[fnName][argsHash].args

      // Pull args and call fn for each given function
      // keeping for pre-v1.1.5 compatibility with CALL_CONTRACT_FN event.
      yield put({
        type: ContractActions.CALL_CONTRACT_FN,
        contract,
        fnName,
        fnIndex,
        args,
        argsHash,
        sync: true
      })
      yield call(callCallContractFn, {
        contract,
        fnName,
        fnIndex,
        args,
        argsHash
      })
    }
  }

  // When complete, dispatch CONTRACT_SYNCED
  yield put({ type: ContractActions.CONTRACT_SYNCED, contractName })
}

const getContractsState = state => state.contracts

function isSendOrCallOptions (options) {
  if ('from' in options) return true
  if ('gas' in options) return true
  if ('gasPrice' in options) return true
  if ('value' in options) return true

  return false
}

function * contractsSaga () {
  yield takeEvery(ContractActions.SEND_CONTRACT_TX, callSendContractTx)
  yield takeEvery(ContractActions.CALL_CONTRACT_FN, callCallContractFn)
  yield takeEvery(ContractActions.CONTRACT_SYNCING, callSyncContract)
  yield takeEvery(ContractActions.LISTEN_FOR_EVENT, callListenForContractEvent)
}

export default contractsSaga
