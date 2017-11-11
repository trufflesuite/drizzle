import { combineReducers } from 'redux'
import accountsReducer from './accounts/accountsReducer'
import contractsReducer from './contracts/contractsReducer'
//import web3Reducer from './web3/web3Reducer'

const reducer = combineReducers({
  accounts: accountsReducer,
  contracts: contractsReducer,
  //web3: web3Reducer
})

export default reducer
