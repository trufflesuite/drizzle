import { getAccounts } from '../src/accounts/accountsSaga'
import Ganache from 'ganache-cli'
import Web3 from 'web3'
import { runSaga } from 'redux-saga'

var provider
var web3

var dispatchedActions
var store

beforeAll(() => {
  provider = Ganache.provider({ seed: 'drizzle', gasLimit: 7000000 })
  web3 = new Web3(provider)

  dispatchedActions = []
  store = {
    getState: () => {},
    dispatch: action => dispatchedActions.push(action)
  }
})

test('gets accounts', async function() {
  await runSaga(store, getAccounts, { web3 }).done

  expect(dispatchedActions[0]['accounts'].length).toEqual(10)
})
