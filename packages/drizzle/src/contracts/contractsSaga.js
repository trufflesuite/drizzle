import { call, put, select, takeLatest, takeEvery } from 'redux-saga/effects'

/*
 * Send and Cache
 */

function sendContractTx({contract, fnName, fnIndex, args, stackId}) {
  var persistTxHash
  
  return contract.methods[fnName](...args).send()
  .on('transactionHash', txHash => {
    console.log('Tx hash from saga:')
    console.log(txHash)

    persistTxHash = txHash

    put({type: 'TX_BROADCASTED', txHash, stackId})

    return txHash
  })
  .on('confirmation', (confirmationNumber, receipt) => {
    put({type: 'TX_CONFIRMAITON', confirmationReceipt: receipt, txHash: persistTxHash})
  })
  .on('receipt', receipt => {
    put({type: 'TX_SUCCESSFUL', receipt: receipt, txHash: persistTxHash})
  })
  .on('error', error => {
    put({type: 'TX_ERROR', error: error, txHash: persistTxHash})
  })
}

function* callSendContractTx(action) {
  var sendResult = yield call(sendContractTx, action)
}

/*
 * Call and Cache
 */

function callContractFn({contract, fnName, fnIndex, args, argsHash}) {
  return contract.methods[fnName](...args).call()
  .then(result => {
    return result
  })
  .catch(error => {
    console.error('Error in ' + contract.contractArtifact.contractName + ': ' + fnName)
    return console.error(error)
  })
}

function* callCallContractFn(action) {
  var callResult = yield call(callContractFn, action)

  if (!callResult) {
    yield call(console.error('No result from contract call!'))
  }

  // TODO: Extract into converter function
  /*if (action.contract.abi[action.fnIndex].outputs[0].type === 'uint256')
  {
    callResult = action.contract.web3.utils.hexToNumber(callResult)
  }

  if (action.contract.abi[action.fnIndex].outputs[0].type === 'string')
  {
    callResult = action.contract.web3.utils.hexToUtf8(callResult)
  }*/

  var dispatchArgs = {
    name: action.contract.contractArtifact.contractName,
    variable: action.contract.abi[action.fnIndex].name,
    argsHash: action.argsHash,
    args: action.args,
    value: callResult,
    fnIndex: action.fnIndex
  }

  yield put({type: 'GOT_CONTRACT_VAR', ...dispatchArgs})
}

/*
 * Sync Contract
 */

function* callSyncContract(action) {
  // Get contract state from store
  const contract = action.contract
  const contractName = contract.contractArtifact.contractName

  const contractsState = yield select(getContractsState)
  const contractState = contractsState[contractName]

  // Iterate over functions and hashes
  for (var fnName in contractState)
  {
    for (var argsHash in contractState[fnName])
    {
      const fnIndex = contractState[fnName][argsHash].fnIndex
      const args = contractState[fnName][argsHash].args

      // Pull args and call fn for each given function
      yield put({type: 'CALL_CONTRACT_FN', contract, fnName, fnIndex, args, argsHash})
    }
  }

  // When complete, dispatch CONTRACT_SYNCED
  yield put({type: 'CONTRACT_SYNCED', contractName})
}

const getContractsState = (state) => state.contracts

function* contractsSaga() {
  yield takeEvery('SEND_CONTRACT_TX', callSendContractTx)
  yield takeEvery('CALL_CONTRACT_FN', callCallContractFn)
  yield takeEvery('CONTRACT_SYNCING', callSyncContract)
}

export default contractsSaga;
