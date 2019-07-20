# drizzle-react-components

A set of useful components for common UI elements.

## Components

We provide components that support the React 16.3+ context API and also the legacy context API. The legacy context components will be deprecated in 2.0 with breaking changes to the `drizzle-react-components` API. We recommend usage of the new context components where possible.

For 1.x.x this is how you import the different components:

### React 16.3+ Context Components

```
import { newContextComponents } from "drizzle-react-components";
const { AccountData, ContractData, ContractForm } = newContextComponents;
```

`LoadingContainer` is not provided with the new context components currently. Also note that you must pass in `drizzle` and `drizzleState` for each of these components.

### Legacy Context Components

```
import {
  AccountData,
  ContractData,
  ContractForm,
  LoadingContainer
} from "drizzle-react-components";
```

Refer to the included [test apps](#test-apps) for usage examples.

### LoadingContainer (Legacy only)

This component wraps your entire app (but within the DrizzleProvider) and will show a loading screen until Drizzle, and therefore web3 and your contracts, are initialized.

`loadingComp` (component) The component displayed while Drizzle initializes.

`errorComp` (component) The component displayed if Drizzle initialization fails.

### AccountData

`accountIndex` (number, required) Index of account from which to retrieve balance.

`units` (string) Unit to display either value in. Default is `wei`. See full list of units [here in the web3 documentation](https://web3js.readthedocs.io/en/1.0/web3-utils.html#fromwei).

`precision` (number) The number of digits after the decimal point to display.

### ContractData

`contract` (string, required) Name of the contract to call.

`method` (string, required) Method of the contract to call.

`methodArgs` (array) Arguments for the contract method call. EX: The address for an ERC20 balanceOf() function. The last argument can optionally be an options object with the typical form, `gas` and `gasPrice` keys.

`hideIndicator` (boolean) If true, hides the loading indicator during contract state updates. Useful for things like ERC20 token symbols which do not change.

`toUtf8` (boolean) Converts the return value to a UTF-8 string before display.

`toAscii` (boolean) Converts the return value to an Ascii string before display.

`render` (function with one argument) Render property, takes the value in the argument and returns render output.

### ContractForm

`contract` (string, required) Name of the contract whose method will be the basis the form.

`method` (string, required) Method whose inputs will be used to create corresponding form fields.

`sendArgs` (object) An object specifying options for the transaction to be sent; namely: `from`, `gasPrice`, `gas` and `value`. Further explanataion of these parameters can be found [here in the web3 documentation](https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html#id19).

`labels` (array) Custom labels; will follow ABI input ordering. Useful for friendlier names. For example "\_to" becoming "Recipient Address".

`render` (function) Render prop for rendering custom components. It receives a single object with the fields: `inputs`, `inputTypes`, `state`, `handleInputChange`,  `handleSubmit`,  as arguments and returns render output.

## Test Apps

Refer to the test apps to learn more about how to use DRC.

A test app targeting the React 16.3+ context API has been included at `./test-app`. And one targeting the legacy context API can be found at `test-app-legacy-context`.

### Installation

1. `cd ./test-app`
1. Install dependencies: `npm install`
1. Start your development blockchain: `truffle develop`
1. (In Truffle develop console) Compile contracts: `compile`
1. (In Truffle develop console) Migrate contracts: `migrate`
1. In another terminal window: `cd ./app`
1. Install dependencies: `npm install`
1. Start dev server: `npm start`

NOTE: Make sure to `migrate --reset` your contracts and reset your Metamask account when switching between test apps, otherwise errors may occur.
