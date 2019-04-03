export const getAbi = contractEntry =>
  contractEntry.web3Contract
    ? contractEntry.web3Contract.options.jsonInterface
    : contractEntry.abi

export const isConstant = x => x.type === 'function' && x.constant === true

export const generateContractInitialState = contractConfig => {
  const constants = getAbi(contractConfig).filter(isConstant)
  const objectOfConstants = constants.reduce(
    (acc, x) => ({ ...acc, [x.name]: {} }),
    {}
  )
  return {
    initialized: false,
    synced: false,
    ...objectOfConstants
  }
}

export const generateContractsInitialState = options =>
  options.contracts.reduce((state, contract) => {
    state[contract.contractName] = generateContractInitialState(contract)
    return state
  }, {})
