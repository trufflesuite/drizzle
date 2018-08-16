const ACCOUNTS_FETCHING = 'ACCOUNTS_FETCHING'

export function accountsFetching (results) {
  return {
    type: ACCOUNTS_FETCHING,
    payload: results
  }
}

const ACCOUNTS_FETCHED = 'ACCOUNTS_FETCHED'

export function accountsFetched (results) {
  return {
    type: ACCOUNTS_FETCHED,
    payload: results
  }
}
