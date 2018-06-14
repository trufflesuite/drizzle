import { generateContractInitialState } from './generateContractInitialState'

export function generateContractsInitialState(options) {
  // Preloaded state
  var contractsInitialState = {}

  for (var i = 0; i < options.contracts.length; i++) {
    // Initial contract details
    var contractName = options.contracts[i].contractName
    contractsInitialState[contractName] = generateContractInitialState(options.contracts[i])
  }

  return contractsInitialState
}