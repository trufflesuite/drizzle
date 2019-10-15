const HDWalletProvider = require('@truffle/hdwallet-provider')

const mnemonic = process.env['MNEMONIC']
const rinkebyEndpoint = process.env['RINKEBY_ENDPOINT']
const ropstenEndpoint = process.env['ROPSTEN_ENDPOINT']

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  networks: {
    development: {
      host: 'localhost',
      port: 9545,
      network_id: '*'
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, ropstenEndpoint),
      network_id: '3'
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, rinkebyEndpoint),
      network_id: '4'
    },
  }
};
