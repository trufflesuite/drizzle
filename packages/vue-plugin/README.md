# Vue Plugin

**Note**: This is still a work in progress

```
$ npm install @drizzle/vue-plugin
```

`@drizzle/vue-plugin` adapts [Drizzle](https://github.com/trufflesuite/drizzle) for Vue development.

## Getting Started

1. Configure drizzle by defining a module. The following example lets drizzle
   know the `web3` connection options, the contracts and `contract events` to
   monitor. It also specifies polling for account change every 15 seconds. This
   is useful to not be overwhelmed with polling messages while focusing on UI
   development.

   ```js
   // drizzleOptions.js

   import SimpleStorage from './contracts/SimpleStorage.json'
   import ComplexStorage from './contracts/ComplexStorage.json'
   import TutorialToken from './contracts/TutorialToken.json'

   const options = {
     web3: {
       block: false,
       fallback: {
         type: 'ws',
         url: 'ws://127.0.0.1:9545'
       }
     },

     // The contracts to monitor
     contracts: [SimpleStorage, ComplexStorage, TutorialToken],
     events: {
       // monitor SimpleStorage.StorageSet events
       SimpleStorage: ['StorageSet']
     },
     polls: {
       // check accounts ever 15 seconds
       accounts: 15000
     }
   }

   export default options
   ```

1. Register the `drizzleVuePlugin` with your Vuex Store and continue as normal
   with Vuex Store registration to main/root Vue instance.

   ```js
   // main.js

   import Vue from 'vue'
   import App from './App.vue'
   import Vuex from 'vuex'

   import drizzleVuePlugin from 'TODO: TBD name of package'
   import drizzleOptions from './drizzleOptions'

   // Register Vuex
   Vue.use(Vuex)

   // Create and configure your Vuex Store
   const store = new Vuex.Store({ state: {} })

   // Register the drizzleVuePlugin
   Vue.use(drizzleVuePlugin, { store, drizzleOptions })

   // Register the store instance with the Root Vue instance
   new Vue({
    store,
    render: h => h(App)
   ).$mount('#app')
   ```

1. The Vuex store will have access to 3 sub-branches of State that can be
   accessed with Vuex's mapGetters helper.

   - `account` - getAccount() - returns the current active web3 accounts.

   - `contracts` - getContractData({contract, method, toUtf8, toAscii}) -
     retrieve the smart contract state specified by `contract.method` and
     convert toUtf, or toAscii if specified.

   - `drizzle` - has 2 useful methods.
     1. isDrizzleInitialized() - true when drizzle is ready.
     1. drizzleInstance() - access the drizzleInstance, which may be necessary
        for interracting with drizzle directly, or even to access the web3
        provider.

1. You can now access 3 base components that you can use to build more
   sophisticated interfaces.

   - `drizzle-account` - render the current account and associated balance.
   - `drizzle-contract` - render a specific contract method.
   - `drizzle-contract-form` render an input for a specific contract method

1. For more information take a look at the [Test Vue
   Dapp](./test-app/README.md)

## Events

The plugin adds an event bus to the root Vue instance of your application, which allows you to handle events emitted by your smart contracts. Use them in the `mounted()` hook of any component:

```js
this.$drizzleEvents.$on('drizzle/contractEvent', payload => {
  // const { contractName, eventName, data } = payload
  // Do something with payload data
})
```

This listener will fire on any events you've defined in `drizzleOptions.js`.

## Component Props

```js
// <drizzle-account />

props: {
  units: {
    type: String,
    default: 'Wei'
  },
  precision: {
    type: Number,
    default: 2
  }
}


// <drizzle-contract />

props: {
  contractName: {
    type: String,
    required: true
  },
  method: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  toUtf8: {
    type: Boolean,
    default: false
  },
  toAscii: {
    type: Boolean,
    default: false
  },
  methodArgs: {
    type: Array,
    default: () => []
  }
}


// <drizzle-contract-form />

props: {
  contractName: {
    type: String,
    required: true
  },
  method: {
    type: String,
    required: true
  },
  methodArgs: {
    type: Array,
    default: () => []
  },

  placeholders: {
    type: Array,
    default: () => []
  }
}
```
