import get from 'lodash/get'

export default ({ $axios, $sentry }, inject) => {
  inject('handleException', (error, nuxtError = null) => {
    if ($axios.isCancel(error)) {
      // Dont report is ok
      return
    }

    const statusCode = get(error, 'response.status')
    if (statusCode === 422) {
      if (process.env.enviroment !== 'production' && get(error, 'response.status')) {
        console.warn('422 error', error.response)
      }
      // Dont report 422 error
      return
    }

    if ($sentry && statusCode !== 404) {
      $sentry.captureException(error)
    }

    if (nuxtError) {
      if (get(error, 'response.status')) {
        nuxtError({ statusCode: get(error, 'response.status'), message: get(error, 'response.statusText') })
      } else {
        nuxtError(error)
      }
    }

    if (
      statusCode !== 404 &&
      (process.env.enviroment === 'local' || (!$sentry && process.env.enviroment !== 'production'))
    ) {
      console.error('Error:', error)
      if (get(error, 'response')) {
        console.error('Error response:', get(error, 'response'))
      }
    }
  })
}
