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
  const useCacheEvents = useCallback(
    (contractName, eventName, eventOptions) => {
      const [events, setEvents] = useState()
      const contract = useMemo(
        () =>
          new drizzle.web3.eth.Contract(
            drizzle.contracts[contractName].abi,
            drizzle.contracts[contractName].address
          ),
        [contractName]
      )
      useEffect(() => {
        contract
          .getPastEvents(eventName, eventOptions)
          .then(pastEvents => setEvents(pastEvents))
        return drizzle.contracts[contractName].events[eventName]({
          ...eventOptions,
          fromBlock: 'latest'
        }).on('data', event => setEvents(events => [...events, event]))
          .unsubscribe
      }, [contractName, eventName, eventOptions])
      return events
    },
    [drizzle]
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
          useCacheEvents,
          useCacheSend
        }),
        [cacheCall, drizzle, drizzleState, useCacheEvents, useCacheSend]
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
