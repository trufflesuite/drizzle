export const isDrizzleInitialized = state => state.initialized

export const getRegisteredContracts = state => state.registeredContracts

export const drizzleInstance = state => state.drizzleInstance

export const getAbi = state => (contractName, method) =>
  state.drizzleInstance.contracts[contractName].abi //.find(abi => abi.name === method)
