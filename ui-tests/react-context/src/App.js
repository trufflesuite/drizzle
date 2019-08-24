import React, { Component } from "react";
import { Drizzle } from '@drizzle/store';
import { DrizzleContext } from "@drizzle/react-plugin";
import { newContextComponents } from "@drizzle/react-components";

import "./App.css";

import drizzleOptions from "./drizzleOptions";
import MyComponent from "./MyComponent";

const drizzle = new Drizzle(drizzleOptions);
const { LoadingContainer } = newContextComponents;

class App extends Component {
  render() {
    return (
      <DrizzleContext.Provider drizzle={drizzle}>
        <DrizzleContext.Consumer>
          {drizzleContext =>
            <LoadingContainer drizzleState={drizzleContext.drizzleState}>
              <MyComponent
                drizzle={drizzleContext.drizzle}
                drizzleState={drizzleContext.drizzleState}
              />
            </LoadingContainer>
          }
        </DrizzleContext.Consumer>
      </DrizzleContext.Provider>
    );
  }
}

export default App;

