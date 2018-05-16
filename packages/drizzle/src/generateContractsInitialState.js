import getAbi from './getAbi'

function generateContractsInitialState(options) {
  // Preloaded state
  var contractsInitialState = {}

  for (var i = 0; i < options.contracts.length; i++) {
    // Initial contract details
    var contractName = options.contracts[i].contractName

    contractsInitialState[contractName] = {
      initialized: false,
      synced: false
    }

    // Constant getters
    var abi = getAbi(options.contracts[i])
    for (var i2 = 0; i2 < abi.length; i2++) {
      var item = abi[i2];

      if (item.type == "function" && item.constant === true) {
        contractsInitialState[contractName][item.name] = {}
      }
    }
  }

  return contractsInitialState
}

module.exports = generateContractsInitialState
