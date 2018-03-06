import { call, put, takeLatest } from 'redux-saga/effects'

export function* getAccounts(action) {
  const web3 = action.web3

  try {
    const accounts = yield call(web3.eth.getAccounts)
    yield put({ type: 'ACCOUNTS_FETCHED', accounts })
  } catch (error) {
    yield put({ type: 'ACCOUNTS_FAILED', error })
    console.error('Error fetching accounts:')
    console.error(error)
  }
}

function* accountsSaga() {
  yield takeLatest('ACCOUNTS_FETCHING', getAccounts)
}

export default accountsSaga
