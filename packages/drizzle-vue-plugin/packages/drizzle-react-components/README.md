# drizzle-react-components
A set of useful components for common UI elements.

## Components

ContractData
------------

contract (string) Name of the contract to call.

method (string) Method of the contract to call.

methodArgs (array) Arguments for the contract method call. EX: The address for an ERC20 balanceOf() function.

hideIndicator (boolean) If true, hides the loading indicator during contract state updates. Useful for things like ERC20 token symbols which do not change.

toUtf8 (boolean) Converts the return value to a UTF-8 string before display.

toAscii (boolean) Converts the return value to an Ascii string before display.


ContractForm
------------

contract (string) Name of the contract whose method will be the basis the form.

method (string) Method whose inputs will be used to create corresponding form fields.

labels (array) Custom labels. EX: "_to" -> "Recipient Address"