import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Toasted from 'vue-toasted'

// Todo: Update this when publishing
// import drizzleVuePlugin from '@drizzle/vue-plugin'
//
import drizzleVuePlugin from '../../../src/DrizzleVuePlugin'
import drizzleOptions from './drizzleOptions'

import { ToastEvents } from '../../../src/components/events/ToastEvents.js'

Vue.use(Vuex)
const store = new Vuex.Store({ state: {} })

Vue.use(drizzleVuePlugin, { store, drizzleOptions })
Vue.use(Toasted)

Vue.config.productionTip = false

const vue = new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

// See docs: https://github.com/shakee93/vue-toasted#options
const subOptions = { duration: 3000 } // 3 seconds

const contractEventHandler = ({ contractName, eventName, data }) => {
  console.group('contractEventHandler')
  console.log('contractName', contractName)
  console.log('eventName', eventName)
  console.log('data', data)
  console.groupEnd()

  const { _message, _value } = data
  const display = `${contractName}(${eventName}): ${_message}(${_value})`
  vue.$toasted.show(display, subOptions)
}

ToastEvents.$on('contractAction', payload => {
  contractEventHandler(payload)
})

// vue.$subscribeToContractEvents(contractEventHandler)
