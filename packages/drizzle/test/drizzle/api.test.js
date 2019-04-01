import MockedDrizzleContract from '../../src/DrizzleContract'

import { getWeb3Assets } from '../utils/helpers'
import Drizzle from '../../src/Drizzle'

jest.mock('../../src/DrizzleContract')

describe('Drizzle API', () => {
  const networkId = global.defaultNetworkId
  const accounts = global.accounts

  let dispatchSpy, mockedStore, state

  const drizzleOptions = {}
  let drizzle
  let contractCreatorSpy

  beforeEach(() => {
    MockedDrizzleContract.mockClear()

    // Mock Store
    state = { web3: { networkId }, accounts }
    dispatchSpy = jest.fn()
    mockedStore = { dispatch: dispatchSpy, getState: () => state }

    // Create Drizzle and simulate web3 resolution
    contractCreatorSpy = jest.fn()
    let mockedWeb3 = { eth: { Contract: contractCreatorSpy } }
    drizzle = new Drizzle(drizzleOptions, mockedStore)
    drizzle.web3 = mockedWeb3
  })

  test('Constructor fires up drizzle store', () => {
    const expectedAction = {
      type: 'DRIZZLE_INITIALIZING',
      drizzle,
      options: drizzleOptions
    }
    expect(dispatchSpy).toHaveBeenCalledWith(expectedAction)
  })

  describe('Add:', () => {
    test('a Web3 Contracts', () => {
      const web3Contract = {}
      const contractConfig = { web3Contract }

      drizzle.addContract(contractConfig)

      expect(drizzle.contractList).toHaveLength(1)
      expect(MockedDrizzleContract).toHaveBeenCalledTimes(1)
    })

    test('a TruffleArtifact Contracts', async () => {
      const { truffleArtifact } = await getWeb3Assets()
      drizzle.addContract(truffleArtifact)

      expect(drizzle.contractList).toHaveLength(1)
      expect(MockedDrizzleContract).toHaveBeenCalledTimes(1)
    })

    test('does not add duplicate contract', () => {
      const contractName = 'TestContract'
      const web3Contract = {}
      const contractConfig = { web3Contract, contractName }

      MockedDrizzleContract.mockImplementation(() => ({ contractName }))
      drizzle.addContract(contractConfig)

      expect(drizzle.contractList).toHaveLength(1)
      expect(MockedDrizzleContract).toHaveBeenCalledTimes(1)

      // Try to add the same contract
      const chucker = () => drizzle.addContract(contractConfig)
      expect(chucker).toThrow(/^Contract already exists: TestContract/)
    })
  })
})
