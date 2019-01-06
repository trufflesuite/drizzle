import { getAccounts } from '../src/accounts/accountsSaga'
import { runSaga } from 'redux-saga'
import { mockDrizzleStore, mockWeb3 } from './utils/helpers'

let web3, dispatchedActions, mockStore

beforeAll(() => {
  [mockStore, dispatchedActions] = mockDrizzleStore()
  web3 = mockWeb3()
})

test('gets accounts', async () => {
  await runSaga(mockStore, getAccounts, { web3 }).done

  const defaultNumberOfAccounts = 10
  expect(dispatchedActions[0]['accounts']).toHaveLength(defaultNumberOfAccounts)
})
