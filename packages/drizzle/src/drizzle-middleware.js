export const drizzleMiddleware = drizzleInstance => store => next => action => {
  const { type } = action

  if (type === 'DRIZZLE_INITIALIZING') {
    drizzleInstance = action.drizzle
  }

  if (type === 'ACCOUNTS_FETCHED' && drizzleInstance && drizzleInstance.contractList.length) {
    const newAccount = action.accounts[0]
    const oldAccount = drizzleInstance.contractList[0].options.from
    if (oldAccount !== newAccount) {
      drizzleInstance.contractList.forEach(contract => {
        contract.options.from = newAccount
      })
    }
  }

  if (type === 'ADD_CONTRACT' && drizzleInstance) {
    try {
      const { contractConfig, events } = action
      drizzleInstance.addContract(contractConfig, events)
    } catch (error) {
      console.error('Attempt to add a duplicate contract.\n', error)

      // Notify user via
      const notificationAction = {
        type: 'ERROR_ADD_CONTRACT',
        error,
        attemptedAction: action
      }
      store.dispatch(notificationAction)

      // Don't propogate current action
      return
    }
  }
  return next(action)
}

const initializedMiddleware = drizzleMiddleware(undefined)
export default initializedMiddleware
