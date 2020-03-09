import React from 'react';
import { DrizzleContext } from '@drizzle/react-plugin';
import MyForm from './MyForm';

export default () => (
  <DrizzleContext.Consumer>
    {drizzleContext => {
      const { drizzle, drizzleState, initialized } = drizzleContext;
      if (!initialized) {
        return 'Loading...';
      }
      return <MyForm drizzle={drizzle} drizzleState={drizzleState}></MyForm>;
    }}
  </DrizzleContext.Consumer>
);
