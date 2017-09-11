class DrizzleError {
  constructor(error) {
    this.source = error.source
    this.message = error.message

    console.error(error.source + ': ' + error.message)
  }
}

export default DrizzleError
