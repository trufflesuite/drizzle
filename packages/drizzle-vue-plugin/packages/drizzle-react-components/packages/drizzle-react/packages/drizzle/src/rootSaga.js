import { all, fork } from 'redux-saga/effects'

import web3Saga from './web3/web3Saga'
import contractsSaga from './contracts/contractsSaga'
import accountsSaga from './accounts/accountsSaga'

export default function* root() {
  yield all([
    fork(accountsSaga),
    fork(contractsSaga),
    fork(web3Saga)
  ])
}
