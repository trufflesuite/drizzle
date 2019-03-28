/* eslint import/first: 0 */
jest.mock('../src/DrizzleContract')
import DrizzleContract from '../src/DrizzleContract'

import { getWeb3Assets } from './utils/helpers'
import Drizzle, { getOrCreateWeb3Contract } from '../src/Drizzle'

describe('Drizzle', () => {
  let accounts
  const networkId = global.defaultNetworkId

  beforeAll(async () => {
    ;({ accounts } = await getWeb3Assets())
  })

  describe('Unit', () => {
    describe('getOrCreateWeb3Contract', () => {
      let store, state

      beforeEach(() => {
        state = { web3: { networkId }, accounts }
        store = { getState: () => state }
      })

      test('recognizes a web3 contract', () => {
        const web3Contract = {}
        const contractConfig = { web3Contract }
        const resolved = getOrCreateWeb3Contract(store, contractConfig, {})
        expect(resolved).toBe(web3Contract)
      })

      test('recognizes a truffleArtifact', () => {
        const address = '0x0123456789'
        const abi = 'ABI'
        const deployedBytecode = 'deadbeef'
        const truffleArtifact = {
          abi,
          networks: { [networkId]: { address } },
          deployedBytecode
        }
        const contractCreator = jest.fn()
        const web3 = { eth: { Contract: contractCreator } }
        getOrCreateWeb3Contract(store, truffleArtifact, web3)

        // Default selected is the 1st by convention
        const selectedAccount = accounts[0]
        const expectedArgs = [
          abi,
          address,
          { from: selectedAccount, data: deployedBytecode }
        ]
        expect(contractCreator).toHaveBeenCalledWith(...expectedArgs)
      })
    })
  })

  describe('API', () => {
    let dispatch, store, state

    let drizzle, drizzleOptions
    let truffleArtifact

    let web3, contractCreator

    beforeEach(async () => {
      contractCreator = jest.fn()
      web3 = { eth: { Contract: contractCreator } }
      dispatch = jest.fn()
      drizzleOptions = {}
      state = { web3: { networkId }, accounts }
      store = { dispatch, getState: () => state }

      // Create Drizzle and simulate web3 resolution
      drizzle = new Drizzle(drizzleOptions, store)
      drizzle.web3 = web3
      ;({ truffleArtifact } = await getWeb3Assets())
    })

    describe('Construction', () => {
      test('fires up drizzle store', () => {
        const expectedAction = {
          type: 'DRIZZLE_INITIALIZING',
          drizzle,
          options: drizzleOptions
        }
        expect(dispatch).toHaveBeenCalledWith(expectedAction)
      })
    })

    describe('can add:', () => {
      test('Web3 Contracts', () => {
        const web3Contract = {}
        const contractConfig = { web3Contract }

        drizzle.addContract(contractConfig)

        expect(drizzle.contractList).toHaveLength(1)
        expect(DrizzleContract).toHaveBeenCalled()
      })

      test('TruffleArtifact Contracts', () => {
        drizzle.addContract(truffleArtifact)

        expect(drizzle.contractList).toHaveLength(1)
        expect(DrizzleContract).toHaveBeenCalled()
      })
    })
  })
})
