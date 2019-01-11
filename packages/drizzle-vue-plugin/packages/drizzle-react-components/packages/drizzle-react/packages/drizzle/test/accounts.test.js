import { getAccounts } from '../src/accounts/accountsSaga'
import { runSaga } from 'redux-saga'
import { mockDrizzleStore, mockWeb3 } from './utils/helpers'

let mockedWeb3, dispatchedActions, mockedStore

beforeAll(() => {
  [mockedStore, dispatchedActions] = mockDrizzleStore()
  mockedWeb3 = mockWeb3()
})

test('gets accounts', async () => {
  await runSaga(mockedStore, getAccounts, { web3: mockedWeb3 }).done

  const defaultNumberOfAccounts = 10
  expect(dispatchedActions[0]['accounts']).toHaveLength(defaultNumberOfAccounts)
})
