import React from 'react'
import PropTypes from 'prop-types'

let DrizzleComponent = {

  withContract: function(Component, Contract) {
    return class extends React.Component {
      static contextTypes = {
        drizzle: PropTypes.object.isRequired,
        [Contract]: PropTypes.object
      }

      constructor(props, context) {
        super(props)

        const { drizzle } = context
        this.drizzle = drizzle

        this.state = {
          [Contract]: this.drizzle.store.getState().contracts[Contract]
        }
      }

      componentWillMount() {
        this.drizzle.store.subscribe(this.handleChange.bind(this))
      }

      handleChange() {
        let newValue = this.drizzle.store.getState().contracts[Contract]

        this.setState({[Contract]: newValue})
      }

      render() {
        let contractProps = {[Contract]: this.state[Contract]}

        return <Component {...contractProps} {...this.props} />
      }
    }
  }

}

export default DrizzleComponent
