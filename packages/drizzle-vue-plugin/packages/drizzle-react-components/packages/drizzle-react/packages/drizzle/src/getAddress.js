export default function(contractConfig) {
  if (contractConfig.web3Contract) {
    return web3Contract.options.address
  }
}
