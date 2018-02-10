import drizzleConnect from '../drizzleConnect.js'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

/*
 * Create component.
 */

class ContractData extends Component {
  constructor(props, context) {
    super(props)

    this.contracts = context.drizzle.contracts

    // Fetch initial value from chain and return cache key for reactive updates.
    var methodArgs = this.props.methodArgs ? this.props.methodArgs : []
    this.dataKey = this.contracts[this.props.contract].methods[
      this.props.method
    ].cacheCall(...methodArgs)
  }

  render() {
    if (!this.props.contracts[this.props.contract].initialized) {
      return <span>Initializing...</span>
    }

    // If the cache key we received earlier isn't in the store yet; the initial value is still being fetched.
    if (
      !(
        this.dataKey in
        this.props.contracts[this.props.contract][this.props.method]
      )
    ) {
      return <span>Fetching...</span>
    }

    // Show a loading spinner for future updates.
    var pendingSpinner = this.props.contracts[this.props.contract].synced
      ? ''
      : ' 🔄'
    if (this.props.hideIndicator) {
      pendingSpinner = ''
    }

    return (
      <span>
        {
          this.props.contracts[this.props.contract][this.props.method][
            this.dataKey
          ].value
        }
        {pendingSpinner}
      </span>
    )
  }
}

ContractData.contextTypes = {
  drizzle: PropTypes.object
}

/*
 * Export connected component.
 */

const mapStateToProps = state => {
  return {
    contracts: state.contracts
  }
}

export default drizzleConnect(ContractData, mapStateToProps)
