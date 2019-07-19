import { useDrizzleState } from '.'

export default drizzle => (
  contractNameOrNames,
  methodNameOrFunction,
  ...args
) => {
  const isFunction = typeof methodNameOrFunction === 'function'
  const drizzleState = useDrizzleState(drizzleState => {
    if (isFunction) {
      return contractNameOrNames.reduce(
        (acc, contractName) => ({
          ...acc,
          [contractName]: drizzleState.contracts[contractName]
        }),
        {}
      )
    } else {
      const instance = drizzle.contracts[contractNameOrNames]
      const cacheKey = instance.methods[methodNameOrFunction].cacheCall(...args)
      const cache =
        drizzleState.contracts[contractNameOrNames][methodNameOrFunction][
          cacheKey
        ]
      return {
        value: cache && cache.value
      }
    }
  }, args)
  return isFunction
    ? methodNameOrFunction((contractName, methodName, ...args) => {
        const instance = drizzle.contracts[contractName]
        const cacheKey = instance.methods[methodName].cacheCall(...args)
        const cache = drizzleState[contractName][methodName][cacheKey]
        return cache && cache.value
      })
    : drizzleState.value
}
