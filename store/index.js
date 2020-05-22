export const actions = {
  nuxtServerInit ({ commit }, { env }) {
    commit('app/SET_API_URL', env.apiUrl)
  }
}
