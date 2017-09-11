const WEB3_INITIALIZING = 'WEB3_INITIALIZING'

export function web3Initializing(results) {
  return {
    type: WEB3_INITIALIZING,
    payload: results
  }
}

const WEB3_INITIALIZED = 'WEB3_INITIALIZED'

export function web3Initialized(results) {
  return {
    type: WEB3_INITIALIZED,
    payload: results
  }
}

const WEB3_FAILED = 'WEB3_FAILED'

export function web3Failed(results) {
  return {
    type: WEB3_FAILED,
    payload: results
  }
}
