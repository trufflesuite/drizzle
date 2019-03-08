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

    // TODO: More drizzle Specific component names
    // drizzle-accounts, drizzle-contracts, drizzle-contract-form ?
    // What's idomatic in Vue?
    //
    Vue.component('Accounts', Accounts)
    Vue.component('Contract', Contract)
    Vue.component('ContractForm', ContractForm)
  }
}

export default DrizzleVuePlugin
