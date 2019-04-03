import { initializeWeb3, getNetworkId } from '../src/web3/web3Saga'
import { call, put } from 'redux-saga/effects'
import * as Action from '../src/web3/constants'

const hasWeb3Shape = obj => {
  expect(obj).toHaveProperty('currentProvider')
  expect(obj).toHaveProperty('BatchRequest')
  expect(obj).toHaveProperty('version')
  expect(obj).toHaveProperty('utils')
  expect(obj).toHaveProperty('eth')
}

describe('Loads Web3', () => {
  let web3Options, resolvedWeb3, gen

  describe('with customProvider', () => {
    beforeAll(async () => {
      global.window = {}
      web3Options = { web3: { customProvider: global.provider } }
    })

    test('get web3', async () => {
      gen = initializeWeb3({ options: web3Options })

      // First action dispatched
      expect(gen.next().value).toEqual(put({ type: Action.WEB3_INITIALIZED }))

      resolvedWeb3 = gen.next().value

      hasWeb3Shape(resolvedWeb3)
    })

    test('get network ID', async () => {
      gen = getNetworkId({ web3: resolvedWeb3 })

      expect(gen.next().value).toEqual(call(resolvedWeb3.eth.net.getId))
      expect(gen.next(global.defaultNetworkId).value).toEqual(
        put({
          type: Action.NETWORK_ID_FETCHED,
          networkId: global.defaultNetworkId
        })
      )
    })
  })

  describe('with ethereum', () => {
    let mockedEthereumEnable

    beforeAll(async () => {
      global.window = {}

      mockedEthereumEnable = jest.fn()
      global.provider.enable = mockedEthereumEnable
      global.window.ethereum = global.provider

      gen = initializeWeb3({ options: {} })
    })

    test('get web3', async () => {
      expect(gen.next().value).toEqual(call(mockedEthereumEnable))

      expect(gen.next().value).toEqual(put({ type: Action.WEB3_INITIALIZED }))

      // is it a Web3 object?
      resolvedWeb3 = gen.next().value
      hasWeb3Shape(resolvedWeb3)
    })
  })

  describe('with injected web3', () => {
    beforeAll(async () => {
      global.window = {}
      global.window.web3 = { currentProvider: global.provider }
      gen = initializeWeb3({ options: {} })
    })

    test('get web3', async () => {
      // First action dispatched
      expect(gen.next().value).toEqual(put({ type: Action.WEB3_INITIALIZED }))
    })
  })

  describe('with websocket fallback web3', () => {
    let mockedWebSocketProvider, gen

    beforeAll(async () => {
      global.window = {}

      mockedWebSocketProvider = jest.fn()
      global.provider.providers = { WebSocketProvider: mockedWebSocketProvider }
    })

    test('get web3', async () => {
      const options = {
        fallback: {
          type: 'ws',
          url: 'ws://localhost:12345'
        }
      }
      gen = initializeWeb3({ options })

      // First action dispatched
      // expect(dispatchedActions[0].type).toEqual(Action.WEB3_INITIALIZED)
      expect(gen.next().value).toEqual(put({ type: Action.WEB3_INITIALIZED }))
      resolvedWeb3 = gen.next().value

      // is it a Web3 object?
      hasWeb3Shape(resolvedWeb3)
    })

    test('fails when fallback type is unknown', async () => {
      const options = {
        fallback: {
          type: 'thewrongtype',
          url: 'ws://localhost:12345'
        }
      }
      gen = initializeWeb3({ options })

      const error = new Error('Invalid web3 fallback provided.')
      expect(gen.next().value).toEqual(put({ type: Action.WEB3_FAILED, error }))
    })
  })

  describe('Exhausts options', () => {
    beforeAll(async () => {
      global.window = {}
      web3Options = {}
      gen = initializeWeb3({ options: web3Options })
    })

    test('with failure', async () => {
      const error = new Error('Cannot find injected web3 or valid fallback.')
      expect(gen.next().value).toEqual(put({ type: Action.WEB3_FAILED, error }))
    })
  })
})
