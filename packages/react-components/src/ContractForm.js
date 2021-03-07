import { drizzleConnect } from "@drizzle/react-plugin";
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

const translateType = type => {
  switch (true) {
    case /^uint/.test(type):
      return "number";
    case /^string/.test(type) || /^bytes/.test(type):
      return "text";
    case /^bool/.test(type):
      return "checkbox";
    default:
      return "text";
  }
};

class ContractForm extends Component {
  constructor(props, context) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.contracts = context.drizzle.contracts;
    this.utils = context.drizzle.web3.utils;
    this.inputs = [];

    const { contract, method } = this.props;
    const initialState = {};

    // Get the contract ABI
    const abi = this.contracts[contract].abi;

    // Iterate over abi for correct function.
    for (let i = 0; i < abi.length; i++) {
      if (abi[i].name === method) {
        this.inputs = abi[i].inputs;

        for (let j = 0; j < this.inputs.length; j++) {
          initialState[this.inputs[j].name] = "";
        }

        break;
      }
    }

    this.state = initialState;
  }

  handleSubmit(event) {
    event.preventDefault();

    const { contract, method, sendArgs } = this.props;
    const convertedInputs = this.inputs.map(input => {
      if (input.type === "bytes32") {
        return this.utils.toHex(this.state[input.name]);
      }
      return this.state[input.name];
    });

    if (sendArgs) {
      return this.contracts[contract].methods[method].cacheSend(
        ...convertedInputs,
        sendArgs,
      );
    }

    return this.contracts[contract].methods[method].cacheSend(
      ...convertedInputs,
    );
  }

  handleInputChange(event) {
    const { checked, name, type } = event.target;
    const value = type === "checkbox" ? checked : event.target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { labels, render } = this.props;
    const visibilityHidden = {
      visibility: "hidden",
      display: "inline-block",
      width: 0,
    };

    if (render) {
      return render({
        inputs: this.inputs,
        inputTypes: this.inputs.map(input => translateType(input.type)),
        state: this.state,
        handleInputChange: this.handleInputChange,
        handleSubmit: this.handleSubmit,
      });
    }

    return (
      <form
        className="pure-form pure-form-stacked"
        onSubmit={this.handleSubmit}
      >
        {this.inputs.map((input, index) => {
          // check if input type is struct and if so loop out struct fields as well

          const inputType = translateType(input.type);
          const inputLabel = labels ? labels[index] : input.name;

          return (
            <Fragment key={input.name}>
              <label htmlFor={input.name} style={visibilityHidden}>
                {inputLabel}
              </label>
              <input
                type={inputType}
                name={input.name}
                value={this.state[input.name]}
                placeholder={inputLabel}
                onChange={this.handleInputChange}
              />
            </Fragment>
          );
        })}
        <button
          key="submit"
          className="pure-button"
          type="button"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </form>
    );
  }
}

ContractForm.contextTypes = {
  drizzle: PropTypes.object,
};

ContractForm.propTypes = {
  contract: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  sendArgs: PropTypes.object,
  labels: PropTypes.arrayOf(PropTypes.string),
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

export default drizzleConnect(ContractForm, mapStateToProps);
