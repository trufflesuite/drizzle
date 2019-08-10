import React from "react";
import { newContextComponents } from "@drizzle/react-components";
const { ContractData, ContractForm } = newContextComponents;

export default ({ drizzle, drizzleState }) => (
  <>
    <h2>TutorialToken</h2>
    <p>
      Here we have a form with custom, friendly labels. Also note the token
      symbol will not display a loading indicator. We've suppressed it with the{" "}
      <code>hideIndicator</code> prop because we know this variable is constant.
    </p>
    <p>
      <strong>Total Supply: </strong>
      <ContractData
        drizzle={drizzle}
        drizzleState={drizzleState}
        contract="TutorialToken"
        method="totalSupply"
        methodArgs={[{ from: drizzleState.accounts[0] }]}
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
        methodArgs={[drizzleState.accounts[0]]}
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
  </>
);
