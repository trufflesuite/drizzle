const middleware = drizzleInstance => _ => next => action => {
  const { type } = action

  if (type === 'DRIZZLE_INITIALIZING') {
    drizzleInstance = action.drizzle
    console.log('MW', action, drizzleInstance)
  }
  if (
    type === 'ACCOUNTS_FETCHED' &&
    drizzleInstance &&
    drizzleInstance.contractList.length
  ) {
    // iff changed...
    // update send value for all drizzle contracts

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

export default middleware(undefined)
