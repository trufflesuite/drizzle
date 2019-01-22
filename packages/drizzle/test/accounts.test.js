import { getAccounts } from '../src/accounts/accountsSaga'
import { runSaga } from 'redux-saga'
import { mockDrizzleStore, getWeb3 } from './utils/helpers'

describe('Accounts Saga', () => {
  let web3, dispatchedActions, mockedStore

  beforeAll(() => {
    ;[mockedStore, dispatchedActions] = mockDrizzleStore()
    web3 = getWeb3()
  })

  test('retrieves Metamask accounts', async () => {
    await runSaga(mockedStore, getAccounts, { web3 }).done
    expect(dispatchedActions[0]['accounts']).toHaveLength(
      global.accounts.length
    )
  })
})
