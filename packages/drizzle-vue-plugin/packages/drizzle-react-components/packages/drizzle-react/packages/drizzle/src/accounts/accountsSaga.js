import { call, put, takeLatest } from 'redux-saga/effects'

function getAccounts(web3) {
  return web3.eth.getAccounts().then((accounts) => {
    return accounts
  })
}

function* callGetAccounts(action) {
  const accounts = yield call(getAccounts, action.web3)

  if (!accounts) {
    console.error('No accounts found!')
    yield call(action.reject, {source: 'accounts', message: 'Failed to get accounts.'})
  }

  yield put({type: 'ACCOUNTS_FETCHED', accounts})
  yield call(action.resolve)
}

function* accountsSaga() {
  yield takeLatest('ACCOUNTS_FETCHING', callGetAccounts)
}

export default accountsSaga;
