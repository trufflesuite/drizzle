import { initializeWeb3, getNetworkId } from '../src/web3/web3Saga'
import { call, put } from 'redux-saga/effects'
import { runSaga } from 'redux-saga'
import * as Action from '../src/web3/constants'

const hasWeb3Shape = obj => {
  expect(obj).toHaveProperty('currentProvider')
  expect(obj).toHaveProperty('BatchRequest')
  expect(obj).toHaveProperty('version')
  expect(obj).toHaveProperty('utils')
  expect(obj).toHaveProperty('eth')
}

describe('Resolving Web3', () => {
  let web3Options, resolvedWeb3, gen

  describe('with customProvider', () => {
    beforeAll(async () => {
      global.window = {}
      web3Options = { customProvider: global.provider }
    })

    test('get web3', async () => {
      gen = initializeWeb3(web3Options)

      // First action dispatched
      expect(gen.next().value).toEqual(put({ type: Action.WEB3_INITIALIZED }))

      resolvedWeb3 = gen.next().value
      expect(resolvedWeb3).toEqual(global.provider)
    })
  })

  describe('with ethereum, EIP-1102 compliance', () => {
    test('invokes `ethereum.enable`', async () => {
      const mockedEthereumEnable = jest.fn()
      const ethereum = { enable: mockedEthereumEnable }
      global.window = { ethereum }

      gen = initializeWeb3({})
      let next = gen.next()
      // get permission according to EIP 1102
      //

      expect(next.value).toEqual(
        call({ context: ethereum, fn: ethereum.enable })
      )

      // return an account to simulate opt-in
      next = gen.next('0x123')
      expect(next.value).toEqual(put({ type: Action.WEB3_INITIALIZED }))

      resolvedWeb3 = gen.next().value
      hasWeb3Shape(resolvedWeb3)
    })

    test('loads when user opts in', async () => {
      const mockedEthereumEnable = jest.fn(() => '0x123')
      const ethereum = { enable: mockedEthereumEnable }
      global.window = { ethereum }
      const dispatched = []

      const result = await runSaga({
        dispatch: (action) => dispatched.push(action),
        getState: () => ({ state: 'test' })
      }, initializeWeb3, {}).done

      // result should be a proper web3 provider
      expect(result).toBeInstanceOf(require('web3'))
    })

    test('does not load when user opts out', async () => {
      // opt out
      global.window = { ethereum: { enable: jest.fn(() => undefined) } }
      const dispatched = []

      const web3Result = await runSaga(
        {
          dispatch: action => dispatched.push(action),
          getState: () => ({ state: 'test' })
        },
        initializeWeb3,
        {}
      ).done

      // saga result should be undefined if an exception occurs
      expect(web3Result).toBe(undefined)

      // and the last action should be WEB3_USER_DENIED
      expect(dispatched.pop()).toEqual({ type: Action.WEB3_USER_DENIED })
    })

    test('does not load when provider throws an error', async () => {
      // simulate opting out
      const mockedEthereumEnable = jest.fn(() => { throw new Error('oops') })
      const ethereum = { enable: mockedEthereumEnable }
      global.window = { ethereum }
      const dispatched = []

      const result = await runSaga({
        dispatch: (action) => dispatched.push(action),
        getState: () => ({ state: 'test' })
      }, initializeWeb3, {}).done

      // saga result is undefined when exception is thrown
      expect(result).toBe(undefined)

      // and the last action should be WEB3_FAILED
      expect(dispatched.pop()).toEqual({ type: Action.WEB3_FAILED })
    })
  })

  describe('with injected web3', () => {
    beforeAll(async () => {
      global.window = {}
      global.window.web3 = { currentProvider: global.provider }
      gen = initializeWeb3({})
    })

    test('get web3', async () => {
      // First action dispatched
      expect(gen.next().value).toEqual(put({ type: Action.WEB3_INITIALIZED }))
    })
  })

  describe('with websocket fallback web3', () => {
    let gen

    beforeAll(async () => {
      global.window = {}
      global.provider.providers = { WebSocketProvider: jest.fn() }
    })

    test('get web3', async () => {
      web3Options = {
        fallback: {
          type: 'ws',
          url: 'ws://localhost:12345'
        }
      }
      gen = initializeWeb3(web3Options)

      // First action dispatched
      expect(gen.next().value).toEqual(put({ type: Action.WEB3_INITIALIZED }))
      resolvedWeb3 = gen.next().value

      // is it a Web3 object?
      hasWeb3Shape(resolvedWeb3)
    })

    test('fails when fallback type is unknown', async () => {
      web3Options = {
        fallback: {
          type: 'thewrongtype',
          url: 'ws://localhost:12345'
        }
      }
      gen = initializeWeb3(web3Options)

      const error = new Error('Invalid web3 fallback provided.')
      expect(gen.next().value).toEqual(put({ type: Action.WEB3_FAILED, error }))
    })
  })

  describe('Exhausts options', () => {
    beforeAll(async () => {
      global.window = {}
      gen = initializeWeb3({})
    })

    test('with failure', async () => {
      const error = new Error('Cannot find injected web3 or valid fallback.')
      expect(gen.next().value).toEqual(put({ type: Action.WEB3_FAILED, error }))
    })
  })
})
