const getAbi = contractEntry =>
  contractEntry.web3Contract
    ? contractEntry.web3Contract.options.jsonInterface
    : contractEntry.abi

export const generateContractInitialState = (contractConfig) =>
  getAbi(contractConfig).reduce((state, item) => {
    // Constant getters
    if (item.type === 'function' && item.constant === true) {
      state[item.name] = {}
    }
    return state
  }, {
    initialized: false,
    synced: false
  })

export const generateContractsInitialState = options =>
  options.contracts.reduce((state, contract) => {
    state[contract.contractName] = generateContractInitialState(contract)
    return state
  }, {})
