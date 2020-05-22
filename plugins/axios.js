import axiosCancel from 'axios-cancel'
import axios from 'axios'

axiosCancel(axios)

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

export default ({ store, req }) => {
  if (process.server) {
    axios.defaults.headers.common.Referer = req.headers.referer || store.getters['app/clientUrl']
  }

  axios.defaults.baseURL = store.getters['app/apiUrl']
  // axios.defaults.withCredentials = true

  if (process.server) {
    return
  }

  // Request interceptor
  axios.interceptors.request.use((request) => {
    request.baseURL = store.getters['app/apiUrl']
    // axios.defaults.withCredentials = true

    return request
  })

  // Response interceptor
  axios.interceptors.response.use(response => response, (error) => {
    const { status } = error.response || {}

    if (status >= 500) {
      alert('Something goes wrong!')
    }

    return Promise.reject(error)
  })
}
