// Load as promise so that async Drizzle initialization can still resolve
var windowPromise = new Promise((resolve, reject) => {
  window.addEventListener('load', resolve)
})

class Drizzle {
  constructor(options, store) {
    // Variables
    this.contracts = {}
    this.options = options
    this.store = store
    this.web3 = {}

    // Wait for window load event in case of injected web3.
    windowPromise.then(() => {
      // Begin Drizzle initialization.
      store.dispatch({type: 'DRIZZLE_INITIALIZING', drizzle: this, options})
    })
  }
}

export default Drizzle
