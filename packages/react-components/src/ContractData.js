import { drizzleConnect } from "@drizzle/react-plugin";
import React, { Component } from "react";
import PropTypes from "prop-types";
import Loading from "./Loading.js";

class ContractData extends Component {
  constructor(props, context) {
    super(props);

    // Fetch initial value from chain and return cache key for reactive updates.
    const methodArgs = this.props.methodArgs ? this.props.methodArgs : [];

    this.contracts = context.drizzle.contracts;
    this.state = {
      dataKey: this.contracts[this.props.contract].methods[
        this.props.method
      ].cacheCall(...methodArgs),
    };
  }

  // Will not fix legacy component
  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps(nextProps) {
    const { methodArgs, contract, method } = this.props;

    const didContractChange = contract !== nextProps.contract;
    const didMethodChange = method !== nextProps.method;
    const didArgsChange =
      JSON.stringify(methodArgs) !== JSON.stringify(nextProps.methodArgs);

    if (didContractChange || didMethodChange || didArgsChange) {
      this.setState({
        dataKey: this.contracts[nextProps.contract].methods[
          nextProps.method
        ].cacheCall(...nextProps.methodArgs),
      });
    }
  }

  render() {
    const { dataKey } = this.state;
    const {
      contract,
      contracts,
      hideIndicator,
      method,
      render,
      toAscii,
      toUtf8,
    } = this.props;

    // Contract is not yet intialized.
    if (!contracts[contract].initialized) {
      return <Loading>Initializing...</Loading>;
    }

    // If the cache key we received earlier isn't in the store yet; the initial value is still being fetched.
    if (!(dataKey in contracts[contract][method])) {
      return <Loading>Fetching...</Loading>;
    }

    // Show a loading spinner for future updates.
    let pendingSpinner = !contracts[contract].synced && (
      <Loading aria-label="Loading">{" 🔄"}</Loading>
    );

    // Optionally hide loading spinner (EX: ERC20 token symbol).
    if (hideIndicator) {
      pendingSpinner = null;
    }

    let displayData = contracts[contract][method][dataKey].value;

    // Optionally convert to UTF8
    if (toUtf8) {
      displayData = this.context.drizzle.web3.utils.hexToUtf8(displayData);
    }

    // Optionally convert to Ascii
    if (toAscii) {
      displayData = this.context.drizzle.web3.utils.hexToAscii(displayData);
    }

    // If a render prop is given, have displayData rendered from that component
    if (render) {
      return render(displayData);
    }

    // If return value is an array
    if (Array.isArray(displayData)) {
      const displayListItems = displayData.map((datum, index) => {
        return (
          <li key={index}>
            {`${datum}`}
            {pendingSpinner}
          </li>
        );
      });

      return <ul>{displayListItems}</ul>;
    }

    // If retun value is an object
    if (typeof displayData === "object") {
      let i = 0;
      const displayObjectProps = [];

      Object.keys(displayData).forEach(key => {
        if (i != key) {
          displayObjectProps.push(
            <li key={i}>
              <strong>{key}</strong>
              {pendingSpinner}
              <br />
              {`${displayData[key]}`}
            </li>,
          );
        }

        i++;
      });

      return <ul>{displayObjectProps}</ul>;
    }

    return (
      <span>
        {`${displayData}`}
        {pendingSpinner}
      </span>
    );
  }
}

ContractData.contextTypes = {
  drizzle: PropTypes.object,
};

ContractData.propTypes = {
  contracts: PropTypes.object.isRequired,
  contract: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  methodArgs: PropTypes.array,
  hideIndicator: PropTypes.bool,
  toUtf8: PropTypes.bool,
  toAscii: PropTypes.bool,
  render: PropTypes.func,
};

/*
 * Export connected component.
 */

const mapStateToProps = state => {
  return {
    contracts: state.contracts,
  };
};

export default drizzleConnect(ContractData, mapStateToProps);
