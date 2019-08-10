import React from "react";
import { newContextComponents } from "@drizzle/react-components";
const { AccountData } = newContextComponents;

// eslint-disable-next-line react/display-name
export default ({ drizzle, drizzleState }) => (
  <>
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
            My Ether: <span style={{ color: "red" }}>{balance}</span> {units}
          </div>
        </div>
      )}
    />
  </>
);
