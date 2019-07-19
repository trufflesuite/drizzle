import Drizzle from './Drizzle.js'
import { generateStore } from './generateStore'
import { generateContractsInitialState } from './contractStateUtils'

// Events
import * as EventActions from './contracts/constants'

// Reducers
import accountsReducer from './accounts/accountsReducer'
import accountBalancesReducer from './accountBalances/accountBalancesReducer'
import blocksReducer from './blocks/blocksReducer'
import contractsReducer from './contracts/contractsReducer'
import drizzleStatusReducer from './drizzleStatus/drizzleStatusReducer'
import transactionsReducer from './transactions/transactionsReducer'
import transactionStackReducer from './transactions/transactionStackReducer'
import web3Reducer from './web3/web3Reducer'

const drizzleReducers = {
  accounts: accountsReducer,
  accountBalances: accountBalancesReducer,
  contracts: contractsReducer,
  currentBlock: blocksReducer,
  drizzleStatus: drizzleStatusReducer,
  transactions: transactionsReducer,
  transactionStack: transactionStackReducer,
  web3: web3Reducer
}

// Sagas
import accountsSaga from './accounts/accountsSaga'
import accountBalancesSaga from './accountBalances/accountBalancesSaga'
import blocksSaga from './blocks/blocksSaga'
import contractsSaga from './contracts/contractsSaga'
import drizzleStatusSaga from './drizzleStatus/drizzleStatusSaga'

const drizzleSagas = [
  accountsSaga,
  accountBalancesSaga,
  blocksSaga,
  contractsSaga,
  drizzleStatusSaga
]

export {
  Drizzle,
  generateContractsInitialState,
  generateStore,
  drizzleReducers,
  drizzleSagas,
  EventActions
}
