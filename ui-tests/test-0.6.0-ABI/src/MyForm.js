import React from "react"
import { newContextComponents } from "@drizzle/react-components"
import logo from "./logo.png"
const { AccountData, ContractData, ContractForm } = newContextComponents

export default ({ drizzle, drizzleState }) => {
  return (
    <div className="App">
      <div>
        <img src={logo} alt="drizzle-logo" />
        <h1>Drizzle Custom provider example</h1>
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
        <h2>Grue</h2>
        <p>setter for publicState nonpayable</p>
        <p>
          <strong>Stored Value: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Grue"
            method="publicState"
          />
        </p>
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setpublicStateNonPayable"
        />
      </div>
      <div className="section">
        <h2>Grue</h2>
        <p>setter for publicState payable</p>
        <p>
          <strong>Stored Value: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Grue"
            method="publicState"
          />
        </p>
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setpublicStatePayable"
        />
      </div>
      <div className="section">
        <h2>Grue</h2>
        <p>
          getter for the internalState. setter for internalState payable. setter
          for internalState nonpayable.
        </p>
        <p>
          <strong>Stored Value: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Grue"
            method="getInternalState"
          />
        </p>
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setInternalStatePayable"
        />
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setInternalStateNonPayable"
        />
      </div>
      <div className="section">
        <h2>Grue</h2>
        <p>
          getter for the privateState. payable setter for private state.
          nonpayable setter for private state var.
        </p>
        <p>
          <strong>Stored Value: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Grue"
            method="getPrivateState"
          />
        </p>
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setPrivateStatePayable"
        />
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setPrivateStateNonPayable"
        />
      </div>
      <div className="section">
        <h2>Grue</h2>
        <p>setBooleanPayable. setBooleanNonPayable.</p>
        <p>
          <strong>Stored Value: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Grue"
            method="boolean"
          />
        </p>
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setBooleanPayable"
        />
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setBooleanNonPayable"
        />
      </div>
      <div className="section">
        <h2>Grue</h2>
        <p>setBalancesMapPayable. setBalancesMapNonPayable</p>
        <p>
          <strong>Stored Value: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Grue"
            method="balances"
            methodArgs={[drizzleState.accounts[0]]}
          />
        </p>
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setBalancesMapPayable"
        />
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setBalancesMapNonPayable"
        />
      </div>
      <div className="section">
        <h2>Grue</h2>
        <p>setDynamicArrayPayable. setDynamicArrayNonPayable.</p>
        <strong>Stored Value: </strong>
        <ContractData
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="getDynamicArray"
        />

        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setDynamicArrayPayable"
        />
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setDynamicArrayNonPayable"
        />
      </div>
      <div className="section">
        <h2>Grue</h2>
        <p>setFixedArrayPayable. setFixedArrayNonPayable. </p>
        <strong>Stored Value: </strong>
        <ContractData
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="getFixedArray"
        />
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setFixedArrayPayable"
        />
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setFixedArrayNonPayable"
        />
      </div>
      <div className="section">
        <h2>Grue</h2>
        <p>setOwnerPayable. setOwnerNonPayable. </p>
        <p>
          <strong>Stored Value: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Grue"
            method="owner"
          />
        </p>
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setOwnerPayable"
        />
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setOwnerNonPayable"
        />
      </div>
      <div className="section">
        <h2>Grue</h2>
        <p>setStrPayable. setStrNonPayable. </p>
        <p>
          <strong>Stored Value: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Grue"
            method="str"
          />
        </p>
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setStrPayable"
        />
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setStrNonPayable"
        />
      </div>
      <div className="section">
        <h2>Grue</h2>
        <p>setEnumPayable. setStrNonPayable. </p>
        <p>
          <strong>Stored Value: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Grue"
            method="choice"
          />
        </p>
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setEnumPayable"
        />
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setEnumNonPayable"
        />
      </div>
      <div className="section">
        <h2>Grue</h2>
        <p>setNumsStructPayable. setNumsStructNonPayable. </p>
        <p>
          <strong>Stored Value: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Grue"
            method="nums"
            methodArgs={[drizzleState.accounts[0]]}
          />
        </p>
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Grue"
          method="setNumsStructPayable"
        />
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
