import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const state = {
  cacheKeys: {},
  instances: {}
}

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true
}
