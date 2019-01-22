import { initializeWeb3, getNetworkId } from '../src/web3/web3Saga'
import { runSaga } from 'redux-saga'
import { put } from 'redux-saga/effects'
import { mockDrizzleStore } from './utils/helpers'
import * as Action from '../src/web3/constants'

describe('Loads Web3', () => {
  let mockedStore, dispatchedActions, web3Options, resolvedWeb3

  describe('with customProvider', () => {
    beforeAll(async () => {
      global.window = {}
      ;[mockedStore, dispatchedActions] = mockDrizzleStore()
      web3Options = { web3: { customProvider: global.provider } }
      resolvedWeb3 = await runSaga(mockedStore, initializeWeb3, {
        options: web3Options
      }).done
    })

    test('get web3', async () => {
      // First action dispatched
      expect(dispatchedActions[0].type).toEqual(Action.WEB3_INITIALIZED)

      // is it a Web3 object?
      expect(resolvedWeb3).toHaveProperty('currentProvider')
      expect(resolvedWeb3).toHaveProperty('BatchRequest')
      expect(resolvedWeb3).toHaveProperty('version')
      expect(resolvedWeb3).toHaveProperty('utils')
      expect(resolvedWeb3).toHaveProperty('eth')
    })

    test('get network ID', async () => {
      await runSaga(mockedStore, getNetworkId, { web3: resolvedWeb3 }).done

      // Second action dispatched
      expect(dispatchedActions[1].networkId).toEqual(global.defaultNetworkId)
    })
  })

  describe('with ethereum', () => {
    let mockedEthereumEnable
    let gen

    beforeAll(async () => {
      global.window = {}
      ;[mockedStore, dispatchedActions] = mockDrizzleStore()

      mockedEthereumEnable = jest.fn()
      global.provider.enable = mockedEthereumEnable
      global.window.ethereum = global.provider

      gen = initializeWeb3({ options: {} })
    })

    test('get web3', async () => {
      expect(gen.next().value.CALL.fn).toBe(mockedEthereumEnable)
      expect(gen.next().value.PUT.action.type).toBe(Action.WEB3_INITIALIZED)

      // is it a Web3 object?
      resolvedWeb3 = gen.next().value
      expect(resolvedWeb3).toHaveProperty('currentProvider')
      expect(resolvedWeb3).toHaveProperty('BatchRequest')
      expect(resolvedWeb3).toHaveProperty('version')
      expect(resolvedWeb3).toHaveProperty('utils')
      expect(resolvedWeb3).toHaveProperty('eth')
    })

    test('get network ID', async () => {
      await runSaga(mockedStore, getNetworkId, { web3: resolvedWeb3 }).done
      expect(dispatchedActions[0].networkId).toEqual(global.defaultNetworkId)
    })
  })

  describe('with injected web3', () => {
    beforeAll(async () => {
      global.window = {}
      ;[mockedStore, dispatchedActions] = mockDrizzleStore()
      global.window.web3 = { currentProvider: global.provider }

      resolvedWeb3 = await runSaga(mockedStore, initializeWeb3, { options: {} })
        .done
    })

    test('get web3', async () => {
      // First action dispatched
      expect(dispatchedActions[0].type).toEqual(Action.WEB3_INITIALIZED)
    })

    test('get network ID', async () => {
      await runSaga(mockedStore, getNetworkId, { web3: resolvedWeb3 }).done

      // Second action dispatched
      expect(dispatchedActions[1].networkId).toEqual(global.defaultNetworkId)

      // is it a Web3 object?
      expect(resolvedWeb3).toHaveProperty('currentProvider')
      expect(resolvedWeb3).toHaveProperty('BatchRequest')
      expect(resolvedWeb3).toHaveProperty('version')
      expect(resolvedWeb3).toHaveProperty('utils')
      expect(resolvedWeb3).toHaveProperty('eth')
    })
  })

  describe('with websocket fallback web3', () => {
    let mWebSocketProvider

    beforeAll(async () => {
      global.window = {}
      ;[mockedStore, dispatchedActions] = mockDrizzleStore()
      const options = {
        fallback: {
          type: 'ws',
          url: 'ws://localhost:12345'
        }
      }

      mWebSocketProvider = jest.fn()
      global.provider.providers = { WebSocketProvider: mWebSocketProvider }

      resolvedWeb3 = await runSaga(mockedStore, initializeWeb3, { options })
        .done
    })

    test('get web3', async () => {
      // First action dispatched
      expect(dispatchedActions[0].type).toEqual(Action.WEB3_INITIALIZED)

      // is it a Web3 object?
      expect(resolvedWeb3).toHaveProperty('currentProvider')
      expect(resolvedWeb3).toHaveProperty('BatchRequest')
      expect(resolvedWeb3).toHaveProperty('version')
      expect(resolvedWeb3).toHaveProperty('utils')
      expect(resolvedWeb3).toHaveProperty('eth')
    })
  })

  describe('Exhausts options', () => {
    let gen
    beforeAll(async () => {
      global.window = {}
      ;[mockedStore, dispatchedActions] = mockDrizzleStore()
      web3Options = {}
      gen = initializeWeb3({ options: web3Options })
    })

    test('with failure', async () => {
      const error = new Error('Cannot find injected web3 or valid fallback.')
      expect(gen.next().value).toEqual(put({ type: Action.WEB3_FAILED, error }))
    })
  })
})
