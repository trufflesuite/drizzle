import { generateContractInitialState } from '../contractStateUtils'
import * as ContractActions from './constants'

const initialState = {}

const contractsReducer = (state = initialState, action) => {
  /*
   * Contract Status
   */

  if (action.type === ContractActions.CONTRACT_INITIALIZING) {
    return {
      ...state,
      [action.contractConfig.contractName]: generateContractInitialState(
        action.contractConfig
      )
    }
  }

  if (action.type === ContractActions.CONTRACT_INITIALIZED) {
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

  if (action.type === ContractActions.DELETE_CONTRACT) {
    const { [action.contractName]: omitted, ...rest } = state
    return rest
  }

  if (action.type === ContractActions.CONTRACT_SYNCING) {
    const contractName = action.contract.contractName

    return {
      ...state,
      [contractName]: {
        ...state[contractName],
        synced: false
      }
    }
  }

  if (action.type === ContractActions.CONTRACT_SYNCED) {
    return {
      ...state,
      [action.contractName]: {
        ...state[action.contractName],
        synced: true
      }
    }
  }

  if (action.type === ContractActions.CONTRACT_SYNC_IND) {
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

  if (action.type === ContractActions.GOT_CONTRACT_VAR) {
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
            value: action.value,
            error: null
          }
        }
      }
    }
  }

  if (action.type === ContractActions.ERROR_CONTRACT_VAR) {
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
            value: null,
            error: action.error
          }
        }
      }
    }
  }

  /*
   * Contract Events
   */

  if (action.type === ContractActions.EVENT_FIRED) {
    return {
      ...state,
      [action.name]: {
        ...state[action.name],
        events: [...state[action.name].events, action.event]
      }
    }
  }

  return state
}

export default contractsReducer
