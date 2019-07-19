export const contractInstances = state => state.instances

export const getContractData = (state, _, rootState) => options => {
  const { contract, method, toUtf8, toAscii } = options

  const drizzleInstance = rootState.drizzle.drizzleInstance
  const web3 = drizzleInstance.web3

  const instance = state.instances[contract]
  const cacheKey = state.cacheKeys[contract]
    ? state.cacheKeys[contract][method]
    : null

  // Reduce multiple states to `loading`
  if (
    cacheKey === null ||
    instance === undefined ||
    !instance.initialized ||
    !web3.utils
  )
    return 'loading'

  const cachedData = instance[method][cacheKey]
  if (cachedData === undefined) return 'loading'

  let { value } = cachedData
  const { hexToUtf8, hexToAscii } = drizzleInstance.web3.utils
  return toUtf8 ? hexToUtf8(value) : toAscii ? hexToAscii(value) : value
}
