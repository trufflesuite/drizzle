import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

export default function drizzleConnect(Component, ...args) {

  var ConnectedWrappedComponent = connect(...args)(Component)

  const DrizzledComponent = (props, context) => (
    <ConnectedWrappedComponent {...props} store={context.drizzleStore} />
  )

  DrizzledComponent.contextTypes = {
    drizzleStore: PropTypes.object
  }

  return DrizzledComponent
}

/*
 * TODO: See if this works or need to make class component...
 */
