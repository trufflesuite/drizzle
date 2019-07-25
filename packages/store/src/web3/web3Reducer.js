import * as Action from './constants'

const initialState = {
  status: ''
}

const web3Reducer = (state = initialState, action) => {
  if (action.type === Action.WEB3_INITIALIZING) {
    return {
      ...state,
      status: 'initializing'
    }
  }

  if (action.type === Action.WEB3_INITIALIZED) {
    return {
      ...state,
      status: 'initialized'
    }
  }

  if (action.type === Action.WEB3_FAILED) {
    return {
      ...state,
      status: 'failed'
    }
  }

  if (action.type === Action.WEB3_USER_DENIED) {
    return {
      ...state,
      status: 'UserDeniedAccess'
    }
  }

  if (action.type === Action.NETWORK_ID_FETCHED) {
    return {
      ...state,
      networkId: action.networkId
    }
  }

  if (action.type === Action.NETWORK_ID_FAILED) {
    return {
      ...state,
      networkId: action.networkId
    }
  }
  if (action.type === Action.NETWORK_MISMATCH) {
    return {
      ...state,
      networkMismatch: true
    }
  }

  return state
}

export default web3Reducer
