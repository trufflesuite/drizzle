import React from "react";

const Context = React.createContext();

class Provider extends React.Component {
  state = { drizzleState: null, initialized: false };

  componentDidMount() {
    const { drizzle } = this.props;
    // subscribe to changes in the store, keep state up-to-date
    this.unsubscribe = drizzle.store.subscribe(() => {
      const drizzleState = drizzle.store.getState();
      if (drizzleState.drizzleStatus.initialized) {
        this.setState({
          drizzleState,
          initialized: true
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <Context.Provider
        value={{
          drizzle: this.props.drizzle,
          drizzleState: this.state.drizzleState,
          initialized: this.state.initialized
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default {
  Context: Context,
  Consumer: Context.Consumer,
  Provider
};
