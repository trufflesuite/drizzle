import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import store from '../store'
import DrizzleContract from '../DrizzleContract'

/*
 * Contract Initialization
 */
function initializeContract(contractArtifact) {
  var web3 = store.getState().web3

  // Since Truffle artifacts have their deployed addresses stored by network id,
  // we first get the current network id web3 is connected to, then initialize
  // the contract with the proper address.

  return web3.eth.net
    .getId()
    .then(id => {
      var contractName = contractArtifact.contract_name

      console.log('Initializing contract: ' + contractName + '...')

      var contract = new DrizzleContract(contractArtifact, id)

      var contractInfo = {
        name: contractName,
        contract: contract
      }

      return contractInfo
    })
    .catch(error => {
      console.error(
        'Error in ' + contract.contractArtifact.contract_name + ': ' + cFunction
      )
      console.error(error)

      return false
    })
}

function* callInitializeContract(action) {
  const contractInfo = yield call(initializeContract, action.contractArtifact)

  console.log('Contract Info:')
  console.log(contractInfo)

  if (!contractInfo) {
    yield call(action.reject, {
      source: 'contracts',
      message: 'Failed to initialize contract.'
    })
  }

  yield put({ type: 'INITIALIZED_CONTRACT', contractInfo })
  yield call(action.resolve)
}

/*
 * Contract Varialble Sync
 */
function getContractVar({ contract, i, name }) {
  contract.synced = false

  console.log(
    contract.contractArtifact.contract_name + ': ' + contract.abi[i].name
  )

  return contract.methods[name]().call(
    { from: store.getState().accounts[0] },
    (error, result) => {
      if (error) {
        console.error(
          'Error in ' +
            contract.contractArtifact.contract_name +
            ': ' +
            contract.abi[i].name
        )
        console.error(error)

        return
      }

      contract.data[name] = result

      // If return value is an integer, convert to the appropriate type.
      if (contract.abi[i].outputs[0].type === 'uint256') {
        contract.data[name] = store.getState().web3.utils.hexToNumber(result)
      }

      var contractInfo = {
        name: contract.contractArtifact.contract_name,
        contract: contract
      }

      return contractInfo
    }
  )
}

function* callGetContractVar(action) {
  const contractInfo = yield call(getContractVar, action)

  console.log(contractInfo)

  if (!contractInfo) {
    yield call(action.reject, {
      source: 'contracts (' + action.name + ')',
      message: 'Failed to initialize contract variable.'
    })
  }

  yield put({ type: 'GOT_CONTRACT_VAR', contractInfo })
  yield call(action.resolve)
}

function* contractSynced(action) {
  action.contract.synced = true

  var contractInfo = {
    name: action.contract.contractArtifact.contract_name,
    contract: action.contract
  }

  yield put({ type: 'UPDATE_CONTRACT', contractInfo })
}

/*
 * Contract Tx
 */
function sendContractTx({ contract, cFunction, cFunctionParams }) {
  var defaultAccount = store.getState().accounts[0]

  return contract.methods[cFunction](cFunctionParams)
    .send({ from: defaultAccount, gas: 4700000 })
    .then(receipt => {
      return receipt
    })
    .catch(error => {
      console.error(
        'Error in ' + contract.contractArtifact.contract_name + ': ' + cFunction
      )
      console.error(error)

      return false
    })
}

function* callSendContractTx(action) {
  const contractInfo = yield call(sendContractTx, action)

  console.log(contractInfo)

  if (!contractInfo) {
    yield call(action.reject, {
      source: 'contracts (' + action.cFunction + ')',
      message: 'Failed to initialize contract variable.'
    })
  }

  yield call(action.resolve)
}

function* contractsSaga() {
  yield takeLatest('INITIALIZING_CONTRACT', callInitializeContract)
  yield takeEvery('GETTING_CONTRACT_VAR', callGetContractVar)
  yield takeEvery('SENDING_CONTRACT_TX', callSendContractTx)
  yield takeEvery('CONTRACT_SYNCED', contractSynced)
}

export default contractsSaga
