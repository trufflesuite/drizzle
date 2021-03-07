import React, { Component } from "react";
import PropTypes from "prop-types";
import Loading from "../Loading.js";

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
    const { accountIndex, drizzle, precision, render } = this.props;
    const { accounts, accountBalances } = this.props.drizzleState;

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
    if (this.props.units && typeof balance !== "undefined") {
      balance = drizzle.web3.utils.fromWei(balance, this.props.units);
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

AccountData.propTypes = {
  drizzle: PropTypes.object.isRequired,
  drizzleState: PropTypes.object.isRequired,
  accountIndex: PropTypes.number.isRequired,
  units: PropTypes.string,
  precision: PropTypes.number,
  render: PropTypes.func,
};

export default AccountData;
