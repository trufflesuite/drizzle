import { call, put, select, takeLatest } from 'redux-saga/effects'

export function * getAccountBalances (action) {
  const accounts = yield select(getAccountsState)
  const web3 = action.web3

  if (!accounts) {
    console.error('No accounts found while attempting to fetch balances!')
  }

  try {
    for (var i in accounts) {
      var account = accounts[i]
      var accountBalance = yield call(web3.eth.getBalance, account)

      yield put({ type: 'ACCOUNT_BALANCE_FETCHED', account, accountBalance })
    }
  } catch (error) {
    yield put({ type: 'ACCOUNT_BALANCE_FAILED', error })
    console.error('Error fetching account ' + account + ' balance:')
    console.error(error)
  }

  yield put({ type: 'ACCOUNT_BALANCES_FETCHED' })
}

export const getAccountsState = state => state.accounts

function * accountBalancesSaga () {
  yield takeLatest('ACCOUNT_BALANCES_FETCHING', getAccountBalances)
}

export default accountBalancesSaga
