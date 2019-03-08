import accountM from './store/modules/account'
import contractsM from './store/modules/contracts'
import drizzleM from './store/modules/drizzle'

import Accounts from './components/Accounts'
import Contract from './components/Contract'
import ContractForm from './components/ContractForm'

import { Drizzle } from 'drizzle'
import drizzleAdapterService from './store/DrizzleAdapterService'

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
    store.registerModule('account', accountM)
    store.registerModule('contracts', contractsM)
    store.registerModule('drizzle', drizzleM)

    const drizzleInstance = new Drizzle(drizzleOptions)
    drizzleAdapterService(drizzleInstance)(store)

    // There's a known race condition issue with vue-devtools that doesn't
    // record the first few dispatched actions to vuex state. Rest assured
    // This action is processed by the vuex state manager.
    //
    // Issue: https://github.com/vuejs/vue-devtools/issues/408
    //
    store.dispatch('drizzle/STARTUP', drizzleInstance)

    // TODO: More drizzle Specific component names
    // drizzle-accounts, drizzle-contracts, drizzle-contract-form ?
    // What's idomatic in Vue?
    //
    Vue.component('drizzle-account', Accounts)
    Vue.component('drizzle-contract', Contract)
    Vue.component('drizzle-contract-form', ContractForm)
  }
}

export default DrizzleVuePlugin
