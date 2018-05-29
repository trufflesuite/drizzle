import { generateContractInitialState } from '../generateContractInitialState'

const initialState = {}

const contractsReducer = (state = initialState, action) => {
  /*
   * Contract Status
   */

  if (action.type === 'CONTRACT_INITIALIZING') {
    return {
      ...state,
      [action.contractConfig.contractName]: generateContractInitialState(action.contractConfig)
    }
  }

  if (action.type === 'CONTRACT_INITIALIZED')
  {
    return {
      ...state,
      [action.name]: {
        ...state[action.name],
        initialized: true,
        synced: true,
        events: []
      }
    }
  }

  if (action.type === 'CONTRACT_SYNCING')
  {
    const contractName = action.contract.contractName

    return {
      ...state,
      [contractName]: {
        ...state[contractName],
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

  if (action.type === 'CONTRACT_SYNC_IND')
  {
    return {
      ...state,
      [action.contractName]: {
        ...state[action.contractName],
        synced: false
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

  if (action.type === 'ERROR_CONTRACT_VAR')
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
            error: action.error
          }
        }
      }
    }
  }

  /*
   * Contract Events
   */

  if (action.type === 'EVENT_FIRED')
  {
    return {
      ...state,
      [action.name]: {
        ...state[action.name],
        events: [
          ...state[action.name].events,
          action.event
        ]
      }
    }
  }

  return state
}

export default contractsReducer
