export default ({
  $axios, store, redirect
}) => {
  // Response interceptor
  $axios.onError((error) => {
    const { status } = error.response || {}

    // If csrf token mismatch, refresh the token and retry
    if (status === 419) {
      return $axios.get('/sanctum/csrf-cookie')
        .then(() => $axios.request(error.config))
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
