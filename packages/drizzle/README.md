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

1. Get contract data. Calling the `cacheCall()` function on a contract will execute the desired call and return a corresponding key so the data can be retrieved from the store. When a new block is received, Drizzle will refresh the store automatically _if_ any transactions in the block touched our contract. For more information on how this works, see [How Data Stays Fresh](#how-data-stays-fresh).

   **Note:** We have to check that Drizzle is initialized before fetching data. A simple if statement such as below is fine for display a few pieces of data, but a better approach for larger dapps is to use a [loading component](https://github.com/trufflesuite/drizzle-react#recipe-loading-component).
   ```javascript
   // If Drizzle is initialized (and therefore web3, accounts and contracts), continue.
   if (drizzle.store.getState().drizzleStatus.initialized) {
    // Declare this call to be cached and synchronized. We'll receive the store key for recall.
    const dataKey = drizzle.contracts.SimpleStorage.methods.storedData.cacheCall()

    // Use the dataKey to display data from the store.
    return drizzle.store.getState().contracts.SimpleStorage.methods.storedData[dataKey].value
   }

   // If Drizzle isn't initialized, display some loading indication.
   return 'Loading...'
   ```

   The contract instance has all of its standard web3 properties and methods. For example, you could still call as normal if you don't want something in the store:
   ```javascript
   drizzle.contracts.SimpleStorage.methods.storedData().call()
   ```

1. Send a contract transaction. Calling the `cacheSend()` function on a contract will send the desired transaction and return a corresponding transaction hash so the status can be retrieved from the store. Drizzle will update the transaction's state in the store (pending, success, error) and store the transaction receipt. For more information on how this works, see [How Data Stays Fresh](#how-data-stays-fresh).

   **Note:** We have to check that Drizzle is initialized before fetching data. A simple if statement such as below is fine for display a few pieces of data, but a better approach for larger dapps is to use a [loading component](https://github.com/trufflesuite/drizzle-react#recipe-loading-component).
   ```javascript
   // If Drizzle is initialized (and therefore web3, accounts and contracts), continue.
   if (drizzle.store.getState().drizzleStatus.initialized) {
    // Declare this call to be cached and synchronized. We'll receive the store key for recall.
    const txHash = drizzle.contracts.SimpleStorage.methods.set.cacheSend(2, {from: '0x3f...'})

    // Use the dataKey to display the transaction status.
    return drizzle.store.getState().transactions[txHash].status

    // You can also access the receipt, if available.
    // drizzle.store.getState().transactions[txHash].receipt
   }

   // If Drizzle isn't initialized, display some loading indication.
   return 'Loading...'
   ```

   The contract instance has all of its standard web3 properties and methods. For example, you could still send as normal if you don't want a tx in the store:
   ```javascript
   drizzle.contracts.SimpleStorage.methods.set(2).send({from: '0x3f...'})
   ```

## Options

```javascript
{
  contracts,
  events: {
    contractName: [
      eventName
    ]
  },
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

### `events` (object)
An object consisting of contract names along with arrays of the event names we'd like to listen for and sync with the store.

### `web3` (object)
Options regarding `web3` instantiation.

#### `fallback` (object)
An object consisting of the type and url of a fallback web3 provider. This is used if no injected provider, such as MetaMask or Mist, is detected.

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

1. Once initialized, Drizzle instantiates `web3` and our desired contracts, then observes the chain by subscribing to new block headers.

   ![Drizzle Sync Step 1](https://github.com/trufflesuite/drizzle/blob/master/readme/drizzle-sync1.png?raw=true)

1. Drizzle keeps track of contract calls so it knows what to synchronize.

   ![Drizzle Sync Step 2](https://github.com/trufflesuite/drizzle/blob/master/readme/drizzle-sync2.png?raw=true)

1. When a new block header comes in, Drizzle checks that the block isn't pending, then goes through the transactions looking to see if any of them touched our contracts.

   ![Drizzle Sync Step 3](https://github.com/trufflesuite/drizzle/blob/master/readme/drizzle-sync3.png?raw=true)

1. If they did, we replay the calls already in the store to refresh any potentially altered data. If they didn't we continue with the store data.

   ![Drizzle Sync Step 4](https://github.com/trufflesuite/drizzle/blob/master/readme/drizzle-sync4.png?raw=true)
