import * as AccountsActions from './constants'

const initialState = {}

const accountsReducer = (state = initialState, action) => {
  if (action.type === AccountsActions.ACCOUNTS_FETCHING) {
    return state
  }

  if (action.type === AccountsActions.ACCOUNTS_FETCHED) {
    return Object.assign({}, state, action.accounts)
  }

  return state
}

export default accountsReducer
