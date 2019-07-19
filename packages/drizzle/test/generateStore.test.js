import { generateStore } from '../src/generateStore'
import { getWeb3Assets } from './utils/helpers'

const partialDrizzleOptions = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:9545'
    }
  },
  polls: {
    accounts: 30000
  }
}

const hasBasicShape = state => {
  expect(state).toHaveProperty('contracts')
  expect(state).toHaveProperty('contracts.TestContract')
  expect(Object.keys(state.contracts)).toHaveLength(1)

  expect(state).toHaveProperty('contracts.TestContract.initialized')
  expect(state).toHaveProperty('contracts.TestContract.synced')
  expect(state).toHaveProperty('contracts.TestContract.storedData')

  expect(state).toHaveProperty('accounts')
  expect(state).toHaveProperty('accountBalances')
  expect(state).toHaveProperty('currentBlock')
  expect(state).toHaveProperty('drizzleStatus')
  expect(state).toHaveProperty('drizzleStatus.initialized')
  expect(state).toHaveProperty('transactions')
  expect(state).toHaveProperty('transactionStack')
  expect(state).toHaveProperty('web3')
}

describe('generateStore', () => {
  let TestContract, drizzleOptions

  beforeEach(async () => {
    ;({ truffleArtifact: TestContract } = await getWeb3Assets())
    drizzleOptions = { ...partialDrizzleOptions, contracts: [TestContract] }
  })

  describe('has the right shape', () => {
    test('when invoked with only drizzleOptions', () => {
      const store = generateStore({ drizzleOptions })
      const state = store.getState()
      hasBasicShape(state)
    })

    test('when invoked with appReducer', () => {
      const initialState = 'This is the initial State'
      const myState = jest.fn((state = initialState) => state)
      const initialAppState = { myState: initialState }
      const appReducers = { myState }
      const store = generateStore({
        drizzleOptions,
        appReducers,
        initialAppState
      })
      const state = store.getState()
      hasBasicShape(state)
      expect(state).toHaveProperty('myState')
      expect(state.myState).toBe(initialState)
    })
  })
})
