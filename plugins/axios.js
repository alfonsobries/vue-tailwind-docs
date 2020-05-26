import axiosCancel from 'axios-cancel'
import axios from 'axios'

axiosCancel(axios)

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

export default ({
  store, redirect, req
}) => {
  if (process.server) {
    axios.defaults.headers.common.Referer = req.headers.referer
  }

  axios.defaults.baseURL = store.getters['app/apiUrl']
  axios.defaults.withCredentials = true

  if (process.server) {
    return
  }

  // Request interceptor
  axios.interceptors.request.use((request) => {
    request.baseURL = store.getters['app/apiUrl']
    axios.defaults.withCredentials = true

    return request
  })

  // Response interceptor
  axios.interceptors.response.use(response => response, (error) => {
    const { status } = error.response || {}

    // If csrf token mismatch, refresh the token and retry
    if (status === 419) {
      return axios.get('/sanctum/csrf-cookie')
        .then(() => axios.request(error.config))
    }

    if (status >= 500) {
      alert('Something goes wrong!')
    }

    if (status === 401 && store.getters['auth/check']) {
      alert('Expired token!')

      store.commit('auth/LOGOUT')

      redirect('/login')
    }

    return Promise.reject(error)
  })
}
