import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'
import PropTypes from 'prop-types'

const Context = createContext()
export const useDrizzle = () => useContext(Context)

export const DrizzleProvider = ({ children, drizzle }) => {
  const [drizzleState, setDrizzleState] = useState({
    accounts: {},
    drizzleStatus: { initialized: false },
    web3: { status: 'initializing' }
  })
  const cacheCall = useCallback(
    (contractName, methodName, ...args) => {
      const cacheKey = drizzle.contracts[contractName].methods[
        methodName
      ].cacheCall(...args)
      return (
        drizzleState.contracts[contractName][methodName][cacheKey] &&
        drizzleState.contracts[contractName][methodName][cacheKey].value
      )
    },
    [drizzle, drizzleState]
  )
  const useCacheSend = useCallback(
    (contractName, methodName) => {
      const [stackIDs, setStackIDs] = useState([])
      return {
        send: (...args) =>
          setStackIDs(stackIDs => [
            ...stackIDs,
            drizzle.contracts[contractName].methods[methodName].cacheSend(
              ...args
            )
          ]),
        transactions: stackIDs.map(
          stackID =>
            drizzleState.transactions[drizzleState.transactionStack[stackID]]
        )
      }
    },
    [drizzle, drizzleState]
  )
  useEffect(
    () =>
      drizzle.store.subscribe(() => setDrizzleState(drizzle.store.getState())),
    [drizzle]
  )
  return (
    <Context.Provider
      value={useMemo(
        () => ({
          cacheCall,
          drizzle,
          drizzleState,
          useCacheSend
        }),
        [cacheCall, drizzle, drizzleState, useCacheSend]
      )}
    >
      {children}
    </Context.Provider>
  )
}

DrizzleProvider.propTypes = {
  children: PropTypes.node.isRequired,
  drizzle: PropTypes.shape({}).isRequired
}
