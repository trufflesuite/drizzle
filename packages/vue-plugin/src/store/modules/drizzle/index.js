import * as mutations from './mutations'
import * as getters from './getters'
import * as actions from './actions'

const state = {
  // the drizzle instance
  drizzleInstance: null,

  // is drizzle initialized?
  initialized: false,

  // These contracts need cacheCall invoked on them
  // when drizzle is initialized
  //
  registrationQ: []
}

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true
}
