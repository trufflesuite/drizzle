import MockedDrizzleContract from '../../src/DrizzleContract'

import { getWeb3Assets } from '../utils/helpers'
import Drizzle from '../../src/Drizzle'
import defaultDrizzleOptions from '../../src/defaultOptions'

jest.mock('../../src/DrizzleContract')

describe('Drizzle API', () => {
  const networkId = global.defaultNetworkId
  const accounts = global.accounts
  const contractName = 'TestContract'

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

    // Only the contractName is required for these tests
    MockedDrizzleContract.mockImplementation(() => ({ contractName }))
  })

  test('Constructor fires up drizzle store', () => {
    const expectedAction = {
      type: 'DRIZZLE_INITIALIZING',
      drizzle,
      options: defaultDrizzleOptions
    }
    expect(dispatchSpy).toHaveBeenCalledWith(expectedAction)
  })

  describe('Add:', () => {
    test('a Web3 Contracts', () => {
      const web3Contract = {}
      const contractConfig = { web3Contract, contractName }

      drizzle.addContract(contractConfig)

      // 1 in constructor, 2 in addContract
      expect(dispatchSpy).toHaveBeenCalledTimes(3)

      let expectedAction = { type: 'CONTRACT_INITIALIZING', contractConfig }
      expect(dispatchSpy).toHaveBeenNthCalledWith(2, expectedAction)

      expectedAction = { type: 'CONTRACT_INITIALIZED', name: contractName }
      expect(dispatchSpy).toHaveBeenNthCalledWith(3, expectedAction)

      expect(drizzle.contractList).toHaveLength(1)
      expect(drizzle.contracts).toHaveProperty(contractName)
      expect(MockedDrizzleContract).toHaveBeenCalledTimes(1)
    })

    test('a TruffleArtifact Contracts', async () => {
      const { truffleArtifact } = await getWeb3Assets()
      drizzle.addContract(truffleArtifact)

      // 1 in constructor, 2 in addContract
      expect(dispatchSpy).toHaveBeenCalledTimes(3)

      let expectedAction = {
        type: 'CONTRACT_INITIALIZING',
        contractConfig: truffleArtifact
      }
      expect(dispatchSpy).toHaveBeenNthCalledWith(2, expectedAction)

      expectedAction = {
        type: 'CONTRACT_INITIALIZED',
        name: truffleArtifact.contractName
      }
      expect(dispatchSpy).toHaveBeenNthCalledWith(3, expectedAction)

      expect(drizzle.contractList).toHaveLength(1)
      expect(drizzle.contracts).toHaveProperty(truffleArtifact.contractName)
      expect(MockedDrizzleContract).toHaveBeenCalledTimes(1)
    })

    test('does not add duplicate contract', () => {
      const web3Contract = {}
      const contractConfig = { web3Contract, contractName }

      MockedDrizzleContract.mockImplementation(() => ({ contractName }))
      drizzle.addContract(contractConfig)

      // Only called on 1st add
      expect(dispatchSpy).toHaveBeenCalledTimes(3)

      expect(drizzle.contractList).toHaveLength(1)
      expect(MockedDrizzleContract).toHaveBeenCalledTimes(1)

      // Try to add the same contract
      const chucker = () => drizzle.addContract(contractConfig)
      expect(chucker).toThrow(/^Contract already exists: TestContract/)

      // No more calls to dispatch
      expect(dispatchSpy).toHaveBeenCalledTimes(3)
    })
  })

  describe('Delete:', () => {
    test('removes a contract', () => {
      // Add a contract
      const web3Contract = {}
      const contractConfig = { web3Contract, contractName }

      drizzle.addContract(contractConfig)
      expect(drizzle.contractList).toHaveLength(1)

      drizzle.deleteContract(contractName)
      expect(drizzle.contractList).toHaveLength(0)

      // 3 calls to add, 1 to delete
      expect(dispatchSpy).toHaveBeenCalledTimes(4)
    })

    test('throws if contract does not exist', () => {
      expect(drizzle.contractList).toHaveLength(0)

      const eraser = () => drizzle.deleteContract('Transmogrify')
      expect(eraser).toThrow(/^Contract does not exist: Transmogrify/)

      // 1 call in ctor to initialize drizzle
      expect(dispatchSpy).toHaveBeenCalledTimes(1)
    })
  })
})
