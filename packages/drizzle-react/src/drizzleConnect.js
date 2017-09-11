import React from 'react'
import { connect } from 'react-redux'

export default function drizzleConnect(Component, ...args) {
  var ConnectedWrappedComponent = connect(...args)(Component)

  return function(props, context) {
    return <ConnectedWrappedComponent {...props} drizzle={context.drizzle} />
  }
}

/*
 * TODO: See if this works or need to make class component...
 */
