import * as Action from './constants'

const initialState = {
  initialized: false
}

const drizzleStatusReducer = (state = initialState, action) => {
  /*
   * Drizzle Status
   */

  if (action.type === 'DRIZZLE_INITIALIZED') {
    return {
      ...state,
      initialized: true
    }
  }
  if (action.type === Action.DRIZZLE_NETWORK_MISMATCH) {
    return {
      ...state,
      network: {
        ...state.network,
        mismatch: true
      }
    }
  }
  return state
}

export default drizzleStatusReducer
