import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import PropTypes from 'prop-types'
import debounce from 'debounce'
import shallowequal from 'shallowequal'

const Context = createContext()
export const useDrizzle = () => useContext(Context)
export const useDrizzleState = (mapState, args) => {
  const { drizzle } = useDrizzle()
  const mapStateRef = useRef(mapState)
  mapStateRef.current = mapState
  const argsRef = useRef(args)
  const [state, setState] = useState(
    mapStateRef.current(drizzle.store.getState())
  )
  const stateRef = useRef(state)
  if (!shallowequal(argsRef.current, args)) {
    argsRef.current = args
    const newState = mapStateRef.current(drizzle.store.getState())
    if (!shallowequal(stateRef.current, newState)) {
      stateRef.current = newState
      setState(newState)
    }
  }
  useEffect(() => {
    const debouncedHandler = debounce(() => {
      const newState = mapStateRef.current(drizzle.store.getState())
      if (!shallowequal(stateRef.current, newState)) {
        stateRef.current = newState
        setState(newState)
      }
    })
    const unsubscribe = drizzle.store.subscribe(debouncedHandler)
    return () => {
      unsubscribe()
      debouncedHandler.clear()
    }
  }, [drizzle.store])
  return stateRef.current
}

export const DrizzleProvider = ({ children, drizzle }) => {
  const useCacheCall = useCallback(
    (contractNameOrContractNames, methodNameOrFunction, ...args) => {
      const isFunction = typeof methodNameOrFunction === 'function'
      const drizzleState = useDrizzleState(drizzleState => {
        if (isFunction)
          return contractNameOrContractNames.reduce((acc, contractName) => {
            acc[contractName] = drizzleState.contracts[contractName]
            return acc
          }, {})
        else {
          const cacheKey = drizzle.contracts[
            contractNameOrContractNames
          ].methods[methodNameOrFunction].cacheCall(...args)
          return {
            value:
              drizzleState.contracts[contractNameOrContractNames][
                methodNameOrFunction
              ][cacheKey] &&
              drizzleState.contracts[contractNameOrContractNames][
                methodNameOrFunction
              ][cacheKey].value
          }
        }
      }, args)
      return isFunction
        ? methodNameOrFunction((contractName, methodName, ...args) => {
            const cacheKey = drizzle.contracts[contractName].methods[
              methodName
            ].cacheCall(...args)
            return (
              drizzleState[contractName][methodName][cacheKey] &&
              drizzleState[contractName][methodName][cacheKey].value
            )
          })
        : drizzleState.value
    },
    [drizzle.contracts]
  )
  const useCacheSend = useCallback(
    (contractName, methodName) => {
      const drizzleState = useDrizzleState(drizzleState => ({
        transactionStack: drizzleState.transactionStack,
        transactions: drizzleState.transactions
      }))
      const [stackIDs, setStackIDs] = useState([])
      const transactions = stackIDs.map(
        stackID =>
          drizzleState.transactions[
            drizzleState.transactionStack[stackID] || 'undefined'
          ]
      )
      return {
        send: (...args) =>
          setStackIDs(stackIDs => [
            ...stackIDs,
            drizzle.contracts[contractName].methods[methodName].cacheSend(
              ...args
            )
          ]),
        status:
          transactions[transactions.length - 1] &&
          transactions[transactions.length - 1].status,
        transactions
      }
    },
    [drizzle.contracts]
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
        let mounted = true
        contract
          .getPastEvents(eventName, eventOptions)
          .then(pastEvents => mounted && setEvents(pastEvents))
        const listener = drizzle.contracts[contractName].events[eventName]({
          ...eventOptions,
          fromBlock: 'latest'
        }).on('data', event => setEvents(events => [...events, event]))
        return () => {
          listener.unsubscribe()
          mounted = false
        }
      }, [contractName, eventName, eventOptions])
      return events
    },
    [drizzle.web3, drizzle.contracts]
  )
  return (
    <Context.Provider
      value={useMemo(
        () => ({
          drizzle,
          useCacheCall,
          useCacheEvents,
          useCacheSend
        }),
        [drizzle, useCacheCall, useCacheEvents, useCacheSend]
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

export const Initializer = ({
  children,
  error,
  loadingContractsAndAccounts,
  loadingWeb3
}) => {
  const drizzleState = useDrizzleState(drizzleState => ({
    drizzleStatusInitialized: drizzleState.drizzleStatus.initialized,
    web3Status: drizzleState.web3.status
  }))
  if (drizzleState.drizzleStatusInitialized) return children
  if (drizzleState.web3Status === 'initialized')
    return loadingContractsAndAccounts
  if (drizzleState.web3Status === 'failed') return error
  return loadingWeb3
}

Initializer.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.node,
  loadingContractsAndAccounts: PropTypes.node,
  loadingWeb3: PropTypes.node
}

Initializer.defaultProps = {
  error: 'Error.',
  loadingContractsAndAccounts: 'Loading contracts and accounts.',
  loadingWeb3: 'Loading web3.'
}
