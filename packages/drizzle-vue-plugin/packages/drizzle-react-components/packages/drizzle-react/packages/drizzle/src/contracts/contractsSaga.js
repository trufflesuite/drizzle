import { call, put, select, takeLatest, takeEvery } from 'redux-saga/effects'

/*
 * Call and Cache Contract Function
 */

function derpContractVar({contract, fnName, fnIndex, args, argsHash}) {
  return contract.methods[fnName](...args).call()
  .then(result => {
    return result
  })
  .catch(error => {
    console.error('Error in ' + contract.contractArtifact.contractName + ': ' + fnName)
    return console.error(error)
  })
}

function* callDerpContractVar(action) {
  var derpResult = yield call(derpContractVar, action)

  if (!derpResult) {
    yield call(console.error('No result from contract call!'))
  }

  // TODO: Extract into converter function
  /*if (action.contract.abi[action.fnIndex].outputs[0].type === 'uint256')
  {
    derpResult = action.contract.web3.utils.hexToNumber(derpResult)
  }

  if (action.contract.abi[action.fnIndex].outputs[0].type === 'string')
  {
    derpResult = action.contract.web3.utils.hexToUtf8(derpResult)
  }*/

  var derp = {
    name: action.contract.contractArtifact.contractName,
    variable: action.contract.abi[action.fnIndex].name,
    argsHash: action.argsHash,
    args: action.args,
    value: derpResult,
    fnIndex: action.fnIndex
  }

  yield put({type: 'GOT_CONTRACT_VAR', ...derp})
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

      // Pull args and call derp for each given function
      yield put({type: 'DERP_CONTRACT_VAR', contract, fnName, fnIndex, args, argsHash})
    }
  }

  // When complete, dispatch CONTRACT_SYNCED
  yield put({type: 'CONTRACT_SYNCED', contractName})
}

const getContractsState = (state) => state.contracts

function* contractsSaga() {
  yield takeEvery('DERP_CONTRACT_VAR', callDerpContractVar)
  yield takeEvery('CONTRACT_SYNCING', callSyncContract)
}

export default contractsSaga;
