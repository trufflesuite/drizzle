import { initializeWeb3, getNetworkId } from '../src/web3/web3Saga'
import { runSaga } from 'redux-saga'
import { mockDrizzleStore } from './utils/helpers'

global.window = {}

let mockedStore, dispatchedActions, web3
const options = {
  web3: {
    customProvider: global.provider
  }
}

beforeAll(() => {
  [mockedStore, dispatchedActions] = mockDrizzleStore()
})

test('get web3', async () => {
  web3 = await runSaga(mockedStore, initializeWeb3, { options }).done

  // First action dispatched
  expect(dispatchedActions[0].type).toEqual('WEB3_INITIALIZED')
})

test('get network ID', async () => {
  await runSaga(mockedStore, getNetworkId, { web3 }).done

  // Second action dispatched
  expect(dispatchedActions[1].networkId).toEqual(6777)
})

/* Notes:
 *   [] WEB3_INITIALIZING is not used -- Is it important for the client to know
 *      drizzle started web3 initialization?
 *
 * Todo:
 *   1. test all (happy) code paths
 *       a) window.ethereum
 *       b) window.web3 etc..
 *       c) passing in provider (currently tested)
 *       d) passing in URL
 *
 *   2. invalid/error paths (sad)
 *       a) errors in web3
 *
 * Paths to verify based on states
 *   1. WEB3_INITIALIZING
 *   2. WEB3_INITIALIZED
 *   3. WEB3_FAILED
 *   4. NETWORK_ID_FETCHING
 *   5. NETWORK_ID_FETCHED
 *   6. NETWORK_ID_FAILED
 *  */
