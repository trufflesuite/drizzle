import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Accounts from '@/components/Accounts'
import accountsM from '@/store/modules/accounts'
import drizzleM from '@/store/modules/drizzle'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Accounts.vue', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({})
    store.registerModule('accounts', accountsM)
    store.registerModule('drizzle', drizzleM)
    store.state.drizzle.initialized = false
  })

  it(`displays 'Loading...' if Drizzle is not initialized`, () => {
    const wrapper = shallowMount(Accounts, {
      localVue,
      store
    })
    const div = wrapper.find('div')
    expect(div.text()).toContain('Loading...')
  })
})
