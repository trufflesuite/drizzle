let Web3 = require('web3');
const Ganache = require('ganache-cli');
const NodeEnvironment = require('jest-environment-node');

class GanacheEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    await super.setup();

    // Startup a Ganache server.
    this.global.provider = Ganache.provider({seed: "drizzle", network_id: 6777, gasLimit: 7000000});
  }
}

module.exports = GanacheEnvironment;