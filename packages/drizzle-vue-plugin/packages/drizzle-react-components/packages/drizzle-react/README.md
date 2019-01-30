# drizzle-react

Requires React 0.14+
`npm install --save drizzle-react`

`drizzle-react` is the official way to integrate Drizzle with your React dapp.

Tired of constantly coding contract calls after your state changes? Wish you had a one-liner for knowing when your dapp is ready to use? Ethereum developers have to account for extra considerations that traditional apps don't have to worry about. Drizzle abstracts away the boilerplate of creating a dapp front-end, allowing you to focus on what makes it unique. Drizzle handles instantiating web3 and contracts, fetching accounts, and keeping all of this data in sync with the blockchain.

Check out the [Drizzle Truffle Box](https://github.com/truffle-box/drizzle-box) for a complete example, or continue reading to create your own setup.

## Getting Started

**Note**: Since Drizzle uses web3 1.0 and web sockets, be sure your development environment can support these.

### Using the React Context API (For React v16.3+)

If you are using React v16.3 and up, you have access to the new [React Context](https://reactjs.org/docs/context.html) API which makes use of the [render props](https://reactjs.org/docs/render-props.html) pattern.

1. Setup Drizzle and then pass the `drizzle` instance into the context provider:

    ```js
    // 1. Import drizzle, drizzle-react, and your contract artifacts.
    import { Drizzle, generateStore } from "drizzle";
    import { DrizzleContext } from "drizzle-react";
    import SimpleStorage from "./contracts/SimpleStorage.json";

    // 2. Setup the drizzle instance.
    const options = { contracts: [SimpleStorage] };
    const drizzleStore = generateStore(options);
    const drizzle = new Drizzle(options, drizzleStore);

    // ...

    // 3. Pass the drizzle instance into the provider and wrap it
    //    around your app.
    <DrizzleContext.Provider drizzle={drizzle}>
      <App />
    </DrizzleContext.Provider>
    ```

2. Then, in any child component of the app, we can access the `drizzle` instance as well as the `drizzleState`.

    In our render tree, we use the `DrizzleContext.Consumer` component to get access to Drizzle. This component will call its function child with the following object:

    ```js
    const drizzleContext = {
      drizzle,       // this is the drizzle instance (use this to call `cacheCall` and `cacheSend`)
      drizzleState,  // this is the entire Drizzle state, it will always be up-to-date
      initialized    // this boolean value will indicate when Drizzle is ready
    }
    ```

    Usage example:

    ```js
    import React from "react";
    import { DrizzleContext } from "drizzle-react";

    export default () => (
      <DrizzleContext.Consumer>
        {drizzleContext => {
          const { drizzle, drizzleState, initialized } = drizzleContext;
      
          if (!initialized) {
            return "Loading...";
          }

          return (
            <MyDrizzleApp drizzle={drizzle} drizzleState={drizzleState} />
          );
        }}
      </DrizzleContext.Consumer>
    )
    ```

3. Inside your child component (`MyDrizzleApp` in the above example), use `drizzle` and `drizzleState` from props.

    This example shows reading a value from the `storedData` public getter method and then rendering it inside a child component `<DisplayValue />` (code not shown).

    ```js
    import React from "react";
    import DisplayValue from "./DisplayValue";

    export default class MyDrizzleApp extends React.Component {
      state = { dataKey: null };

      componentDidMount() {
        const { drizzle } = this.props;
        const contract = drizzle.contracts.SimpleStorage;

        // get and save the key for the variable we are interested in
        const dataKey = contract.methods["storedData"].cacheCall();
        this.setState({ dataKey });
      }

      render() {
        const { SimpleStorage } = this.props.drizzleState.contracts;
        const storedData = SimpleStorage.storedData[this.state.dataKey];
        return <DisplayValue value={storedData && storedData.value} />;
      }
    }
    ```

#### Preventing Unnecessary Re-renders (Optional)

For performance reasons, you may want to prevent unnecessary re-renders. To do this, you can implement a check in the child components.

In the above example, the `<DisplayValue />` component should check to see if the new props being passed in are the same as the old props. If so, then do not trigger a re-render. You have two options:

1. If the value being passed in does not require a deep comparison (e.g. a simple string or number), then you can simply extend your component from [React.PureComponent](https://reactjs.org/docs/react-api.html#reactpurecomponent).

2. Alternatively, you can use the [`shouldComponentUpdate()`](https://reactjs.org/docs/react-component.html#shouldcomponentupdate) API.

### Using the Legacy API (for React < v16.3)

We retain the old API for backwards compatibility, but please note that React itself has deprecated the legacy React Context API since v16.3 and it will not be supported in v17. When possible, please use the new React Context API.

1. Import the provider.
   ```javascript
   import { DrizzleProvider } from 'drizzle-react'
   ```

1. Create an `options` object and pass in the desired contract artifacts for Drizzle to instantiate. Other options are available, see [the Options section of the Drizzle docs](https://github.com/trufflesuite/drizzle#options) below.
   ```javascript
   // Import contracts
   import SimpleStorage from './../build/contracts/SimpleStorage.json'
   import TutorialToken from './../build/contracts/TutorialToken.json'

   const options = {
     contracts: [
       SimpleStorage,
       TutorialToken
     ]
   }
   ```

1. Wrap your app with `DrizzleProvider` and pass in an `options` object. You can also pass in your existing `store`. [See our documentation for more information on using an existing Redux store](http://truffleframework.com/docs/drizzle/using-an-existing-redux-store).
   ```javascript
   <DrizzleProvider options={options}>
     <App />
   </DrizzleProvider>
   ```

1. Wrap your components using the `drizzleConnect` function. It has the same API as the `connect()` function in `react-redux`. [See their docs here](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options).
   ```javascript
   import { drizzleConnect } from 'drizzle-react'

   const mapStateToProps = state => {
     return {
       drizzleStatus: state.drizzleStatus,
       SimpleStorage: state.contracts.SimpleStorage
     }
   }

   const HomeContainer = drizzleConnect(Home, mapStateToProps);
   ```
   See [Drizzle State in the Drizzle docs](https://github.com/trufflesuite/drizzle#drizzle-state) for the entire state tree.

1. Get contract data by accessing the contracts via `context`. Calling the `data()` function on a contract will first check the store for a cached result. If empty, Drizzle will query the blockchain and cache the response for future use. For more information on how this works, see [How Data Stays Fresh in the Drizzle docs](https://github.com/trufflesuite/drizzle#how-data-stays-fresh).

   **Note:** We have to check that Drizzle is initialized before fetching data. A one-liner such as below is fine for display a few pieces of data, but a better approach for larger dapps is to use a [loading component](#recipe-loading-component).
   ```javascript
   // For convenience
   constructor(props, context) {
     super(props)

     this.contracts = context.drizzle.contracts
   }

   // If Drizzle is initialized (and therefore web3, accounts and contracts), fetch data.
   // This will update automatically when the contract state is altered.
   var storedData = this.props.drizzleStatus.initialized ? this.contracts.SimpleStorage.methods.storedData.data() : 'Loading...'

   // To access drizzle via context in constructor add given context type below
   Home.contextTypes = {
    drizzle: PropTypes.object
   }
   ```

   The contract instance has all of its standard web3 properties and methods. For example, sending a transaction is done as normal:
   ```javascript
   this.contracts.SimpleStorage.methods.set(this.state.storageAmount).send()
   ```

## Recipe: Loading Component

The following wrapper and component will detect when your dapp isn't ready and allow you to display the appropriate status or course of action:

`LoadingContainer.js`

```javascript
import Loading from './Loading.js'
import { drizzleConnect } from 'drizzle-react'

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {
    drizzleStatus: state.drizzleStatus,
    web3: state.web3
  }
}

const LoadingContainer = drizzleConnect(Loading, mapStateToProps);

export default LoadingContainer
```

`Loading.js`

```javascript
import React, { Component, Children } from 'react'

class Loading extends Component {
  constructor(props, context) {
    super(props)
  }

  render() {
    if (this.props.web3.status === 'failed')
    {
      return(
        // Display a web3 warning.
        <main>
          <h1>⚠️</h1>
          <p>This browser has no connection to the Ethereum network. Please use the Chrome/FireFox extension MetaMask, or dedicated Ethereum browsers Mist or Parity.</p>
        </main>
      )
    }

    if (this.props.drizzleStatus.initialized)
    {
      // Load the dapp.
      return Children.only(this.props.children)
    }

    return(
      // Display a loading indicator.
      <main>
        <h1>⚙️</h1>
        <p>Loading dapp...</p>
      </main>
    )
  }
}

export default Loading
```

## React Hooks Support (Experimental)

> Hooks are an upcoming feature that lets you use state and other React features without writing a class. They’re currently in React v16.7.0-alpha. - From [React Docs](https://reactjs.org/docs/hooks-intro.html).

Hooks greatly simplify integration with `drizzle`, but are still a work in progress, so use at your own risk. All of the necessary APIs are on the `drizzleReactHooks` export.

### Providing Context

Just like with the other approaches, you'll need to wrap your app in a context provider with your `drizzle` instance.

```js
import React from 'react'
import { drizzleReactHooks } from 'drizzle-react'
import setUpDrizzle from './set-up-drizzle'
import App from './app'

const drizzle = setupDrizzle() // Instantiate drizzle instance as you normally would.
export default () => (
  <drizzleReactHooks.DrizzleProvider drizzle={drizzle}>
    <App />
  </drizzleReactHooks.DrizzleProvider>
)
```

### Reading State

The first of the two main hooks exported is a `mapStateToProps` like function for reading from the `drizzle` store. We use this state selector approach, a la `redux`, to avoid rerendering all components when unrelated parts of the store change.

```js
import React from 'react'
import { drizzleReactHooks } from 'drizzle-react'
import Accounts from './components/accounts'

export default () => {
  const drizzleState = drizzleReactHooks.useDrizzleState(drizzleState => ({
    accounts: drizzleState.accounts
  }))
  return <Accounts accounts={drizzleState.accounts} />
}
```

You can also pass it an optional second parameter of any type that will be memoized and checked for shallow equality with the last call's on every call. If the shallow equality test fails, it will instantly call your `mapStateToProps` without waiting for an update from the `drizzle` store. This is useful when your `mapStateToProps` function depends on external variables and you want it to rerun immediately when they change to avoid race conditions in other parts of your code.

### Using Drizzle

The second of the two main hooks exported is a function that returns your `drizzle` instance, a `cacheCall` function, and two other hooks, `useCacheEvents` and `useCacheSend`.

```js
import React from 'react'
import { drizzleReactHooks } from 'drizzle-react'

export default () => {
  const {
    cacheCall,
    drizzle,
    useCacheEvents,
    useCacheSend
  } = drizzleReactHooks.useDrizzle()
  // return ...
}
```

#### `useCacheCall`

This is the hooks version of `drizzle`'s `cacheCall`. It has two modes, a single call mode for simple 1 to 1 mappings to contract methods, and a multi call mode for calling multiple contract methods in loops and/or conditionals. Note that this multi call mode is required because hooks depend on execution index so they can't be called from dynamic loops or conditionals. [More info here](https://reactjs.org/docs/hooks-rules.html).

##### Single Call Signature:

- `contractName` - _The name of the contract in your `drizzle` config._
- `methodName` - _The name of the method in the contract's ABI._
- `...args` - _Arguments passed to the `web3` call._

  **Returns:** _The result of the `web3` call._

##### Single Call Example:

```js
import React from 'react'
import { drizzleReactHooks } from 'drizzle-react'
import Balance from './components/balance'

export default () => {
  const { useCacheCall } = drizzleReactHooks.useDrizzle()
  const drizzleState = drizzleReactHooks.useDrizzleState(drizzleState => ({
    account: drizzleState.accounts[0]
  }))
  return (
    <Balance
      balance={useCacheCall('MyToken', 'balanceOf', drizzleState.account)}
    />
  )
}
```

##### Multi Call Signature:

- `contractNames` - _An array of names of contracts in your `drizzle` config. The hook will update whenever one of these contracts synchronizes._
- `func` - _A function that the hook will call with the single call function as its only argument on every update._

  **Returns:** _The result of `func`._

##### Multi Call Example:

```js
import React from 'react'
import { drizzleReactHooks } from 'drizzle-react'
import Balance from './components/balance'

export default () => {
  const { useCacheCall } = drizzleReactHooks.useDrizzle()
  const drizzleState = drizzleReactHooks.useDrizzleState(drizzleState => ({
    accounts: drizzleState.accounts
  }))
  return (
    <Balance
      balance={useCacheCall(['MyToken'], call =>
        drizzleState.accounts.reduce(
          (sum, account) => sum + (call('MyToken', 'balanceOf', account) || 0),
          0
        )
      )}
    />
  )
}
```

#### `useCacheEvents`

This is a hook for arbitrary event queries in a `cacheCall` like manner for when the `events` key of your `drizzle` config is not flexible enough.

##### Signature:

- `contractName` - _The name of the contract in your `drizzle` config._
- `eventName` - _The name of the event in the contract's ABI._
- `eventOptions` - _The `web3` [event listener options object](https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html#contract-events)._

  **Returns:** _An up to date array with all the events from the created listener._

##### Example:

```js
import React, { useMemo } from 'react'
import { drizzleReactHooks } from 'drizzle-react'
import Transfers from './components/transfers'

export default () => {
  const { useCacheEvents } = drizzleReactHooks.useDrizzle()
  const drizzleState = drizzleReactHooks.useDrizzleState(drizzleState => ({
    account: drizzleState.accounts[0]
  }))
  return (
    <Transfers
      transfers={useCacheEvents(
        'MyToken',
        'Transfer',
        // Use memoization to only recreate listener when account changes.
        useMemo(
          () => ({
            filter: { from: drizzleState.account },
            fromBlock: 0
          }),
          [drizzleState.account]
        )
      )}
    />
  )
}
```

#### `useCacheSend`

This is a hook for sending and listening to transactions.

##### Signature:

- `contractName` - _The name of the contract in your `drizzle` config._
- `methodName` - _The name of the method in the contract's ABI._
- `...args` - _Arguments passed to the `web3` call._

##### Example:

```js
import React, { useCallback } from 'react'
import { drizzleReactHooks } from 'drizzle-react'
import TransferForm from './components/transfer-form'
import TransactionStatuses from './components/transaction-statuses'

export default () => {
  const { useCacheSend } = drizzleReactHooks.useDrizzle()
  const { send, transactions } = useCacheSend('MyToken', 'transfer')
  return (
    <>
      <TransferForm
        onSubmit={
          // Use memoization to avoid unnecessary rerenders.
          useCallback(({ to, value }) => send(to, value), [])
        }
      />
      <TransactionStatuses
        transactionStatuses={transactions.map(t => t.status)}
      />
    </>
  )
}
```

### Hooks Initializer Component

We also export a general initializer component for wrapping your hooks enabled app.

```js
import React from 'react'
import { drizzleReactHooks } from 'drizzle-react'
import setUpDrizzle from './set-up-drizzle'
import Error from './components/error'
import LoadingContractsAndAccounts from './components/loading-contracts-and-accounts'
import LoadingWeb3 from './components/loading-web3'
import App from './app'

const drizzle = setupDrizzle() // Instantiate drizzle instance as you normally would.
export default () => (
  <drizzleReactHooks.DrizzleProvider drizzle={drizzle}>
    <drizzleReactHooks.Initializer
      // Optional `node` to render on errors. Defaults to `'Error.'`.
      error="There was an error."
      // Optional `node` to render while loading contracts and accounts. Defaults to `'Loading contracts and accounts.'`.
      loadingContractsAndAccounts="Also still loading."
      // Optional `node` to render while loading `web3`. Defaults to `'Loading web3.'`.
      loadingWeb3="Still loading."
    >
      <App />
    </drizzleReactHooks.Initializer>
  </drizzleReactHooks.DrizzleProvider>
)
```
