import * as AccountsActions from './constants'

export function accountsFetching (results) {
  return {
    type: AccountsActions.ACCOUNTS_FETCHING,
    payload: results
  }
}

export function accountsFetched (results) {
  return {
    type: AccountsActions.ACCOUNTS_FETCHED,
    payload: results
  }
}

export function accountsFailed (error) {
  return {
    type: AccountsActions.ACCOUNTS_FAILED,
    payload: error
  }
}
