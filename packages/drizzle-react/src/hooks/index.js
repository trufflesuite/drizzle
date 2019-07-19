import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import PropTypes from 'prop-types'
import createUseCacheCall from './create-use-cache-call'
import createUseCacheEvents from './create-use-cache-events'
import createUseCacheSend from './create-use-cache-send'
import debounce from 'debounce'
import shallowequal from 'shallowequal'

const Context = createContext()
export const useDrizzle = () => useContext(Context)

// Redux-like state selector.
// `mapState` should be a function that takes the state of the drizzle store and returns only the part you need.
// The component will only rerender if this part changes.
// `args` is just an escape hatch to make the state update immediately when certain arguments change. `useCacheCall` uses it.
// It's useful when your `mapState` function depends on certain arguments and you don't want to wait for a `drizzle` store update when they change.
export const useDrizzleState = (mapState, args) => {
  const { drizzle } = useDrizzle()

  // We keep a ref to `mapState` and always update it to avoid having a closure over it in the subscription that would make changes to it not have effect.
  const mapStateRef = useRef(mapState)
  mapStateRef.current = mapState

  // This is the escape hatch mentioned above. We keep a ref to `args` and whenever they change, we immediately update the state just like in the subscription.
  // This won't have any effect if `args` is undefined.
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
  useEffect(
    () => {
      // Debounce udpates, because sometimes the store will fire too much when there are a lot of `cacheCall`s and the cache is empty.
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
    },
    [drizzle.store]
  )
  return stateRef.current
}

export const DrizzleProvider = ({ children, drizzle }) => {
  const useCacheCall = useMemo(() => createUseCacheCall(drizzle), [drizzle])
  const useCacheSend = useMemo(() => createUseCacheSend(drizzle), [drizzle])
  const useCacheEvents = useMemo(() => createUseCacheEvents(drizzle), [drizzle])
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

export * from './components'
