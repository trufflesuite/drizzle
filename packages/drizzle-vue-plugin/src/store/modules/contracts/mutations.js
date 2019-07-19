export const UPDATE_CONTRACT = (state, { contractName, contract }) =>
  (state.instances = { ...state.instances, [contractName]: contract })

export const SET_CACHEKEY = (state, { contractName, method, cacheKey }) => {
  const pair = { [method]: cacheKey }
  if (!state.cacheKeys[contractName]) {
    state.cacheKeys = { ...state.cacheKeys, [contractName]: { ...pair } }
  } else {
    state.cacheKeys[contractName] = {
      ...state.cacheKeys[contractName],
      ...pair
    }
  }
}
