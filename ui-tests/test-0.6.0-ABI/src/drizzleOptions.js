import Grue from "./contracts/Grue.json"
import Web3 from "web3"

const options = {
  web3: {
    block: false,
    customProvider: new Web3("ws://localhost:9545"),
  },
  contracts: [Grue],
  polls: {
    accounts: 1500,
  },
}

export default options
