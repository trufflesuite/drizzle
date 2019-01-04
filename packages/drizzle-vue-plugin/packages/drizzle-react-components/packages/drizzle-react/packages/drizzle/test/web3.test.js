import { initializeWeb3, getNetworkId } from '../src/web3/web3Saga'
import { runSaga } from 'redux-saga'
import Web3 from 'web3'

global.window = {}

let dispatchedActions
let store
let web3
const options = {
  customProvider: global.provider
}

beforeAll(() => {
  dispatchedActions = []
  store = {
    getState: () => ({}),
    dispatch: action => dispatchedActions.push(action)
  }
})

test('get web3', async function() {
  web3 = await runSaga(store, initializeWeb3, { options }).done

  // First action dispatched
  expect(dispatchedActions[0].type).toEqual('WEB3_INITIALIZED')
})

test('get network ID', async function() {
  await runSaga(store, getNetworkId, { web3 }).done

  // Second action dispatched
  expect(dispatchedActions[1].networkId).toEqual(6777)
})
