import React from "react";
import { AccountData } from "@drizzle/react-components";

const customAccountData = ({ address, balance, units }) => (
  <div>
    <div>
      My Address: <span style={{ color: "red" }}>{address}</span>
    </div>

    <div>
      My Ether: <span style={{ color: "red" }}>{balance}</span> {units}
    </div>
  </div>
);

export default () => (
  <>
    <h2>Active Account</h2>
    <AccountData accountIndex={0} units="ether" precision={3} />

    <h2>Active Account with Custom Rendered Component</h2>
    <AccountData
      accountIndex={0}
      units="ether"
      precision={3}
      render={customAccountData}
    />
  </>
);
