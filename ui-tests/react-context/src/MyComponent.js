import React from "react";
import { DrizzleContext } from "@drizzle/react-plugin";
import logo from "./logo.png";

import SimpleStorage from "./components/SimpleStorage";
import TutorialToken from "./components/TutorialToken";
import {
  ComplexStorage,
  ComplexStorageCustomRender,
} from "./components/ComplexStorage";

import Account from "./components/Account";

const Logo = () => (
  <div>
    <img src={logo} alt="drizzle-logo" />
    <h1>Drizzle Examples: Context API</h1>
    <p>Examples of how to get started with Drizzle in various situations.</p>
  </div>
);

export default () => (
  <DrizzleContext.Consumer>
    {drizzleContext => {
      const { drizzle, drizzleState, initialized } = drizzleContext;
      if (!initialized) {
        return "Loading...";
      }

      return (
        <div className="App">
          <Logo />

          <div className="section">
            <Account drizzle={drizzle} drizzleState={drizzleState} />
          </div>

          <div className="section">
            <SimpleStorage drizzle={drizzle} drizzleState={drizzleState} />
          </div>

          <div className="section">
            <TutorialToken drizzle={drizzle} drizzleState={drizzleState} />
          </div>

          <div className="section">
            <ComplexStorage drizzle={drizzle} drizzleState={drizzleState} />
          </div>

          <div className="section">
            <ComplexStorageCustomRender
              drizzle={drizzle}
              drizzleState={drizzleState}
            />
          </div>
        </div>
      );
    }}
  </DrizzleContext.Consumer>
);
