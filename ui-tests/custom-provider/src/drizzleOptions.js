import SimpleStorage from "./contracts/SimpleStorage.json"
import Web3 from "web3"

const options = {
  web3: {
    block: false,
    customProvider: new Web3("ws://localhost:9545"),
  },
  contracts: [SimpleStorage],
  polls: {
    accounts: 1500,
  },
}

export default options
