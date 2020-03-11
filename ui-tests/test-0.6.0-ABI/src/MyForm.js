import React from "react"
import { newContextComponents } from "@drizzle/react-components"
import logo from "./logo.png"
const { AccountData, ContractData, ContractForm } = newContextComponents

export default ({ drizzle, drizzleState }) => {
  return (
    <div className="App">
      <div>
        <img src={logo} alt="drizzle-logo" />
        <h1>Drizzle Custom provider To Test ABI Versions</h1>
        <h2>Grue.sol</h2>
        <p>
          This dapp bypasses MetaMask by specifying the `customProvider`
          property in drizzleOptions
        </p>
      </div>

      <div className="section">
        <h2>Active Account</h2>
        <AccountData
          drizzle={drizzle}
          drizzleState={drizzleState}
          accountIndex={0}
          units="ether"
          precision={3}
        />

        <h2>Active Account with Custom Rendered Component</h2>
        <AccountData
          drizzle={drizzle}
          drizzleState={drizzleState}
          accountIndex={0}
          units="ether"
          precision={3}
          render={({ address, balance, units }) => (
            <div>
              <div>
                My Address: <span style={{ color: "red" }}>{address}</span>
              </div>
              <div>
                My Ether: <span style={{ color: "red" }}>{balance}</span>{" "}
                {units}
              </div>
            </div>
          )}
        />
      </div>

      <div className="section">
        <p>
          <strong>Function signature:</strong> function pureFunc() public pure
          returns(uint)
        </p>
        <code>
          <strong>ABI:</strong>
          {`"inputs": [],
          "name": "pureFunc",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "constant": true`}
        </code>
        <p>
          <strong>Value: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Grue"
            method="pureFunc"
          />
        </p>
      </div>

      <div className="section">
        <h4>
          <strong>State variable: </strong>uint256 public publicState
        </h4>
        <code>
          <strong>ABI:</strong>
          {`"inputs": [],
          "name": "publicState",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true`}
        </code>
        <p>
          <strong>Value: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Grue"
            method="publicState"
          />
        </p>
        <p>
          <strong>Function signature:</strong> function
          setpublicStateNonPayable(uint256 num) public
        </p>
        <code>
          <strong>ABI:</strong>
          {`"inputs": [
            {
              "internalType": "uint256",
              "name": "num",
              "type": "uint256"
            }
          ],
          "name": "setpublicStateNonPayable",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"`}
        </code>
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setpublicStateNonPayable"
        />
        <p>
          <strong>Function signature:</strong> function
          setpublicStatePayable(uint256 num) public payable
        </p>
        <code>
          <strong>ABI:</strong>
          {`"inputs": [
          {
            "internalType": "uint256",
            "name": "num",
            "type": "uint256"
          }
          ],
          "name": "setpublicStatePayable",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function",
          "payable": true`}
        </code>
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setpublicStatePayable"
        />
      </div>

      <div className="section">
        <h4>
          <strong>State variable: </strong>uint256 internal internalState
        </h4>
        <p>
          <strong>Function signature:</strong> function getInternalState()
          public view returns (uint)
        </p>
        <code>
          <strong>ABI:</strong>
          {`"inputs": [],
          "name": "getInternalState",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true`}
        </code>
        <p>
          <strong>Value: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Grue"
            method="getInternalState"
          />
        </p>
        <p>
          <strong>Function signature:</strong> function
          setInternalStatePayable(uint256 num) public payable
        </p>
        <code>
          <strong>ABI:</strong>
          {`"inputs": [
            {
              "internalType": "uint256",
              "name": "num",
              "type": "uint256"
            }
          ],
          "name": "setInternalStatePayable",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function",
          "payable": true`}
        </code>
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setInternalStatePayable"
        />
        <p>
          <strong>Function signature:</strong> function
          setInternalStateNonPayable(uint256 num) public
        </p>
        <code>
          <strong>ABI:</strong>
          {`"inputs": [
            {
              "internalType": "uint256",
              "name": "num",
              "type": "uint256"
            }
          ],
          "name": "setInternalStateNonPayable",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"`}
        </code>
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setInternalStateNonPayable"
        />
      </div>

      <div className="section">
        <h4>
          <strong>State variable: </strong>uint256 private privateState
        </h4>
        <p>
          <strong>Function signature:</strong> function getPrivateState() public
          view returns (uint)
        </p>
        <code>
          <strong>ABI:</strong>
          {`"inputs": [],
          "name": "getPrivateState",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true`}
        </code>
        <p>
          <strong>Value: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Grue"
            method="getPrivateState"
          />
        </p>
        <p>
          <strong>Function signature:</strong> function setPrivateStatePayable(
          uint num) public payable
        </p>
        <code>
          <strong>ABI:</strong>
          {`"inputs": [
            {
              "internalType": "uint256",
              "name": "num",
              "type": "uint256"
            }
          ],
          "name": "setPrivateStatePayable",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function",
          "payable": true`}
        </code>
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setPrivateStatePayable"
        />
        <p>
          <strong>Function signature:</strong> function
          setPrivateStateNonPayable(uint num) public
        </p>
        <code>
          <strong>ABI:</strong>
          {`"inputs": [
            {
              "internalType": "uint256",
              "name": "num",
              "type": "uint256"
            }
          ],
          "name": "setPrivateStateNonPayable",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"`}
        </code>
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setPrivateStateNonPayable"
        />
      </div>

      <div className="section">
        <h4>
          <strong>State variable: </strong>bool public boolean
        </h4>
        <code>
          <strong>ABI:</strong>
          {`"inputs": [],
          "name": "boolean",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true`}
        </code>
        <p>
          <strong>Value: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Grue"
            method="boolean"
          />
        </p>
        <p>
          <strong>Function signature:</strong> function setBooleanPayable()
          public payable returns (bool)
        </p>
        <code>
          <strong>ABI:</strong>
          {`"inputs": [],
          "name": "setBooleanPayable",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "payable": true`}
        </code>
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setBooleanPayable"
        />
        <p>
          <strong>Function signature:</strong> function setBooleanNonPayable()
          public returns (bool)
        </p>
        <code>
          <strong>ABI:</strong>
          {`"inputs": [],
          "name": "setBooleanNonPayable",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"`}
        </code>
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setBooleanNonPayable"
        />
      </div>

      <div className="section">
        <h4>
          <strong>State variable: </strong>mapping (address => uint) public
          balances
        </h4>
        <code>
          <strong>ABI:</strong>
          {`"inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "balances",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true`}
        </code>
        <p>
          <strong>Value: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Grue"
            method="balances"
            methodArgs={[drizzleState.accounts[0]]}
          />
        </p>
        <p>
          <strong>Function signature:</strong> function
          setBalancesMapPayable(uint amount) public payable returns(bool
          success)
        </p>
        <code>
          <strong>ABI:</strong>
          {`"inputs": [
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "setBalancesMapPayable",
          "outputs": [
            {
              "internalType": "bool",
              "name": "success",
              "type": "bool"
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "payable": true`}
        </code>
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setBalancesMapPayable"
        />
        <p>
          <strong>Function signature:</strong> function
          setBalancesMapNonPayable(uint amount) public returns (bool success)
        </p>
        <code>
          <strong>ABI:</strong>
          {`"inputs": [
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "setBalancesMapNonPayable",
          "outputs": [
            {
              "internalType": "bool",
              "name": "success",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"`}
        </code>
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setBalancesMapNonPayable"
        />
      </div>

      <div className="section">
        <h4>
          <strong>State variable: </strong>uint256[] public dynamicArray
        </h4>
        <p>
          <strong>Function signature:</strong> function getDynamicArray() public
          view returns (uint[] memory)
        </p>
        <code>
          <strong>ABI:</strong>
          {`"inputs": [],
          "name": "getDynamicArray",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true`}
        </code>
        <strong>Values: </strong>
        <ContractData
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="getDynamicArray"
        />
        <p>
          <strong>Function signature:</strong> function
          setDynamicArrayPayable(uint amount) public payable returns (bool
          success)
        </p>
        <code>
          <strong>ABI:</strong>
          {`"inputs": [
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "setDynamicArrayPayable",
          "outputs": [
            {
              "internalType": "bool",
              "name": "success",
              "type": "bool"
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "payable": true`}
        </code>
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setDynamicArrayPayable"
        />
        <p>
          <strong>Function signature:</strong> function
          setDynamicArrayNonPayable(uint amount) public returns (bool success)
        </p>
        <code>
          <strong>ABI:</strong>
          {`"inputs": [
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "setDynamicArrayNonPayable",
          "outputs": [
            {
              "internalType": "bool",
              "name": "success",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"`}
        </code>
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setDynamicArrayNonPayable"
        />
      </div>

      <div className="section">
        <h4>
          <strong>State variable: </strong>uint256[10] public fixedArray
        </h4>
        <p>
          <strong>Function signature:</strong> function getFixedArray() public
          view returns (uint[10] memory)
        </p>
        <code>
          <strong>ABI:</strong>
          {`"inputs": [],
          "name": "getFixedArray",
          "outputs": [
            {
              "internalType": "uint256[10]",
              "name": "",
              "type": "uint256[10]"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true`}
        </code>
        <strong>Value: </strong>
        <ContractData
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="getFixedArray"
        />
        <p>
          <strong>Function signature:</strong> function
          setFixedArrayPayable(uint index, uint amount) public payable returns
          (bool success)
        </p>
        <code>
          <strong>ABI:</strong>
          {`"inputs": [
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "setFixedArrayPayable",
          "outputs": [
            {
              "internalType": "bool",
              "name": "success",
              "type": "bool"
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "payable": true`}
        </code>
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setFixedArrayPayable"
        />
        <p>
          <strong>Function signature:</strong> function
          setFixedArrayNonPayable(uint index, uint amount) public returns (bool
          success)
        </p>
        <code>
          <strong>ABI:</strong>
          {`"inputs": [
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "setFixedArrayNonPayable",
          "outputs": [
            {
              "internalType": "bool",
              "name": "success",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"`}
        </code>
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setFixedArrayNonPayable"
        />
      </div>

      <div className="section">
        <h4>
          <strong>State variable: </strong>address public owner
        </h4>
        <code>
          <strong>ABI:</strong>
          {` "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true`}
        </code>
        <p>
          <strong>Value: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Grue"
            method="owner"
          />
        </p>
        <p>
          <strong>Function signature:</strong> function setOwnerPayable(address
          addr) public payable returns (bool success)
        </p>
        <code>
          <strong>ABI:</strong>
          {`"inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "setOwnerPayable",
          "outputs": [
            {
              "internalType": "bool",
              "name": "success",
              "type": "bool"
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "payable": true`}
        </code>
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setOwnerPayable"
        />
        <p>
          <strong>Function signature:</strong> function
          setOwnerNonPayable(address addr) public returns (bool success)
        </p>
        <code>
          <strong>ABI:</strong>
          {`"inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "setOwnerNonPayable",
          "outputs": [
            {
              "internalType": "bool",
              "name": "success",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"`}
        </code>
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setOwnerNonPayable"
        />
      </div>

      <div className="section">
        <h4>
          <strong>State variable: </strong>string public str
        </h4>
        <code>
          <strong>ABI:</strong>
          {`"inputs": [],
          "name": "str",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true`}
        </code>
        <p>
          <strong>Value: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Grue"
            method="str"
          />
        </p>
        <p>
          <strong>Function signature:</strong> function setStrPayable(string
          memory newStr) public payable returns (bool success)
        </p>
        <code>
          <strong>ABI:</strong>
          {`"inputs": [
            {
              "internalType": "string",
              "name": "newStr",
              "type": "string"
            }
          ],
          "name": "setStrPayable",
          "outputs": [
            {
              "internalType": "bool",
              "name": "success",
              "type": "bool"
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "payable": true`}
        </code>
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setStrPayable"
        />
        <p>
          <strong>Function signature:</strong> function setStrNonPayable(string
          memory newStr) public returns (bool success)
        </p>
        <code>
          <strong>ABI:</strong>
          {`"inputs": [
            {
              "internalType": "string",
              "name": "newStr",
              "type": "string"
            }
          ],
          "name": "setStrNonPayable",
          "outputs": [
            {
              "internalType": "bool",
              "name": "success",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"`}
        </code>
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setStrNonPayable"
        />
      </div>

      <div className="section">
        <h4>
          <strong>State variable: </strong>
          enum ActionChoices {`Up, Right, Down, Left`}
          ActionChoices public choice;
        </h4>
        <code>
          <strong>ABI:</strong>
          {`"inputs": [],
          "name": "choice",
          "outputs": [
            {
              "internalType": "enum Grue.ActionChoices",
              "name": "",
              "type": "uint8"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true`}
        </code>
        <p>
          <strong>Value: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Grue"
            method="choice"
          />
        </p>
        <p>
          <strong>Function signature:</strong> function setEnumPayable () public
          payable returns (bool success)
        </p>
        <code>
          <strong>ABI:</strong>
          {`"inputs": [],
          "name": "setEnumPayable",
          "outputs": [
            {
              "internalType": "bool",
              "name": "success",
              "type": "bool"
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "payable": true`}
        </code>
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setEnumPayable"
        />
        <p>
          <strong>Function signature:</strong> function setEnumNonPayable ()
          public returns (bool success)
        </p>
        <code>
          <strong>ABI:</strong>
          {`"inputs": [],
          "name": "setEnumNonPayable",
          "outputs": [
            {
              "internalType": "bool",
              "name": "success",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"`}
        </code>
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setEnumNonPayable"
        />
      </div>

      <div className="section">
        <h4>
          <strong>State variable: </strong>
          struct Num{" "}
          {`
		      uint amount `}
          mapping(address => Num) public nums;
        </h4>
        <code>
          <strong>ABI:</strong>
          {`"inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "nums",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true`}
        </code>
        <p>
          <strong>Value: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Grue"
            method="nums"
            methodArgs={[drizzleState.accounts[0]]}
          />
        </p>
        <p>
          <strong>Function signature:</strong> function
          setNumsStructPayable(uint num) public payable returns (bool success)
        </p>
        <code>
          <strong>ABI:</strong>
          {`"inputs": [
            {
              "internalType": "uint256",
              "name": "num",
              "type": "uint256"
            }
          ],
          "name": "setNumsStructPayable",
          "outputs": [
            {
              "internalType": "bool",
              "name": "success",
              "type": "bool"
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "payable": true`}
        </code>
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setNumsStructPayable"
        />
        <p>
          <strong>Function signature:</strong> function
          setNumsStructNonPayable(uint num) public returns (bool success)
        </p>
        <code>
          <strong>ABI:</strong>
          {`"inputs": [
            {
              "internalType": "uint256",
              "name": "num",
              "type": "uint256"
            }
          ],
          "name": "setNumsStructNonPayable",
          "outputs": [
            {
              "internalType": "bool",
              "name": "success",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"`}
        </code>
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setNumsStructNonPayable"
        />
      </div>
    </div>
  )
}
