import React from "react"
import { newContextComponents } from "@drizzle/react-components"
import { DrizzleContext } from "@drizzle/react-plugin"
import logo from "./logo.png"

const { AccountData, ContractData, ContractForm } = newContextComponents

export default () => (
  <DrizzleContext.Consumer>
    {drizzleContext => {
      const { drizzle, drizzleState, initialized } = drizzleContext
      if (!initialized) {
        return "Loading..."
      }

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
            <h2>SimpleStorage</h2>
            <p>
              This shows a simple ContractData component with no arguments,
              along with a form to set its value.
            </p>
            <p>
              <strong>Stored Value: </strong>
              <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract="SimpleStorage"
                method="storedData"
              />
            </p>
            <ContractForm
              drizzle={drizzle}
              drizzleState={drizzleState}
              contract="SimpleStorage"
              method="set"
            />
          </div>
        </div>
      )
    }}
  </DrizzleContext.Consumer>
)
