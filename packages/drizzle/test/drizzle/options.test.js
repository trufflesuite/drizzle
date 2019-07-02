import MockedDrizzleContract from '../../src/DrizzleContract'

import Drizzle from '../../src/Drizzle'
import defaultDrizzleOptions from '../../src/defaultOptions'
import { NETWORK_MAINNET, NETWORK_RINKEBY,
         NETWORK_GANACHE } from './constants'

jest.mock('../../src/DrizzleContract')

describe('Drizzle options:', () => {
  const networkId = global.defaultNetworkId
  const accounts = global.accounts
  const contractName = 'TestContract'

  let dispatchSpy, mockedStore, state

  const drizzleOptions = {}
  let drizzle
  let contractCreatorSpy
  let mockedWeb3

  beforeEach(() => {
    MockedDrizzleContract.mockClear()

    // Mock Store
    state = { web3: { networkId }, accounts }
    dispatchSpy = jest.fn()
    mockedStore = { dispatch: dispatchSpy, getState: () => state }

    // Create Drizzle and simulate web3 resolution
    contractCreatorSpy = jest.fn()
    mockedWeb3 = { eth: { Contract: contractCreatorSpy } }
  })

  describe('Allowed Networks:', () => {
    beforeEach(() => {
      drizzleOptions['networkWhitelist'] = [
        NETWORK_MAINNET,
        NETWORK_RINKEBY
      ]
    })

    test('Unauthorized network prevents initialization', async () => {
      drizzle = new Drizzle(drizzleOptions, mockedStore)
      drizzle.web3 = mockedWeb3

      await MockedDrizzleContract.mockImplementation(() => ({ contractName }))

      const expectedAction = { type: 'NETWORK_MISMATCH' }
      expect(dispatchSpy).toHaveBeenCalledWith(expectedAction)

      const unexpectedAction = { type: 'DRIZZLE_INITIALIZED' }
      expect(dispatchSpy).not.toHaveBeenCalledWith(unexpectedAction)
    })

    test('Authorized network initializes drizzle', async () => {
      drizzleOptions['networkWhitelist'].push(NETWORK_GANACHE)

      drizzle = new Drizzle(drizzleOptions, mockedStore)
      drizzle.web3 = mockedWeb3

      await MockedDrizzleContract.mockImplementation(() => ({ contractName }))

      const expectedAction = { type: 'DRIZZLE_INITIALIZED' }
      expect(dispatchSpy).toHaveBeenCalledWith(expectedAction)

      const unexpectedAction = { type: 'NETWORK_MISMATCH' }
      expect(dispatchSpy).not.toHaveBeenCalledWith(unexpectedAction)
    })
  })
})
