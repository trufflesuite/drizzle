const HDWalletProvider = require('@truffle/hdwallet-provider')

const mnemonic = process.env['MNEMONIC']
const rinkeby_endpoint = process.env['RINKEBY_ENDPOINT']
const ropsten_endpoint = process.env['ROPSTEN_ENDPOINT']

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  networks: {
    development: {
      host: 'localhost',
      port: 9545,
      network_id: '*'
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, ropsten_endpoint),
      network_id: '3'
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, rinkeby_endpoint),
    network_id: '4'
    },
  }
};
