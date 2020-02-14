import * as AccountBalancesActions from './constants'

const initialState = {}

const accountBalancesReducer = (state = initialState, action) => {
  if (action.type === AccountBalancesActions.ACCOUNT_BALANCE_FETCHED) {
    return {
      ...state,
      [action.account]: action.accountBalance
    }
  }

  return state
}

export default accountBalancesReducer
