import * as DrizzleActions from './constants'

const initialState = {
  initialized: false
}

const drizzleStatusReducer = (state = initialState, action) => {
  /*
   * Drizzle Status
   */

  if (action.type === DrizzleActions.DRIZZLE_INITIALIZED) {
    return {
      ...state,
      initialized: true
    }
  }
  return state
}

export default drizzleStatusReducer
