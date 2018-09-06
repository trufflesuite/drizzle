# drizzle-react

Requires React 0.14+
`npm install --save drizzle-react`

`drizzle-react` is the official way to integrate Drizzle with your React dapp.

Tired of constantly coding contract calls after your state changes? Wish you had a one-liner for knowing when your dapp is ready to use? Ethereum developers have to account for extra considerations that traditional apps don't have to worry about. Drizzle abstracts away the boilerplate of creating a dapp front-end, allowing you to focus on what makes it unique. Drizzle handles instantiating web3 and contracts, fetching accounts, and keeping all of this data in sync with the blockchain.

Check out the [Drizzle Truffle Box](https://github.com/truffle-box/drizzle-box) for a complete example, or continue reading to create your own setup.

## Getting Started

**Note**: Since Drizzle uses web3 1.0 and web sockets, be sure your development environment can support these.

### Using the React Context API (For React v16.3+)

If you are using React v16.3 and up, you have access to the new [React Context](https://reactjs.org/docs/context.html) API which makes use of the [render props](s) pattern.

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
