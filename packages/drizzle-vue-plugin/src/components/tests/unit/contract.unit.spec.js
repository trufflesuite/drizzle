import { shallowMount, createLocalVue } from '@vue/test-utils'
import Contract from '@/components/Contract'
import ContractArrayData from '@/components/presentational/ArrayData'
import ContractObjectData from '@/components/presentational/ObjectData'
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Contract.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      'drizzle/REGISTER_CONTRACT': jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })

  it('mounts ContractArrayData when appropriate', () => {
    const wrapper = shallowMount(Contract, {
      localVue,
      store,
      computed: {
        contractData: () => {
          return {
            component: 'ContractArrayData'
          }
        }
      },
      propsData: {
        contractName: 'SimpleStorage',
        method: 'getData',
        label: 'Label'
      }
    })
    expect(wrapper.contains(ContractArrayData)).toBe(true)
  })

  it('mounts ContractObjectData when appropriate', () => {
    const wrapper = shallowMount(Contract, {
      localVue,
      store,
      computed: {
        contractData: () => {
          return {
            component: 'ContractObjectData'
          }
        }
      },
      propsData: {
        contractName: 'SimpleStorage',
        method: 'getData',
        label: 'Label'
      }
    })
    expect(wrapper.contains(ContractObjectData)).toBe(true)
  })
})
