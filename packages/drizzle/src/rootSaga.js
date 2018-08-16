import { all, fork } from 'redux-saga/effects'

import accountsSaga from './accounts/accountsSaga'
import accountBalancesSaga from './accountBalances/accountBalancesSaga'
import blocksSaga from './blocks/blocksSaga'
import contractsSaga from './contracts/contractsSaga'
import drizzleStatusSaga from './drizzleStatus/drizzleStatusSaga'
import web3Saga from './web3/web3Saga'

export default function * root () {
  yield all([
    fork(accountsSaga),
    fork(accountBalancesSaga),
    fork(blocksSaga),
    fork(contractsSaga),
    fork(drizzleStatusSaga),
    fork(web3Saga)
  ])
}
