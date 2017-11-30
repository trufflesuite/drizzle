import { all, fork } from 'redux-saga/effects'

import contractsSaga from './contracts/contractsSaga'
import accountsSaga from './accounts/accountsSaga'

export default function* root() {
  yield all([
    fork(accountsSaga),
    fork(contractsSaga)
  ])
}
