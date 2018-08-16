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
  return state
}

export default drizzleStatusReducer
