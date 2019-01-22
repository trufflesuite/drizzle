/* eslint import/first: 0 */
jest.mock('../../src/DrizzleContract')
import MockedDrizzleContract from '../../src/DrizzleContract'

import { runSaga } from 'redux-saga'
import {
  instantiateContract,
  instantiateWeb3Contract
} from '../../src/contracts/contractsSaga'

import { mockDrizzleStore, getWeb3Assets } from '../utils/helpers'

describe('Creates a contract', () => {
  let mockedStore, web3, truffleArtifact, accounts

  beforeEach(async () => {
    ;({ web3, accounts, truffleArtifact } = await getWeb3Assets())
    ;[mockedStore] = mockDrizzleStore({
      web3: { networkId: global.defaultNetworkId },
      accounts
    })
  })

  test('with instantiateWeb3Contract Saga', async () => {
    const mockedWeb3Contract = 'TheGoodsContract'
    const mockedContractName = 'TheGoods'
    const mockedContractEvents = []

    const options = {
      web3Contract: mockedWeb3Contract,
      name: mockedContractName,
      events: mockedContractEvents,
      store: mockedStore,
      web3
    }

    const contractInstance = await runSaga(
      mockedStore,
      instantiateWeb3Contract,
      options
    ).done
    expect(MockedDrizzleContract).toHaveBeenCalledTimes(1)

    const expectedArgs = [
      mockedWeb3Contract,
      web3,
      mockedContractName,
      mockedStore,
      mockedContractEvents
    ]
    expect(MockedDrizzleContract).toHaveBeenCalledWith(...expectedArgs)

    // It returns a Contract with the proper shape
    expect(contractInstance).toHaveProperty('cacheCallFunction')
    expect(contractInstance).toHaveProperty('cacheSendFunction')
    expect(contractInstance).toHaveProperty('generateArgsHash')
  })

  test('with instantiateContract Saga', async () => {
    const options = {
      contractArtifact: truffleArtifact,
      events: [],
      store: mockedStore,
      web3
    }

    const web3ContractCreator = jest.fn()
    web3.eth.Contract = web3ContractCreator

    const contractInstance = await runSaga(
      mockedStore,
      instantiateContract,
      options
    ).done
    expect(web3ContractCreator).toHaveBeenCalledTimes(1)
    expect(MockedDrizzleContract).toHaveBeenCalledTimes(1)

    // It returns a Contract with the proper shape
    expect(contractInstance).toHaveProperty('cacheCallFunction')
    expect(contractInstance).toHaveProperty('cacheSendFunction')
    expect(contractInstance).toHaveProperty('generateArgsHash')
  })
})
