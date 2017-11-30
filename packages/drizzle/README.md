# drizzle

`npm install --save drizzle`

Tired of constantly coding contract calls after your state changes? Wish you had a one-liner for knowing when your dapp is ready to use? Ethereum developers have to account for extra considerations that traditional apps don't have to worry about. Drizzle abstracts away the boilerplate of creating a dapp front-end, allowing you to focus on what makes it unique. Drizzle handles instantiating web3 and contracts, fetching accounts, and keeping all of this data in sync with the blockchain.

**Using React?**: The easiest way to get started with Drizzle is to use our [official `drizzle-react` package](https://github.com/trufflesuite/drizzle-react)!

## Getting Started

**Note**: Since Drizzle uses web3 1.0 and web sockets, be sure your development environment can support these.

1. Import the provider.
   ```javascript
   import { Drizzle, generateStore } from 'drizzle'
   ```

1. Create an `options` object and pass in the desired contract artifacts for Drizzle to instantiate. Other options are available, see [the Options section](#options) below.
   ```javascript
   // Import contracts
   import SimpleStorage from './../build/contracts/SimpleStorage.json'
   import TutorialToken from './../build/contracts/TutorialToken.json'

   const options = {
     contracts: [
       SimpleStorage
     ]
   }

   const drizzleStore = generateStore(this.props.options)
   const drizzle = new Drizzle(this.props.options, drizzleStore)
   ```

1. Wrap your app with `DrizzleProvider` and pass in an `options` object. You may also pass in your own `store`. For more information on using your own `store`, see [Using an Existing store](#using-an-existing-store).
   ```javascript
   <DrizzleProvider options={options}>
     <App />
   </DrizzleProvider>
   ```

1. Get contract data. Calling the data function will first check the store and, if empty, will query the blockchain for the data and cache the response for future use. For more information on how this works, see [How Data Stays Fresh](#how-data-stays-fresh).

   **Note:** We have to check that Drizzle is initialized before fetching data. A one-liner such as below is fine for display a few pieces of data, but a better approach for larger dapps is to use a [loading component](#loading-component).
   ```javascript
   // For convenience
   constructor(props, context) {
     super(props)

     this.contracts = context.drizzle.contracts
   }

   // If Drizzle is initialized (and therefore web3, accounts and contracts), fetch data.
   var storedData = this.props.drizzleStatus.initialized ? this.contracts.SimpleStorage.methods.storedData.data() : 'Loading...'
   ```

   The contract instance has all of its standard web3 properties and methods. For example, sending a transaction is done as normal:
   ```javascript
   this.contracts.SimpleStorage.methods.set(this.state.storageAmount).send()
   ```

   ## Options

   ```javascript
   {
     contracts,
     web3: {
       fallback: {
         type
         url
       }
     }
   }
   ```
   ### `contracts` (array, required)
   An array of contract artifact files.

   ### `web3` (object)
   Options regarding `web3` instantiation.

   #### `fallback` (object)
   An object consisting of the type and url of a fallback web3 provider.

   `type` (string): The type of web3 fallback, currently `ws` (web socket) is the only possibility.

   `url` (string): The full websocket url. For example: `ws://127.0.0.1:8546`.

## Drizzle State

```javascript
{
  accounts,
  contracts: {
    contractName: {
      initialized,
      synced,
      callerFunctionName: {
        argsHash: {
          args,
          value
        }
      }
    }
  },
  drizzleStatus: {
    initialized
  }
  web3: {
    status
  }
}
```

### `accounts` (array)
An array of account addresses from `web3`.

### `contracts` (object)
A series of contract state objects, indexed by the contract name as declared in its ABI.

#### `contractName` (object)

`initialized` (boolean): `true` once contract is fully instantiated.
`synced` (boolean): `true` or `false` depending on

The contract's state also includes the state of each constant function called on the contract (`callerFunctionName`). The functions are indexed by name, and contain the outputs indexed by a hash of the arguments passed during the call (`argsHash`). If no arguments were passed, the hash is `0x0`. Drizzle reads from the store for you, so it should be unnecessary to touch this data cache manually.

`args` (array): Arguments passed to function call.
`value` (mixed): Value returned from function call.

### `drizzleStatus` (object)
An object containing information about the status of Drizzle.

`initialized` (boolean): `true` once:
*   `web3` is found or instantiated
*   Account addresses are stored in state
*   All contracts are instantiated

#### `initialized` (boolean)
`false` by default, becomes true once a `web3` instance is found and the accounts and contracts are fetched.

### `web3` (object)

`status` (string): `initializing`, `initialized` and `failed` are possible options. Useful for triggering warnings if `web3` fails to instantiate.

## How Data Stays Fresh

Once initialized, Drizzle instantiates `web3` and our desired contracts, then observes the chain by subscribing to new block headers.
![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)

Drizzle keeps track of contract calls so it knows what to synchronize.
![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)

When a new block header comes in, Drizzle checks that the block isn't pending, then goes through the transactions looking to see if any of them touched our contracts.
![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)

If they did, we replay the calls already in the store to refresh any potentially altered data. If they didn't we continue with the store data.
![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)
