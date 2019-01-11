import { initializeWeb3, getNetworkId } from '../src/web3/web3Saga'
import { runSaga } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { mockDrizzleStore } from './utils/helpers'

let mockedStore, dispatchedActions, web3, web3Options

describe('Loads Web3', () => {
  /*   describe('with customProvider', () => {
   *     beforeAll(async () => {
   *       global.window = {}
   *       ;[mockedStore, dispatchedActions] = mockDrizzleStore()
   *       web3Options = { web3: { customProvider: global.provider } }
   *       web3 = await runSaga(mockedStore, initializeWeb3, {
   *         options: web3Options
   *       }).done
   *     })
   *
   *     test('get web3', async () => {
   *       // First action dispatched
   *       expect(dispatchedActions[0].type).toEqual('WEB3_INITIALIZED')
   *     })
   *
   *     test('get network ID', async () => {
   *       await runSaga(mockedStore, getNetworkId, { web3 }).done
   *
   *       // Second action dispatched
   *       expect(dispatchedActions[1].networkId).toEqual(global.defaultNetworkId)
   *     })
   *   })
   *
   *   describe('with ethereum', () => {
   *     let mEnable
   *     beforeAll(async () => {
   *       global.window = {}
   *       ;[mockedStore, dispatchedActions] = mockDrizzleStore()
   *       mEnable = jest.fn((...args) => `hi ${args[0]}`)
   *
   *       // mock can force an exception
   *       // mEnable = jest.fn(() => { throw new Error('oopsie') })
   *       //
   *
   *       global.provider.enable = mEnable
   *       global.window.ethereum = global.provider
   *
   *       web3 = await runSaga(mockedStore, initializeWeb3, { options: {} }).done
   *     })
   *
   *     test('get web3', async () => {
   *       // First action dispatched
   *       expect(dispatchedActions[0].type).toEqual('WEB3_INITIALIZED')
   *
   *       // console.log('mEnable', mEnable)
   *       // Todo: The mocked function does not register when called from the saga,
   *       //       but it is required for this code-path.
   *       // mEnable('whoa') // proves it is invokable
   *       // expect(mEnable).toHaveBeenCalledTimes(1)
   *     })
   *
   *     test('get network ID', async () => {
   *       await runSaga(mockedStore, getNetworkId, { web3 }).done
   *
   *       // Second action dispatched
   *       expect(dispatchedActions[1].networkId).toEqual(global.defaultNetworkId)
   *     })
   *   })
   *
   *   describe('with injected web3', () => {
   *     beforeAll(async () => {
   *       global.window = {}
   *       ;[mockedStore, dispatchedActions] = mockDrizzleStore()
   *       global.window.web3 = { currentProvider: global.provider }
   *
   *       web3 = await runSaga(mockedStore, initializeWeb3, { options: {} }).done
   *     })
   *
   *     test('get web3', async () => {
   *       // First action dispatched
   *       expect(dispatchedActions[0].type).toEqual('WEB3_INITIALIZED')
   *     })
   *
   *     test('get network ID', async () => {
   *       await runSaga(mockedStore, getNetworkId, { web3 }).done
   *
   *       // Second action dispatched
   *       expect(dispatchedActions[1].networkId).toEqual(global.defaultNetworkId)
   *     })
   *   })
   *
   *   describe('with websocket fallback web3', () => {
   *     let mWebSocketProvider
   *
   *     beforeAll(async () => {
   *       global.window = {}
   *       ;[mockedStore, dispatchedActions] = mockDrizzleStore()
   *       const options = {
   *         fallback: {
   *           type: 'ws',
   *           url: 'ws://localhost:12345'
   *         }
   *       }
   *
   *       mWebSocketProvider = jest.fn()
   *
   *       global.provider.providers = { WebSocketProvider: mWebSocketProvider }
   *       web3 = await runSaga(mockedStore, initializeWeb3, { options }).done
   *     })
   *
   *     test('get web3', async () => {
   *       // First action dispatched
   *       expect(dispatchedActions[0].type).toEqual('WEB3_INITIALIZED')
   *
   *       // Todo: mock function callstate is not available for inspecting.
   *       //       related to jest fn and redux-sagas?
   *       // expect(mWebSocketProvider).toHaveBeenCalledTimes(1)
   *     })
   *   })  */

  describe('Exhausts options and fails', () => {
    beforeAll(async () => {
      global.window = {}
      ;[mockedStore, dispatchedActions] = mockDrizzleStore()
      web3Options = {}
    })

    test('Throws', async () => {
      const gen = initializeWeb3({ options: web3Options })
      const error = 'Cannot find injected web3 or valid fallback.'
      let value = gen.next()
      value = gen.next()
      console.log('VALUE', value)
      const got = gen.throw(error).value
      console.log('got', got)
      expect(got).toEqual(put({ type: 'WEB3_FAILED', error }))
    })
  })
})

/* Notes:
 *   [] WEB3_INITIALIZING is not used -- Is it important for the client to know
 *      drizzle started web3 initialization?
 *
 * Todo:
 *   [] Test failure cases above
 *
 *  */
