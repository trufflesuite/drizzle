const state = {
  account: '',
  balance: ''
}

const getters = {
  getAccount: state => state
}

const mutations = {
  SET_ACCOUNT: (state, { account, balance }) => {
    state.account = account
    state.balance = balance
  }
}

const actions = {
  SET_ACCOUNT: ({ commit }, payload) => commit('SET_ACCOUNT', payload)
}

export default {
  state,
  namespaced: true,
  getters,
  actions,
  mutations
}
