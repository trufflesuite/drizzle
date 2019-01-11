import { getAccountBalances } from '../src/accountBalances/accountBalancesSaga'
import { runSaga } from 'redux-saga'
import { mockDrizzleStore, mockWeb3 } from './utils/helpers'

let web3, dispatchedActions, mockedStore
const state = { accounts: ['0x8adb46251e9cd45b5027501766531825c04a2e06'] }

beforeAll(() => {
  ;[mockedStore, dispatchedActions] = mockDrizzleStore(state)
  web3 = mockWeb3()
})

test('get account balances', async () => {
  await runSaga(mockedStore, getAccountBalances, { web3 }).done

  const expectedBalance = String(1e20) // 100 Eth, defaultBalance
  expect(dispatchedActions[0].accountBalance).toEqual(expectedBalance)
})
