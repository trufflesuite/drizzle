import { drizzleConnect } from "@drizzle/react-plugin";
import React, { Component } from "react";
import PropTypes from "prop-types";
import Loading from "./Loading.js";

class AccountData extends Component {
  constructor(props) {
    super(props);

    this.precisionRound = this.precisionRound.bind(this);
  }

  precisionRound(number, precision) {
    const factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  }

  render() {
    const {
      accounts,
      accountIndex,
      accountBalances,
      precision,
      render,
    } = this.props;

    // No accounts found.
    if (Object.keys(accounts).length === 0) {
      return <Loading>Initializing...</Loading>;
    }

    // Get account address and balance.
    const address = accounts[accountIndex];
    const units = this.props.units
      ? this.props.units.charAt(0).toUpperCase() + this.props.units.slice(1)
      : "Wei";

    let balance = accountBalances[address];

    // Convert to given units.
    if (units && typeof balance !== "undefined") {
      balance = this.context.drizzle.web3.utils.fromWei(balance, units);
    }

    // Adjust to given precision.
    if (precision) {
      balance = this.precisionRound(balance, precision);
    }

    if (render) {
      return render({
        address,
        balance,
        units,
      });
    }

    return (
      <div role="status" aria-live="polite">
        <h4 aria-label={`${units} Address: ${address}`}>{address}</h4>
        <p aria-label={`${units} Balance: ${balance}`}>
          {balance} {units}
        </p>
      </div>
    );
  }
}

AccountData.contextTypes = {
  drizzle: PropTypes.object,
};

AccountData.propTypes = {
  accounts: PropTypes.objectOf(PropTypes.string),
  accountBalances: PropTypes.objectOf(PropTypes.string),
  accountIndex: PropTypes.number.isRequired,
  units: PropTypes.string,
  precision: PropTypes.number,
  render: PropTypes.func,
};

/*
 * Export connected component.
 */

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    accountBalances: state.accountBalances,
  };
};

export default drizzleConnect(AccountData, mapStateToProps);
