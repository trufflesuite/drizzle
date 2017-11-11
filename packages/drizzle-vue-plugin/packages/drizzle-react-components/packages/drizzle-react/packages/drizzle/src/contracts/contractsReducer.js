const initialState = {}

const contractsReducer = (state = initialState, action) => {
  if (action.type === 'INITIALIZED_CONTRACT')
  {
    return Object.assign({}, state, {
     [action.contractInfo.name]: action.contractInfo.contract
    })
  }

  if (action.type === 'GOT_CONTRACT_VAR')
  {
    /*return Object.assign({}, state, {
     [action.contractInfo.name]['data'][action.contractInfo.variable]: action.contractInfo.value
    })*/

    console.log('Action:')
    console.log(action)

    return {
      ...state,
      [action.name]: {
        ...state[action.name],
        [action.variable]: action.value
      }
    }
  }

  if (action.type === 'CONTRACT_SYNCING')
  {
    /*return Object.assign({}, state, {
     [action.contract.contractName]: action.contract
    })*/

    return {
      ...state,
      [action.contract.contractArtifact.contractName]: {
        ...state[action.contract.contractArtifact.contractName],
        synced: false
      }
    }
  }

  if (action.type === 'CONTRACT_SYNCED')
  {
    /*return Object.assign({}, state, {
     [action.contract.contractName]: action.contract
    })*/

    return {
      ...state,
      [action.contract.contractArtifact.contractName]: {
        ...state[action.contract.contractArtifact.contractName],
        synced: true
      }
    }
  }

  return state
}

export default contractsReducer
