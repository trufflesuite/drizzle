import React from "react";
import { newContextComponents } from "@drizzle/react-components";
const { ContractData } = newContextComponents;

export const ComplexStorage = ({ drizzle, drizzleState }) => (
  <>
    <h2>ComplexStorage</h2>
    <p>
      This contract shows data types with additional considerations. Note in the
      code the strings below are converted from bytes to UTF-8 strings and the
      device data struct is iterated as a list.
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
  </>
);

const myRender = data => (
  <>
    Value=<b>{data}</b>
  </>
);

// eslint-disable-next-line react/display-name
export const ComplexStorageCustomRender = ({ drizzle, drizzleState }) => (
  <>
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
          if (i !== key) {
            displayObjectProps.push(
              <li key={i}>
                Element {i} has key: <strong>{key}</strong>
                <br />
                and value: {`${displayData[key]}`}
              </li>,
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
  </>
);
