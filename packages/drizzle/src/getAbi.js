export default function getAbi(contractEntry) {
  if (contractEntry.web3Contract) {
    return contractEntry.web3Contract.options.jsonInterface
  } else {
    return contractEntry.abi
  }
}
