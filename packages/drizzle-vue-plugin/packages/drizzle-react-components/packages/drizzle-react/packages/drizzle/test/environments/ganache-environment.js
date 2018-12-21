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
    const server = Ganache.server({seed: "drizzle", network_id: 6777, gasLimit: 7000000});
    server.listen(8545, function(err, blockchain) {
      if (err) {
        console.error(err);
      }
    });
  }
  
  // TODO: Determine if ganache-cli requires teardown.
}

module.exports = GanacheEnvironment;