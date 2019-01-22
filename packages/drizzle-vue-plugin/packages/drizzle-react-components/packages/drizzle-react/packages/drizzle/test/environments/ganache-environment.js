const Ganache = require('ganache-core')
const NodeEnvironment = require('jest-environment-node')

const defaultSeed = 'drizzle'
const defaultNetworkId = 6777
const defaultAccounts = [
  // based on default Mnemonic
  '0x8aDB46251E9cd45b5027501766531825C04a2E06',
  '0xb50CF9eD8f60605bEbB967776925f21Ba5c81D5D',
  '0x7fC9AD8C7A3232Aed94d6C68728D22D722694824',
  '0x6DADB5b9C2510bD3C266329781adFBa9A5145442',
  '0xc41E494bE83a33Bf56B5C071094859067bC9E728',
  '0x5B5b5c834daCf8ad46464a283a2B1B4Bd06A456e',
  '0x4B165a6036791822777C78cF7931F1d205d29118',
  '0x3950A710fb4b4ed456EC469E973D35c170802609',
  '0xDA343E876263D988DDD7C18Bb4aB288c7ef66D89',
  '0x1Ff0eB66355D4d3A1310FB759A8a67Efd58C888A'
]

class GanacheEnvironment extends NodeEnvironment {
  async setup () {
    await super.setup()

    // Startup a Ganache server.
    this.global.provider = Ganache.provider({
      seed: defaultSeed,
      network_id: defaultNetworkId,
      gasLimit: 7000000
    })

    this.global.accounts = defaultAccounts
    this.global.defaultNetworkId = defaultNetworkId
  }

  async teardown () {
    // close  provider engine gracefully
    this.global.provider.close(() => {})
    await super.teardown()
  }
}

module.exports = GanacheEnvironment
