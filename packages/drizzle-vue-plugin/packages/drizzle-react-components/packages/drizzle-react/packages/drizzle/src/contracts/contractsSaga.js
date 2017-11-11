import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import DrizzleContract from '../DrizzleContract'
import store from '../store'

/*
 * Contract Varialble Sync
 */
function getContractVar({contract, i, name, web3}) {
  console.log(contract.contractArtifact.contractName + ': ' + contract.abi[i].name)

  return contract.methods[name]().call({from: store.getState().accounts[0]}, (error, result) => {
    if (error) {
      console.error('Error in ' + contract.contractArtifact.contractName + ': ' + contract.abi[i].name)
      console.error(error)

      return
    }

    // If return value is an integer, convert to the appropriate type.
    if (contract.abi[i].outputs[0].type === 'uint256')
    {
      result = web3.utils.hexToNumber(result)
    }

    var contractInfo = {
      name: contract.contractArtifact.contractName,
      variable: name,
      value: result
    }

    console.log(contractInfo)

    return contractInfo
  })
}

function* callGetContractVar(action) {
  const contractInfo = yield call(getContractVar, action)

  if (!contractInfo) {
    yield call(action.reject, {source: 'contracts (' + action.name + ')', message: 'Failed to initialize contract variable.'})
  }

  var derp = {
    name: action.contract.contractArtifact.contractName,
    variable: action.contract.abi[action.i].name,
    value: contractInfo
  }

  yield put({type: 'GOT_CONTRACT_VAR', ...derp})
  yield call(action.resolve)
}

/*
 * Contract Tx
 */
function sendContractTx({contract, cFunction, cFunctionParams}) {
  var defaultAccount = store.getState().accounts[0]

  return contract.methods[cFunction](cFunctionParams).send({from: defaultAccount, gas: 4700000})
  .then((receipt) => {
    return receipt
  })
  .catch((error) => {
    console.error('Error in ' + contract.contractArtifact.contractName + ': ' + cFunction)
    console.error(error)

    return false
  })
}

function* callSendContractTx(action) {
  const contractInfo = yield call(sendContractTx, action)

  console.log(contractInfo)

  if (!contractInfo) {
    yield call(action.reject, {source: 'contracts (' + action.cFunction + ')', message: 'Failed to initialize contract variable.'})
  }

  yield call(action.resolve)
}

function* contractsSaga() {
  yield takeEvery('GETTING_CONTRACT_VAR', callGetContractVar)
  yield takeEvery('SENDING_CONTRACT_TX', callSendContractTx)
}

export default contractsSaga;
