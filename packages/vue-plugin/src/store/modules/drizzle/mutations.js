export const INITIALIZE = state => (state.initialized = true)

export const STARTUP = (state, payload) => (state.drizzleInstance = payload)

// Todo: potential Vuex? reactivity here
export const REGISTER_CONTRACT = (state, contract) => {
  state.registrationQ.push(contract)
}

export const EMPTY_REGISTRATION_Q = state => (state.registrationQ = [])
