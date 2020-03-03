import {
  isGetterFunction,
  isSetterFunction,
  getAbi,
  generateContractInitialState,
  generateContractsInitialState
} from '../src/contractStateUtils'
import TestContractABI from './utils/data/TestContract-abi.json'

describe('Contract State Utilities', () => {
  describe('isConstant', () => {
    test('can identify a constant for solc v0.5.16 and below', () => {
      const config = { type: 'function', constant: true }
      expect(isGetterFunction(config)).toBe(true)
      expect(isSetterFunction(config)).toBe(false)
    })

    test('can identify non constants for solc v0.5.16 and below', () => {
      let config = { type: 'function', constant: false }
      expect(isGetterFunction(config)).toBe(false)
      expect(isSetterFunction(config)).toBe(true)

      config = { type: 'event' }
      expect(isGetterFunction(config)).toBe(false)
      expect(isSetterFunction(config)).toBe(false)
    })

    test('can identify a constant for a pure or view func, for breaking changes from solc v0.6.0 and above', () => {
      let config = { type: 'function', stateMutability: 'pure' }
      expect(isGetterFunction(config)).toBe(true)
      expect(isSetterFunction(config)).toBe(false)

      config = { type: 'function', stateMutability: 'view' }
      expect(isGetterFunction(config)).toBe(true)
      expect(isSetterFunction(config)).toBe(false)
    })

    test('can identify non constants, for breaking changes from solc v0.6.0 and above', () => {
      let config = { type: 'function', stateMutability: 'payable' }
      expect(isGetterFunction(config)).toBe(false)
      expect(isSetterFunction(config)).toBe(true)

      config = { type: 'function', stateMutability: 'nonpayable' }
      expect(isGetterFunction(config)).toBe(false)
      expect(isSetterFunction(config)).toBe(true)

      config = { type: 'event' }
      expect(isGetterFunction(config)).toBe(false)
      expect(isSetterFunction(config)).toBe(false)
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

    test('it generates valid initial state with empty contracts', () => {
      expect(generateContractsInitialState({})).toEqual({})
    })
  })
})
