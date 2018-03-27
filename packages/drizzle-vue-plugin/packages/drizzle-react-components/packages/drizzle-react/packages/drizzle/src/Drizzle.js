class Drizzle {
  constructor(options, store) {
    // Variables
    this.contracts = {}
    this.options = options
    this.store = store
    this.web3 = {}

    // Wait for window load event in case of injected web3.
    window.addEventListener('load', () => {
      // Begin Drizzle initialization.
      store.dispatch({type: 'DRIZZLE_INITIALIZING', drizzle: this, options})
    })
  }
}

export default Drizzle
