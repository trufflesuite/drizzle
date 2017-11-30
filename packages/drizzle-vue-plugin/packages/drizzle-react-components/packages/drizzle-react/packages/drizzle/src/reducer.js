import { combineReducers } from 'redux'
import accountsReducer from './accounts/accountsReducer'
import contractsReducer from './contracts/contractsReducer'
import drizzleStatusReducer from './drizzleStatus/drizzleStatusReducer'
import web3Reducer from './web3/web3Reducer'

const reducer = combineReducers({
  accounts: accountsReducer,
  contracts: contractsReducer,
  drizzleStatus: drizzleStatusReducer,
  web3: web3Reducer
})

export default reducer
