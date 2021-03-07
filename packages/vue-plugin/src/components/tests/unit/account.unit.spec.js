import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Accounts from '@/components/Accounts'
import accountsM from '@/store/modules/accounts'
import drizzleM from '@/store/modules/drizzle'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Accounts.vue', () => {
  let activeAccount, store, computed

  beforeEach(() => {
    // reset active account
    activeAccount = '0x048ffCA67A523a4B51EA7a251168FD86e623f243'

    // setup mock computed values
    computed = {
      activeAccountAriaLabel: () => `Ether Address: ${activeAccount}`,
      convertedBalance: () => '100',
      convertedBalanceAriaLabel: () => 'Ether Balance: 100'
    }

    // setup store
    store = new Vuex.Store({})
    store.registerModule('accounts', accountsM)
    store.registerModule('drizzle', drizzleM)
  })

  it('displays active account if Drizzle is initialized', () => {
    const wrapper = shallowMount(Accounts, {
      localVue,
      store,
      computed
    })
    store.state.drizzle.initialized = true
    store.state.accounts.activeAccount = activeAccount
    const div = wrapper.find('div')
    expect(div.text()).toContain(store.getters['accounts/activeAccount'])
    expect(div.html()).toContain(
      'aria-label="Ether Address: 0x048ffCA67A523a4B51EA7a251168FD86e623f243"'
    )
    expect(div.html()).toContain('aria-label="Ether Balance: 100"')
  })

  it(`displays 'Loading...' if Drizzle is not initialized`, () => {
    const wrapper = shallowMount(Accounts, {
      localVue,
      store,
      computed
    })
    store.state.drizzle.initialized = false
    const div = wrapper.find('div')
    expect(div.html()).toEqual(
      '<div role="alert" aria-live="polite" aria-busy="true">Loading...</div>'
    )
  })
})
