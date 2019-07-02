// import MockedDrizzleContract from '../../src/DrizzleContract'
import { call, put, select } from 'redux-saga/effects'

import Drizzle from '../../src/Drizzle'
import defaultDrizzleOptions from '../../src/defaultOptions'
import { initializeDrizzle } from '../../src/drizzleStatus/drizzleStatusSaga'
import { NETWORK_MAINNET, NETWORK_RINKEBY, NETWORK_GANACHE } from './constants'

// jest.mock('../../src/DrizzleContract')

describe('Drizzle options:', () => {
  const networkId = global.defaultNetworkId
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
    beforeEach(() => {
      drizzleOptions['networkWhitelist'] = [NETWORK_MAINNET, NETWORK_RINKEBY]
    })

    test('Unauthorized network prevents initialization', () => {
      drizzle = new Drizzle(drizzleOptions, mockedStore)

      // Iterate to 3rd effect in drizzleStatusSaga generator
      let gen = initializeDrizzle({ drizzle, options: drizzleOptions })
      let next = gen.next()
      next = gen.next()
      next = gen.next()

      const expectedAction = put({ type: 'NETWORK_MISMATCH' })
      expect(next.value).toEqual(expectedAction)
    })

    test('Authorized network initializes drizzle', () => {
      drizzleOptions['networkWhitelist'].push(NETWORK_GANACHE)

      drizzle = new Drizzle(drizzleOptions, mockedStore)

      // b. Iterate to 3rd effect in drizzleStatusSaga generator
      let gen = initializeDrizzle({ drizzle, options: drizzleOptions })
      let next = gen.next()
      next = gen.next()
      next = gen.next()

      const unExpectedAction = put({ type: 'NETWORK_MISMATCH' })
      expect(next.value).not.toEqual(unExpectedAction)
    })
  })
})
