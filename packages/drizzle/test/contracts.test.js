/*
 * Mock DrizzleContract to test instantiateWeb3Contract Saga
 */
jest.mock('../src/DrizzleContract')
import MockedDrizzleContract from '../src/DrizzleContract'
import { runSaga } from 'redux-saga'
import { /* addContract, instantiateContract, */
  createContractEventChannel,
  instantiateWeb3Contract
} from '../src/contracts/contractsSaga'

import { mockDrizzleStore } from './utils/helpers'
global.window = {}

let mockedStore

const contractName = 'SimpleStorage'
const web3Provider = { customProvider: global.provider }

beforeAll(() => {
  [mockedStore] = mockDrizzleStore({
    'TheGoodsContract': {
      events: []
    }
  })

  let spy = jest.fn();
  let mockedContract = {
    events: {
      ReallyCoolEvent: spy
    }
  }
})

test('instantiateWeb3Contract', async () => {
  const mockWeb3Contract = 'TheGoodsContract'
  const mockContractName = 'TheGoods'
  const mockContractEvents = []

  const options = {
    web3Contract: mockWeb3Contract,
    name: mockContractName,
    events: mockContractEvents,
    store: mockedStore,
    web3: web3Provider
  }

  const aContract = await runSaga(mockedStore, instantiateWeb3Contract, options).done
  expect(MockedDrizzleContract).toHaveBeenCalledTimes(1)

  const expectedArgs = [mockWeb3Contract, web3Provider, mockContractName, mockedStore, mockContractEvents]
  expect(MockedDrizzleContract).toHaveBeenCalledWith(...expectedArgs)

  // It returns a Contract with the proper shape
  expect(aContract).toHaveProperty('cacheCallFunction')
  expect(aContract).toHaveProperty('cacheSendFunction')
  expect(aContract).toHaveProperty('generateArgsHash')
})

describe('it receives contract events', () => {
  const eventName = 'ReallyCoolEvent'
  const eventOptions = {}

  beforeEach(() => {
    eventListener = createContractEventChannel({ mockedContract, eventName, eventOptions })
  })

  test('listens for contract events', async () => {
    // call the set function
    

    eventListener.take((event) => {
      expect(event.type).toEqual('BLOCK_RECEIVED')
    })
  })

  test('unsubscribes from contract events', () => {
    eventListener.take((event) => {
      expect(event.type).toEqual('@@redux-saga/CHANNEL_END')
    })

    blockListener.close()
  })
})
