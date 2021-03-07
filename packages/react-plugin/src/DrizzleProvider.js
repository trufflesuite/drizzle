import { Component, Children } from "react"
import PropTypes from "prop-types"
import { Drizzle, generateStore } from "@drizzle/store"

class DrizzleProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    options: PropTypes.object.isRequired,
    store: PropTypes.object
  }

  // you must specify what you’re adding to the context
  static childContextTypes = {
    drizzle: PropTypes.object.isRequired,
    drizzleStore: PropTypes.object.isRequired
  }

  constructor(context, props) {
    super(context, props)
  }

  getChildContext() {
    const { options, store } = this.props
    const drizzleStore = store || generateStore(options)
    const drizzle = new Drizzle(options, drizzleStore)

    return { drizzle, drizzleStore }
  }

  render() {
    // `Children.only` enables us not to add a <div /> for nothing
    return Children.only(this.props.children)
  }
}

export default DrizzleProvider
