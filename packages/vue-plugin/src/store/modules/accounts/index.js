const state = {
  activeAccount: '',
  accountBalances: {}
}

const getters = {
  activeBalance: ({ activeAccount, accountBalances }) =>
    accountBalances[activeAccount],
  activeAccount: ({ activeAccount }) => activeAccount
}

const mutations = {
  SET_ACCOUNTS: (state, { activeAccount, accountBalances }) => {
    state.activeAccount = activeAccount
    state.accountBalances = accountBalances
  }
}

const actions = {
  SET_ACCOUNTS: ({ commit }, payload) => commit('SET_ACCOUNTS', payload)
}

export default {
  state,
  namespaced: true,
  getters,
  actions,
  mutations
}
