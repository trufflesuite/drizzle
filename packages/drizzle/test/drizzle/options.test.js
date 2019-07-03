import { call, put, select } from 'redux-saga/effects'

import Drizzle from '../../src/Drizzle'
import defaultDrizzleOptions from '../../src/defaultOptions'
import { initializeDrizzle } from '../../src/drizzleStatus/drizzleStatusSaga'
import { NETWORK_MISMATCH } from '../../src/web3/constants'
import { NETWORK_MAINNET, NETWORK_RINKEBY,
         NETWORK_ROPSTEN } from './constants'

describe('Drizzle options:', () => {
  let networkId = global.defaultNetworkId
  const accounts = global.accounts

  let dispatchSpy, mockedStore, state

  const drizzleOptions = {}
  let drizzle
  let contractCreatorSpy
  let mockedWeb3

  beforeEach(() => {
    // Mock Store
    state = { web3: { networkId }, accounts }
    dispatchSpy = jest.fn()
    mockedStore = { dispatch: dispatchSpy, getState: () => state }
  })

  describe('Allowed Networks:', () => {
    networkId = NETWORK_ROPSTEN

    beforeEach(() => {
      drizzleOptions['networkWhitelist'] = [
        NETWORK_MAINNET,
        NETWORK_RINKEBY
      ]
    })

    test('Unauthorized network prevents initialization', () => {
      drizzle = new Drizzle(drizzleOptions, mockedStore)

      // Iterate to 3rd effect in initializeDrizzle generator
      let gen = initializeDrizzle({drizzle, options: drizzleOptions})
      let next = gen.next() // initializeWeb3
      next = gen.next() // getNetworkId
      // Replace saga networkId with our own
      next = gen.next(networkId) // networkWhitelist check

      const expectedAction = put({ type: NETWORK_MISMATCH, networkId }) // Use constant
      expect(next.value).toEqual(expectedAction)
    })

    test('Authorized network initializes drizzle', () => {
      drizzleOptions['networkWhitelist'].push(networkId)

      drizzle = new Drizzle(drizzleOptions, mockedStore)

      // Iterate to 3rd effect in initializeDrizzle generator
      let gen = initializeDrizzle({drizzle, options: drizzleOptions})
      let next = gen.next() // initializeWeb3
      next = gen.next() // getNetworkId
      // Replace saga networkId with our own
      next = gen.next(networkId) // networkWhitelist check

      const unExpectedAction = put({ type: NETWORK_MISMATCH, networkId }) // Use constant
      expect(next.value).not.toEqual(unExpectedAction)
    })
  })
})
