import axios from 'axios'

// state
export const state = () => ({
  user: null
})

// getters
export const getters = {
  user: state => state.user,
  check: state => state.user !== null
}

// mutations
export const mutations = {
  FETCH_USER_FAILURE (state) {
    state.user = null
  },

  LOGOUT (state) {
    state.user = null
  },
  UPDATE_USER (state, user) {
    state.user = user
  }
}

// actions
export const actions = {
  fetchUser ({ commit, dispatch }) {
    return new Promise((resolve, reject) => {
      axios.get('/user', {
        withCredentials: true
      }).then(({ data: user }) => {
        dispatch('updateUser', user)
        resolve(user)
      }).catch((error) => {
        commit('FETCH_USER_FAILURE')
        reject(error)
      })
    })
  },

  updateUser ({ commit }, user) {
    commit('UPDATE_USER', user)
  },

  async logout ({ commit }) {
    commit('LOGGING_OUT_START')

    await axios.post('/logout')

    commit('LOGOUT')
    commit('LOGGING_OUT_END')
  }
}
