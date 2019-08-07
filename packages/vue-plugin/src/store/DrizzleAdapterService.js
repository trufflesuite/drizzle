/* eslint no-console: 0 */
import { Observable } from 'rxjs'
import { map, distinctUntilChanged, filter } from 'rxjs/operators'
import { isEqual } from 'lodash'

const observableFromReduxStore = reduxStore =>
  Observable.create(subscriber =>
    reduxStore.subscribe(() => subscriber.next(reduxStore.getState()))
  )

const subscribe = (obs$, handler) =>
  obs$.subscribe({
    next: message => handler(message),
    error: err => console.log(`Oops... ${err}`),
    complete: () => console.log(`Complete!`)
  })

const Log = (heading, msg) => {
  console.groupCollapsed(heading)
  console.log(JSON.stringify(msg, null, 2))
  console.groupEnd()
}

const drizzleHandler = store => {
  let drizzleInitialized = false
  return message => {
    Log('Redux', message)
    if (!drizzleInitialized) {
      if (message.drizzleStatus.initialized) {
        drizzleInitialized = true
        store.dispatch('drizzle/INITIALIZE')

        // handle cacheKey registration after drizzle is initialized
        // The contracts that need cacheKey resolved were queued to
        // the store at component creation time, which occurs before
        // drizzle initialization.
        //
        store.dispatch('drizzle/PROCESS_REGISTRATION_Q')
      }
    }
  }
}

const contractsHandler = store => message => {
  // Log('Contract', message)
  for (let contractName in message) {
    store.dispatch('contracts/UPDATE_CONTRACT', {
      contractName,
      contract: message[contractName]
    })
  }
}

const accountsHandler = store => message => {
  Log('Accounts', message)
  const activeAccount = message.accounts[0]
  const accountBalances = message.accountBalances
  const payload = { activeAccount, accountBalances }
  Log('Balance payload', payload)
  store.dispatch('accounts/SET_ACCOUNTS', payload)
}

const createDrizzlePluginFromObserver = drizzleInstance => store => {
  const drizzleObserver$ = observableFromReduxStore(drizzleInstance.store).pipe(
    map(x => JSON.stringify(x)),
    map(x => JSON.parse(x)),
    distinctUntilChanged(isEqual)
  )

  const contractsObserver$ = drizzleObserver$.pipe(
    filter(x => x.drizzleStatus.initialized),
    map(x => x.contracts),
    distinctUntilChanged(isEqual)
  )

  const accountsObserver$ = drizzleObserver$.pipe(
    filter(x => x.drizzleStatus.initialized),
    map(x => ({ accounts: x.accounts, accountBalances: x.accountBalances })),
    distinctUntilChanged(isEqual)
  )

  const drizzleSub = subscribe(drizzleObserver$, drizzleHandler(store))
  const contractSub = subscribe(contractsObserver$, contractsHandler(store))
  const accountsSub = subscribe(accountsObserver$, accountsHandler(store))

  return {
    subscriptions: [drizzleSub, contractSub, accountsSub]
  }
}

export default createDrizzlePluginFromObserver
