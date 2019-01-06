import { initializeWeb3, getNetworkId } from '../src/web3/web3Saga'
import { runSaga } from 'redux-saga'
import { mockDrizzleStore } from './utils/helpers'

global.window = {}

let mockStore, dispatchedActions, web3
const options = {
  web3: {
    customProvider: global.provider
  }
}

beforeAll(() => {
  [mockStore, dispatchedActions] = mockDrizzleStore()
})

test('get web3', async () => {
  web3 = await runSaga(mockStore, initializeWeb3, { options }).done

  // First action dispatched
  expect(dispatchedActions[0].type).toEqual('WEB3_INITIALIZED')
})

test('get network ID', async () => {
  await runSaga(mockStore, getNetworkId, { web3 }).done

  // Second action dispatched
  expect(dispatchedActions[1].networkId).toEqual(6777)
})
