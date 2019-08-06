import accountsM from './store/modules/accounts'
import contractsM from './store/modules/contracts'
import drizzleM from './store/modules/drizzle'

import Accounts from './components/Accounts'
import Contract from './components/Contract'
import ContractForm from './components/ContractForm'
import { DrizzleEvents } from './components/DrizzleEvents'

import { Drizzle, EventActions, generateStore } from '@drizzle/store'
import drizzleAdapterService from './store/DrizzleAdapterService'

// eslint-disable-next-line
const eventsMW = x => next => action => {
  if (action.type === EventActions.EVENT_FIRED) {
    const event = {
      contractName: action.name,
      eventName: action.event.event,
      data: action.event.returnValues
    }

    // Trigger event and send payload
    DrizzleEvents.$emit('drizzle/contractEvent', event)
  }

  return next(action)
}

const DrizzleVuePlugin = {
  install(Vue, { store, drizzleOptions }) {
    if (!store) {
      throw new Error('Please provide a vuex store.')
    }

    if (!drizzleOptions) {
      throw new Error('Please provide drizzle configuration (drizzleOptions).')
    }

    // TODO: The inevetable name conflict will happen,
    //       come up with a better drizzle specific name
    //
    store.registerModule('accounts', accountsM)
    store.registerModule('contracts', contractsM)
    store.registerModule('drizzle', drizzleM)

    const drizzleStore = generateStore({
      drizzleOptions,
      appMiddlewares: [eventsMW]
    })

    const drizzleInstance = new Drizzle(drizzleOptions, drizzleStore)

    drizzleAdapterService(drizzleInstance)(store)

    // There's a known race condition issue with vue-devtools that doesn't
    // record the first few dispatched actions to vuex state. Rest assured
    // This action is processed by the vuex state manager.
    //
    // Issue: https://github.com/vuejs/vue-devtools/issues/408
    //
    store.dispatch('drizzle/STARTUP', drizzleInstance)

    // Register components
    Vue.component('drizzle-account', Accounts)
    Vue.component('drizzle-contract', Contract)
    Vue.component('drizzle-contract-form', ContractForm)

    // Add event bus to vue instance
    Vue.prototype.$drizzleEvents = DrizzleEvents
  }
}

export default DrizzleVuePlugin
