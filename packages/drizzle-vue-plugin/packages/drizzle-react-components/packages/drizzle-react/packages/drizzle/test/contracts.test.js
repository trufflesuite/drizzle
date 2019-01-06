/*
 * Mock DrizzleContract to test instantiateWeb3Contract Saga
 */
jest.mock('../src/DrizzleContract')
import MockedDrizzleContract from '../src/DrizzleContract'
import { runSaga } from 'redux-saga'
import {
  /* addContract, instantiateContract, */
  instantiateWeb3Contract
} from '../src/contracts/contractsSaga'

import { mockDrizzleStore } from './utils/helpers'
global.window = {}

let mockStore

const web3Provider = { customProvider: global.provider }

beforeAll(() => {
  ;[mockStore] = mockDrizzleStore()
})

test('instantiateWeb3Contract', async () => {
  const mockWeb3Contract = 'TheGoodsContract'
  const mockContractName = 'TheGoods'
  const mockContractEvents = []

  const options = {
    web3Contract: mockWeb3Contract,
    name: mockContractName,
    events: mockContractEvents,
    store: mockStore,
    web3: web3Provider
  }

  await runSaga(mockStore, instantiateWeb3Contract, options).done

  expect(MockedDrizzleContract).toHaveBeenCalledTimes(1)

  const expectedArgs = [
    mockWeb3Contract,
    web3Provider,
    mockContractName,
    mockStore,
    mockContractEvents
  ]
  expect(MockedDrizzleContract).toHaveBeenCalledWith(...expectedArgs)
})
