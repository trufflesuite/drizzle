import React from "react";
import { newContextComponents } from "drizzle-react-components";
import { DrizzleContext } from "drizzle-react";
import logo from "./logo.png";

const { AccountData, ContractData, ContractForm } = newContextComponents;

const myRender = data => (
  <>
    Value=<b>{data}</b>
  </>
);

export default () => (
  <DrizzleContext.Consumer>
    {drizzleContext => {
      const { drizzle, drizzleState, initialized } = drizzleContext;
      if (!initialized) {
        return "Loading...";
      }

      const { accounts } = drizzleState;
      return (
        <div className="App">
          <div>
            <img src={logo} alt="drizzle-logo" />
            <h1>Drizzle Examples</h1>
            <p>
              Examples of how to get started with Drizzle in various situations.
            </p>
          </div>

          <div className="section">
            <h2>Active Account</h2>
            <AccountData
              drizzle={drizzle}
              drizzleState={drizzleState}
              accountIndex="0"
              units="ether"
              precision="3"
            />

            <h2>Active Account with Custom Rendered Component</h2>
            <AccountData
              drizzle={drizzle}
              drizzleState={drizzleState}
              accountIndex="0"
              units="ether"
              precision="3"
              render={({ address, balance, units }) => (
                <div>
                  <div>My Address: <span style={{ color: "red" }}>{address}</span></div>
                  <div>My Ether: <span style={{ color: "red" }}>{balance}</span> {units}</div>
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

            <h2>SimpleStorage with Custom Rendering</h2>
            <p>
              This is the same contract as above, but here we customize the ContractForm's rendered component's style.
            </p>
            <ContractForm
              drizzle={drizzle}
              drizzleState={drizzleState}
              contract="SimpleStorage"
              method="set"
              render={({ inputs, inputTypes, state, handleInputChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  {inputs.map((input, index) => (
                    <input
                      style={{ fontSize: 30 }}
                      key={input.name}
                      type={inputTypes[index]}
                      name={input.name}
                      value={state[input.name]}
                      placeholder={input.name}
                      onChange={handleInputChange}
                    />
                  ))}
                  <button
                    key="submit"
                    type="button"
                    onClick={handleSubmit}
                    style={{ fontSize: 30 }}
                  >
                    Submit Big
                  </button>
                </form>

              )}
            />
          </div>

          <div className="section">
            <h2>TutorialToken</h2>
            <p>
              Here we have a form with custom, friendly labels. Also note the
              token symbol will not display a loading indicator. We've
              suppressed it with the <code>hideIndicator</code> prop because we
              know this variable is constant.
            </p>
            <p>
              <strong>Total Supply: </strong>
              <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract="TutorialToken"
                method="totalSupply"
                methodArgs={[{ from: accounts[0] }]}
              />{" "}
              <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract="TutorialToken"
                method="symbol"
                hideIndicator
              />
            </p>
            <p>
              <strong>My Balance: </strong>
              <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract="TutorialToken"
                method="balanceOf"
                methodArgs={[accounts[0]]}
              />
            </p>
            <h3>Send Tokens</h3>
            <ContractForm
              drizzle={drizzle}
              drizzleState={drizzleState}
              contract="TutorialToken"
              method="transfer"
              labels={["To Address", "Amount to Send"]}
            />
          </div>

          <div className="section">
            <h2>ComplexStorage</h2>
            <p>
              This contract shows data types with additional considerations.
              Note in the code the strings below are converted from bytes to
              UTF-8 strings and the device data struct is iterated as a list.
            </p>
            <p>
              <strong>String 1: </strong>
              <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract="ComplexStorage"
                method="string1"
                toUtf8
              />
            </p>
            <p>
              <strong>String 2: </strong>
              <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract="ComplexStorage"
                method="string2"
                toUtf8
              />
            </p>
            <strong>Single Device Data: </strong>
            <ContractData
              drizzle={drizzle}
              drizzleState={drizzleState}
              contract="ComplexStorage"
              method="singleDD"
            />
            <strong>Array of UInts: </strong>
            <ContractData
              drizzle={drizzle}
              drizzleState={drizzleState}
              contract="ComplexStorage"
              method="getUintarray"
            />
          </div>
          <div className="section">
            <h2>ComplexStorage with Custom Rendering</h2>
            <p>
              This is the same data as above, but enhanced with a custom render
              function.
            </p>
            <p>
              <strong>String 1: </strong>
              <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract="ComplexStorage"
                method="string1"
                toUtf8
                render={data => (
                  <>
                    This is the value: <b>{data}</b>
                  </>
                )}
              />
            </p>
            <p>
              <strong>String 2: </strong>
              <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract="ComplexStorage"
                method="string2"
                toUtf8
                render={myRender}
              />
            </p>
            <strong>Single Device Data: </strong>
            <ContractData
              drizzle={drizzle}
              drizzleState={drizzleState}
              contract="ComplexStorage"
              method="singleDD"
              render={displayData => {
                var i = 0;
                const displayObjectProps = [];

                Object.keys(displayData).forEach(key => {
                  if (i != key) {
                    displayObjectProps.push(
                      <li key={i}>
                        Element {i} has key: <strong>{key}</strong>
                        <br />
                        and value: {`${displayData[key]}`}
                      </li>
                    );
                  }

                  i++;
                });
                return <ol>{displayObjectProps}</ol>;
              }}
            />
            <strong>Array of UInts: </strong>
            <ContractData
              drizzle={drizzle}
              drizzleState={drizzleState}
              contract="ComplexStorage"
              method="getUintarray"
              render={displayData => (
                <ol>
                  {displayData.map(v => (
                    <li key={v}>
                      value: <strong>{v}</strong>
                    </li>
                  ))}
                </ol>
              )}
            />
          </div>
        </div>
      );
    }}
  </DrizzleContext.Consumer>
);
