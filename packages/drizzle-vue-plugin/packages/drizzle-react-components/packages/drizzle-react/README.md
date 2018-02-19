# drizzle-react

Requires React 0.14+
`npm install --save drizzle-react`

`drizzle-react` is the official way to integrate Drizzle with your React dapp.

Tired of constantly coding contract calls after your state changes? Wish you had a one-liner for knowing when your dapp is ready to use? Ethereum developers have to account for extra considerations that traditional apps don't have to worry about. Drizzle abstracts away the boilerplate of creating a dapp front-end, allowing you to focus on what makes it unique. Drizzle handles instantiating web3 and contracts, fetching accounts, and keeping all of this data in sync with the blockchain.

Check out the [Drizzle Truffle Box](https://github.com/truffle-box/drizzle-box) for a complete example, or continue reading to create your own setup.

## Getting Started

**Note**: Since Drizzle uses web3 1.0 and web sockets, be sure your development environment can support these.

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
       SimpleStorage
     ]
   }
   ```

1. Wrap your app with `DrizzleProvider` and pass in an `options` object.
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
