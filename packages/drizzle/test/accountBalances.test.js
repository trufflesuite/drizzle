import { getAccountBalances } from '../src/accountBalances/accountBalancesSaga'
import { runSaga } from 'redux-saga'
import { mockDrizzleStore, mockWeb3 } from './utils/helpers'

let web3, dispatchedActions, mockStore
const state = { accounts: ['0x8adb46251e9cd45b5027501766531825c04a2e06'] }

beforeAll(() => {
  [mockStore, dispatchedActions] = mockDrizzleStore(state)
  web3 = mockWeb3()
})

test('get account balances', async () => {
  await runSaga(mockStore, getAccountBalances, { web3 }).done
  const defaultInitialBalance = 1e20
  expect(dispatchedActions[0].accountBalance).toEqual(String(defaultInitialBalance))
})
