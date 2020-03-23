import { getAccounts } from '../src/accounts/accountsSaga'
import { call, put } from 'redux-saga/effects'
import * as AccountsActions from '../src/accounts/constants'

describe('Accounts Saga', () => {
  let mockedWeb3, mockedGetAccounts
  let gen

  beforeEach(() => {
    mockedGetAccounts = jest.fn()
    mockedWeb3 = { eth: { getAccounts: mockedGetAccounts } }
    gen = getAccounts({ web3: mockedWeb3 })
  })

  test('retrieves Metamask accounts', () => {
    expect(gen.next().value).toEqual(call(mockedGetAccounts))
    expect(gen.next(global.accounts).value).toEqual(
      put({ type: AccountsActions.ACCOUNTS_FETCHED, accounts: global.accounts })
    )
  })

  describe('Fails', () => {
    test('when accounts are not retrieved', () => {
      expect(gen.next().value).toEqual(call(mockedGetAccounts))
      expect(gen.next(undefined).value).toEqual(
        put({ type: AccountsActions.ACCOUNTS_FAILED, error: 'No accounts found!' })
      )
    })

    test('when when an exception occurs', () => {
      const error = new Error()
      expect(gen.next().value).toEqual(call(mockedGetAccounts))
      expect(gen.throw(error).value).toEqual(
        put({ type: AccountsActions.ACCOUNTS_FAILED, error })
      )
    })
  })
})
