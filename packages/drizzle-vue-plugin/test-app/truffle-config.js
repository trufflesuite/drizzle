const path = require('path')
const HDWalletProvider = require('truffle-hdwallet-provider')
const mnemonic = process.env['ROPSTEN_MNEMONIC']
const infura_endpoint = process.env['INFURA_ENDPOINT']
console.log(mnemonic)

// gasLimit: 7000000
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, 'vapp/src/contracts'),
  networks: {
    development: {
      host: '127.0.0.1',
      port: 9545,
      network_id: '*'
    },

    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, infura_endpoint)
      },
      network_id: 3
    }
  }
}
