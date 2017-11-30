const initialState = {}

const contractsReducer = (state = initialState, action) => {
  /*
   * Contract Status
   */

  if (action.type === 'CONTRACT_INITIALIZED')
  {
    return {
      ...state,
      [action.name]: {
        ...state[action.name],
        initialized: true,
        synced: true
      }
    }
  }

  if (action.type === 'CONTRACT_SYNCING')
  {
    return {
      ...state,
      [action.contractName]: {
        ...state[action.contractName],
        synced: false
      }
    }
  }

  if (action.type === 'CONTRACT_SYNCED')
  {
    return {
      ...state,
      [action.contractName]: {
        ...state[action.contractName],
        synced: true
      }
    }
  }

  /*
   * Contract Functions
   */

  if (action.type === 'GOT_CONTRACT_VAR')
  {
    return {
      ...state,
      [action.name]: {
        ...state[action.name],
        [action.variable]: {
          ...state[action.name][action.variable],
          [action.argsHash]: {
            ...state[action.name][action.variable][action.argsHash],
            args: action.args,
            fnIndex: action.fnIndex,
            value: action.value
          }
        }
      }
    }
  }

  return state
}

export default contractsReducer
