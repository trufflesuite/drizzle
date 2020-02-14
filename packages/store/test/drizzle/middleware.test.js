import MockedDrizzleContract from '../../src/DrizzleContract'
import { drizzleMiddleware } from '../../src/drizzle-middleware'
import Drizzle from '../../src/Drizzle'
import { getWeb3Assets } from '../utils/helpers'
import configureStore from 'redux-mock-store'
import defaultDrizzleOptions from '../../src/defaultOptions'
import * as DrizzleActions from '../../src/drizzleStatus/constants'
import * as ContractActions from '../../src/contracts/constants'
import * as AccountsActions from '../../src/accounts/constants'

jest.mock('../../src/DrizzleContract')

const mockDrizzleInstance = (defaultAccount, numContracts = 1) => ({
  contractList: Array.from({ length: numContracts }, () => ({
    options: { from: defaultAccount }
  }))
})

describe('Drizzle Middleware', () => {
  const accounts = global.accounts
  let dmw, mockedDrizzleInstance
  let next
  beforeEach(() => {
    mockedDrizzleInstance = mockDrizzleInstance(accounts[0], 10)
    next = jest.fn()
    dmw = drizzleMiddleware({ contractList: [] })
  })

  test('it passes action to the rest of middleware Pipeline', () => {
    dmw()(next)({}) // call with undefined action
    expect(next).toHaveBeenCalledTimes(1)
  })

  test('default sendFrom changes when wallet provider changes selectedAccount', () => {
    const selectedAccount = accounts[2]
    dmw()(next)({
      type: DrizzleActions.DRIZZLE_INITIALIZING,
      drizzle: mockedDrizzleInstance
    })
    dmw()(next)({ type: AccountsActions.ACCOUNTS_FETCHED, accounts: [selectedAccount] })

    // All contract options should have from address set to selectedAccount
    const froms = mockedDrizzleInstance.contractList.map(x => x.options.from)
    expect(froms).toHaveLength(10)
    const fromSet = new Set(froms)
    expect(fromSet.size).toBe(1)
    expect(fromSet.has(selectedAccount)).toBe(true)
    expect(next).toHaveBeenCalledTimes(2)
  })

  test('default sendFrom does not change unnecessarily', () => {
    dmw()(next)({
      type: DrizzleActions.DRIZZLE_INITIALIZING,
      drizzle: mockedDrizzleInstance
    })

    // choose 1st account to indicate no change
    const selectedAccount = accounts[0]

    // Sentinel remains IFF no account change is detected
    const sentinel = {}
    mockedDrizzleInstance.contractList.push({ options: { from: sentinel } })

    dmw()(next)({ type: AccountsActions.ACCOUNTS_FETCHED, accounts: [selectedAccount] })

    const froms = mockedDrizzleInstance.contractList.map(x => x.options.from)
    expect(froms).toHaveLength(11)

    const fromSet = new Set(froms)
    expect(fromSet.size).toBe(2)
    expect(fromSet.has(selectedAccount)).toBe(true)
    expect(fromSet.has(sentinel)).toBe(true)
    expect(next).toHaveBeenCalledTimes(2)
  })

  describe('dispatch AddContract', () => {
    const networkId = global.defaultNetworkId
    const accounts = global.accounts
    const drizzleOptions = {}
    const expectedDrizzleOptions = defaultDrizzleOptions
    const state = { web3: { networkId }, accounts }

    let middlewares, mockedStore
    let drizzle, mockedWeb3, contractCreatorSpy
    beforeEach(() => {
      MockedDrizzleContract.mockClear()

      // Mock store with middleware
      middlewares = [drizzleMiddleware()]
      mockedStore = configureStore(middlewares)(state)

      // Mock drizzle instance and dispatch DRIZZLE_INITIALIZING
      contractCreatorSpy = jest.fn()
      mockedWeb3 = { eth: { Contract: contractCreatorSpy } }
      drizzle = new Drizzle(drizzleOptions, mockedStore)

      // Get past web3 initialization
      drizzle.web3 = mockedWeb3
    })

    test('is initialized', () => {
      const actions = mockedStore.getActions()
      expect(actions).toHaveLength(1)
      expect(actions[0]).toEqual({
        type: DrizzleActions.DRIZZLE_INITIALIZING,
        drizzle,
        options: expectedDrizzleOptions
      })
    })

    describe('Adds a Contract', () => {
      const mockedContractAddress = '0x0123456789'
      const mockedEvents = []
      let mockedContractConfig

      beforeEach(async () => {
        // Arrange minimum mock of a ContractConfig
        ;({ truffleArtifact: mockedContractConfig } = await getWeb3Assets())
        MockedDrizzleContract.mockImplementation(() => ({
          contractName: mockedContractConfig.contractName
        }))
        mockedContractConfig.networks = { [networkId]: mockedContractAddress }
      })

      test('successfully', async () => {
        mockedStore.dispatch({
          type: ContractActions.ADD_CONTRACT,
          contractConfig: mockedContractConfig,
          mockedEvents
        })

        // Assert
        const actions = mockedStore.getActions()
        expect(actions).toHaveLength(4)
        expect(actions[0]).toEqual({
          type: DrizzleActions.DRIZZLE_INITIALIZING,
          drizzle,
          options: expectedDrizzleOptions
        })
        expect(actions[1]).toEqual({
          type: ContractActions.CONTRACT_INITIALIZING,
          contractConfig: mockedContractConfig
        })
        expect(actions[2]).toEqual({
          type: ContractActions.CONTRACT_INITIALIZED,
          name: mockedContractConfig.contractName
        })
        expect(actions[3]).toEqual({
          type: ContractActions.ADD_CONTRACT,
          contractConfig: mockedContractConfig,
          mockedEvents
        })
      })

      test('handles exception', async () => {
        // Add a contract

        const addContractAction = {
          type: ContractActions.ADD_CONTRACT,
          contractConfig: mockedContractConfig,
          mockedEvents
        }
        mockedStore.dispatch(addContractAction)

        const actions = mockedStore.getActions()
        expect(actions).toHaveLength(4)

        // Add same contract
        const doppleganger = () => mockedStore.dispatch(addContractAction)

        // Assert
        expect(doppleganger).not.toThrow()
        expect(actions).toHaveLength(5)

        const errorAction = actions[4]
        expect(errorAction.type).toEqual(ContractActions.ERROR_ADD_CONTRACT)
        expect(errorAction.error.message).toEqual(
          `Contract already exists: ${mockedContractConfig.contractName}`
        )
        expect(errorAction.attemptedAction).toEqual(addContractAction)
      })
    })
  })
})
