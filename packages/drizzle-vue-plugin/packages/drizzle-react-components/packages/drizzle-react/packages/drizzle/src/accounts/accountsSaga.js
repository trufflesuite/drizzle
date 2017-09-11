import { call, put, takeLatest } from 'redux-saga/effects'
import store from '../store'

function getAccounts() {
  console.log('Getting accounts...')

  return store
    .getState()
    .web3.eth.getAccounts()
    .then(accounts => {
      console.log(accounts)
      return accounts
    })
}

function* callGetAccounts(action) {
  const accounts = yield call(getAccounts)

  if (!accounts) {
    console.log('No accounts found!')
    yield call(action.reject, {
      source: 'accounts',
      message: 'Failed to get accounts.'
    })
  }

  console.log('Setting accounts...')
  yield put({ type: 'ACCOUNTS_FETCHED', accounts })
  yield call(action.resolve)
}

function* accountsSaga() {
  yield takeLatest('ACCOUNTS_FETCHING', callGetAccounts)
}

export default accountsSaga
