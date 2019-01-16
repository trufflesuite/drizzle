import { getAccountBalances } from '../src/accountBalances/accountBalancesSaga'
import { runSaga } from 'redux-saga'
import { mockDrizzleStore, getWeb3 } from './utils/helpers'

describe('Account Balance Saga', () => {
  let web3, dispatchedActions, mockedStore
  const state = { accounts: global.accounts }

  beforeAll(() => {
    ;[mockedStore, dispatchedActions] = mockDrizzleStore(state)
    web3 = getWeb3()
  })

  test('Retrieves account balances', async () => {
    await runSaga(mockedStore, getAccountBalances, { web3 }).done

    const expectedBalance = String(1e20) // 100 Eth, defaultBalance
    expect(dispatchedActions[0].accountBalance).toEqual(expectedBalance)
  })
})
