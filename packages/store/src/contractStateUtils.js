export const getAbi = contractEntry =>
  contractEntry.web3Contract
    ? contractEntry.web3Contract.options.jsonInterface
    : contractEntry.abi

export const isGetterFunction = (abiItem) => {
  // must be func type, then either .constant for pre solc 0.6.0, or 'pure'/'view' for solc 0.6.0+
  return abiItem.type === 'function' && (['pure', 'view'].includes(abiItem.stateMutability) || abiItem.constant === true)
}

export const isSetterFunction = (abiItem) => {
  // must be func type, then either .constant is false for pre solc 0.6.0, or 'payable'/'nonpayable' for solc 0.6.0+
  return abiItem.type === 'function' && (['payable', 'nonpayable'].includes(abiItem.stateMutability) || abiItem.constant === false)
}

export const generateContractInitialState = contractConfig => {
  const constants = getAbi(contractConfig).filter(isGetterFunction)
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
  (options.contracts || []).reduce((state, contract) => {
    state[contract.contractName] = generateContractInitialState(contract)
    return state
  }, {})
