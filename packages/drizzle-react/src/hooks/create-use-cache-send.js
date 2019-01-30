import { useDrizzleState } from '.'
import { useState } from 'react'

export default drizzle => (contractName, methodName) => {
  const { transactionStack, transactions } = useDrizzleState(drizzleState => ({
    transactionStack: drizzleState.transactionStack,
    transactions: drizzleState.transactions
  }))
  const [stackIDs, setStackIDs] = useState([])
  const TXObjects = stackIDs.map(
    stackID => transactions[transactionStack[stackID] || 'undefined']
  )
  const contractMethod = drizzle.contracts[contractName].methods[methodName]
  return {
    TXObjects,
    send: (...args) =>
      setStackIDs(stackIDs => [...stackIDs, contractMethod.cacheSend(...args)]),
    status:
      TXObjects[TXObjects.length - 1] && TXObjects[TXObjects.length - 1].status
  }
}
