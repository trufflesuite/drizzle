import { getAccountBalances } from '../src/accountBalances/accountBalancesSaga'
import Ganache from 'ganache-cli'
import Web3 from 'web3'
import { runSaga } from 'redux-saga'

var web3

var dispatchedActions
var store

beforeAll(() => {
  //provider = Ganache.provider({seed: "drizzle", gasLimit: 7000000});
  web3 = new Web3('http://127.0.0.1:7545')

  dispatchedActions = []
  store = {
    getState: () => ({
      accounts: ['0xabe5c9AbceB8985F87c2532064657Ae1908F9D29']
    }),
    dispatch: action => dispatchedActions.push(action)
  }
})

test('get account balances', async function() {
  await runSaga(store, getAccountBalances, { web3 }).done

  expect(dispatchedActions[0].accountBalance).toEqual(String(1e20))
})
