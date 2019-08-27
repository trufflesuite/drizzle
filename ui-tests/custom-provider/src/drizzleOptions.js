import SimpleStorage from "./contracts/SimpleStorage.json";

const options = {
  web3: {
    block: false,
    customProvider: 'ws://localhost:9545',
  },
  contracts: [SimpleStorage],
  polls: {
    accounts: 1500,
  },
};

export default options;
