import React, { Component } from 'react'

class DrizzleLoading extends Component {
  constructor(props, context) {
    super(props)
  }

  render() {
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Loading Dapp...</h1>
          </div>
        </div>
      </main>
    )
  }
}

export default DrizzleLoading
