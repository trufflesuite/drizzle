import { useEffect, useMemo, useState } from 'react'

export default drizzle => (contractName, eventName, eventOptions) => {
  const [events, setEvents] = useState()
  const drizzleContract = drizzle.contracts[contractName]
  const contract = useMemo(
    () =>
      new drizzle.web3.eth.Contract(
        drizzleContract.abi,
        drizzleContract.address
      ),
    [contractName]
  )
  useEffect(
    () => {
      let mounted = true
      contract
        .getPastEvents(eventName, eventOptions)
        .then(pastEvents => mounted && setEvents(pastEvents))
      const listener = drizzleContract.events[eventName]({
        ...eventOptions,
        fromBlock: 'latest'
      }).on('data', event => setEvents(events => [...events, event]))
      return () => {
        listener.unsubscribe()
        mounted = false
      }
    },
    [contractName, eventName, eventOptions]
  )
  return events
}
