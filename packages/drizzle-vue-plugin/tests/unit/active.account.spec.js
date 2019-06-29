import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Accounts from '@/components/Accounts'
import accountsM from '@/store/modules/accounts'
import contractsM from '@/store/modules/contracts'
import drizzleM from '@/store/modules/drizzle'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Accounts.vue', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({})
    store.registerModule('accounts', accountsM)
    store.registerModule('contracts', contractsM)
    store.registerModule('drizzle', drizzleM)
    store.state.drizzle.initialized = true
    store.state.accounts.activeAccount =
      '0x048ffCA67A523a4B51EA7a251168FD86e623f243'
  })

  it('Displays active account if Drizzle is initialized', () => {
    const wrapper = shallowMount(Accounts, {
      localVue,
      store,
      computed: {
        convertedBalance: () => '100'
      }
    })
    const div = wrapper.find('div')
    expect(div.text()).toContain(store.getters['accounts/activeAccount'])
  })
})
