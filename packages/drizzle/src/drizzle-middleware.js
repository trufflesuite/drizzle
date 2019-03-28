export const drizzleMiddleware = drizzleInstance => _ => next => action => {
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

  return next(action)
}

const initializedMiddleware = drizzleMiddleware(undefined)
export default initializedMiddleware
