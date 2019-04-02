import { getOrCreateWeb3Contract } from '../../src/Drizzle'

describe('getOrCreateWeb3Contract', () => {
  const networkId = global.defaultNetworkId
  const accounts = global.accounts

  let mockedStore, state

  beforeEach(() => {
    state = { web3: { networkId }, accounts }
    mockedStore = { getState: () => state }
  })

  test('recognizes a web3 contract', () => {
    const mockedWeb3Contract = {}
    const mockedContractConfig = { web3Contract: mockedWeb3Contract }

    const resolved = getOrCreateWeb3Contract(mockedStore, mockedContractConfig, {})
    expect(resolved).toBe(mockedWeb3Contract)
  })

  test('recognizes a truffleArtifact', () => {
    const address = '0x0123456789'
    const abi = 'ABI'
    const deployedBytecode = "I am Jack's caffeine fueled ledger code"
    const mockedTruffleArtifact = {
      abi,
      networks: {[networkId]: {address}},
      deployedBytecode
    }
    const contractCreatorSpy = jest.fn()
    const mockedWeb3 = { eth: { Contract: contractCreatorSpy } }
    getOrCreateWeb3Contract(mockedStore, mockedTruffleArtifact, mockedWeb3)

    // Default selected is the 1st by convention
    const selectedAccount = accounts[0]
    const expectedArgs = [abi, address, { from: selectedAccount, data: deployedBytecode }]
    expect(contractCreatorSpy).toHaveBeenCalledWith(...expectedArgs)
  })
})
