import {
  isConstant,
  getAbi,
  generateContractInitialState,
  generateContractsInitialState
} from '../src/contractStateUtils'
import TestContractABI from './utils/data/TestContract-abi.json'

describe('Contract State Utilities', () => {
  describe('isConstant', () => {
    test('can identify a constant', () => {
      const config = { type: 'function', constant: true }
      expect(isConstant(config)).toBe(true)
    })

    test('can identify non constants', () => {
      let config = { type: 'function', constant: false }
      expect(isConstant(config)).toBe(false)

      config = { type: 'event' }
      expect(isConstant(config)).toBe(false)
    })
  })

  describe('getAbi', () => {
    test('can parse Web3 contract', () => {
      const jsonInterface = {}
      const web3Contract = { options: { jsonInterface } }
      expect(getAbi({ web3Contract })).toEqual(jsonInterface)
    })

    test('can parse TruffleArtifact', () => {
      const abi = {}
      const artifact = { abi }
      expect(getAbi(artifact)).toEqual(abi)
    })
  })

  describe('generateContractinitialState', () => {
    test('It generates correct state from truffleArtifact', () => {
      const expectedState = {
        initialized: false,
        synced: false,
        storedData: {}
      }

      const input = { abi: TestContractABI }
      expect(generateContractInitialState(input)).toEqual(expectedState)
    })

    test('It generates correct state from Web3 Contract', () => {
      const expectedState = {
        initialized: false,
        synced: false,
        storedData: {}
      }

      const input = {
        web3Contract: { options: { jsonInterface: TestContractABI } }
      }
      expect(generateContractInitialState(input)).toEqual(expectedState)
    })
  })

  describe('generateContractsInitialState', () => {
    test('it generates multi-contract initial state', () => {
      const contracts = [
        { contractName: 'C1', abi: TestContractABI },
        { contractName: 'C2', abi: TestContractABI }
      ]

      const expectedStates = {
        C1: {
          initialized: false,
          synced: false,
          storedData: {}
        },
        C2: {
          initialized: false,
          synced: false,
          storedData: {}
        }
      }

      expect(generateContractsInitialState({ contracts })).toEqual(
        expectedStates
      )
    })
  })
})
