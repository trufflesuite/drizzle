import {
  getAccountBalances,
  getAccountsState
} from '../src/accountBalances/accountBalancesSaga'
import { call, put, select } from 'redux-saga/effects'

describe('Account Balance Saga', () => {
  let mockedWeb3, mockedGetBalance
  let gen

  beforeEach(() => {
    mockedGetBalance = jest.fn()
    mockedWeb3 = { eth: { getBalance: mockedGetBalance } }
    gen = getAccountBalances({ web3: mockedWeb3 })
  })

  test('Retrieves account balances', () => {
    let next = gen.next()

    expect(next.value).toEqual(select(getAccountsState))
    next = gen.next(global.accounts)

    // It handles balance queries for all accounts
    const accountBalance = 1e20 // default ETH balance
    for (let account of global.accounts) {
      expect(next.value).toEqual(call(mockedGetBalance, account))
      next = gen.next(accountBalance)
      expect(next.value).toEqual(
        put({ type: 'ACCOUNT_BALANCE_FETCHED', account, accountBalance })
      )
      next = gen.next()
    }

    // Final dispatch
    expect(next.value).toEqual(put({ type: 'ACCOUNT_BALANCES_FETCHED' }))
  })

  test('Fails properly', () => {
    let next = gen.next()
    expect(next.value).toEqual(select(getAccountsState))
    next = gen.next(global.accounts)

    const error = new Error()
    next = gen.throw(error)
    expect(next.value).toEqual(put({ type: 'ACCOUNT_BALANCE_FAILED', error }))

    // Final dispatch
    next = gen.next()
    expect(next.value).toEqual(put({ type: 'ACCOUNT_BALANCES_FETCHED' }))
  })
})
