import { put } from 'redux-saga/effects'

import Drizzle from '../../src/Drizzle'
import defaultDrizzleOptions from '../../src/defaultOptions'
import { initializeDrizzle } from '../../src/drizzleStatus/drizzleStatusSaga'
import { NETWORK_MISMATCH } from '../../src/web3/constants'
import {
  NETWORK_MAINNET,
  NETWORK_RINKEBY,
  NETWORK_ROPSTEN,
  NETWORK_GANACHE
} from './constants'

describe('Drizzle options:', () => {
  const accounts = global.accounts
  const drizzleOptions = {}

  let dispatchSpy, mockedStore, state, networkId, drizzle

  beforeEach(() => {
    networkId = global.defaultNetworkId

    // Mock Store
    state = { web3: { networkId }, accounts }
    dispatchSpy = jest.fn()
    mockedStore = { dispatch: dispatchSpy, getState: () => state }
  })

  describe('Allowed Networks:', () => {
    beforeEach(() => {
      drizzleOptions['networkWhitelist'] = [NETWORK_MAINNET, NETWORK_RINKEBY]
    })

    test('Unauthorized network fires a mismatch', () => {
      networkId = NETWORK_ROPSTEN
      drizzle = new Drizzle(drizzleOptions, mockedStore)

      let next = iterateInitializeDrizzleSagaToNetworkMismatch(
        drizzle,
        drizzleOptions,
        networkId
      )

      const expectedAction = put({ type: NETWORK_MISMATCH, networkId })
      expect(next.value).toEqual(expectedAction)
    })

    test('Authorized network does NOT fire a mismatch', () => {
      networkId = NETWORK_ROPSTEN
      drizzleOptions['networkWhitelist'].push(networkId)

      drizzle = new Drizzle(drizzleOptions, mockedStore)

      let next = iterateInitializeDrizzleSagaToNetworkMismatch(
        drizzle,
        drizzleOptions,
        networkId
      )

      const unExpectedAction = put({ type: NETWORK_MISMATCH, networkId })
      expect(next.value).not.toEqual(unExpectedAction)
    })

    test('Ganache does NOT fire a mismatch', () => {
      networkId = NETWORK_GANACHE

      drizzle = new Drizzle(drizzleOptions, mockedStore)

      let next = iterateInitializeDrizzleSagaToNetworkMismatch(
        drizzle,
        drizzleOptions,
        networkId
      )

      const unExpectedAction = put({ type: NETWORK_MISMATCH, networkId })
      expect(next.value).not.toEqual(unExpectedAction)
    })
  })
})

function iterateInitializeDrizzleSagaToNetworkMismatch(
  drizzle,
  options,
  networkId
) {
  // Iterate to 3rd effect in initializeDrizzle generator
  let gen = initializeDrizzle({ drizzle, options })
  let next = gen.next() // initializeWeb3
  next = gen.next() // getNetworkId

  // Replace saga networkId with our own
  return gen.next(networkId) // networkWhitelist
}
