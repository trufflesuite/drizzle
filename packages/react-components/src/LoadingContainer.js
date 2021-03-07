import { drizzleConnect } from "@drizzle/react-plugin";
import React, { Children, Component } from "react";
import PropTypes from "prop-types";

/*
 * Create component.
 */

class LoadingContainer extends Component {
  render() {
    const {
      accounts,
      children,
      drizzleStatus,
      errorComp,
      loadingComp,
      web3,
    } = this.props;

    if (web3.status === "failed") {
      if (errorComp) {
        return errorComp;
      }

      return (
        <main className="container loading-screen">
          <div className="pure-g">
            <div
              className="pure-u-1-1"
              role="alertdialog"
              aria-labelledby="alertTitle"
              aria-describedby="alertContext"
            >
              <h1 id="alertTitle" aria-label="Warning!">
                ⚠️
              </h1>
              <p id="alertContext">
                This browser has no connection to the Ethereum network. Please
                use the Chrome/FireFox extension MetaMask, or dedicated Ethereum
                browsers Mist or Parity.
              </p>
            </div>
          </div>
        </main>
      );
    }

    if (web3.status === "initialized" && Object.keys(accounts).length === 0) {
      return (
        <main className="container loading-screen">
          <div className="pure-g">
            <div
              className="pure-u-1-1"
              role="alertdialog"
              aria-labelledby="alertTitle"
              aria-describedby="alertContext"
            >
              <h1 id="alertTitle" aria-label="MetaMask">
                🦊
              </h1>
              <p id="alertContext">
                <strong>{"We can't find any Ethereum accounts!"}</strong> Please
                check and make sure Metamask or your browser are pointed at the
                correct network and your account is unlocked.
              </p>
            </div>
          </div>
        </main>
      );
    }

    if (drizzleStatus.initialized) {
      return Children.only(children);
    }

    if (loadingComp) {
      return loadingComp;
    }

    return (
      <main className="container loading-screen">
        <div className="pure-g">
          <div
            className="pure-u-1-1"
            role="alertdialog"
            aria-labelledby="alertTitle"
            aria-describedby="alertContext"
          >
            <h1 id="alertTitle" aria-label="Please wait">
              ⚙️
            </h1>
            <p id="alertContext">Loading dapp...</p>
          </div>
        </div>
      </main>
    );
  }
}

LoadingContainer.contextTypes = {
  drizzle: PropTypes.object,
};

LoadingContainer.propTypes = {
  children: PropTypes.node,
  accounts: PropTypes.object.isRequired,
  drizzleStatus: PropTypes.object.isRequired,
  web3: PropTypes.object.isRequired,
  loadingComp: PropTypes.node,
  errorComp: PropTypes.node,
};

/*
 * Export connected component.
 */

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus,
    web3: state.web3,
  };
};

export default drizzleConnect(LoadingContainer, mapStateToProps);
