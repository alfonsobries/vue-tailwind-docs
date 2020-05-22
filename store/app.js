export const state = () => ({
  apiUrl: process.env.apiUrl

})

// getters
export const getters = {
  apiUrl: state => state.apiUrl

}

// mutations
export const mutations = {
  SET_API_URL (state, apiUrl) {
    state.apiUrl = apiUrl
  }
}
