require('dotenv').config()

export default {
  /*
  ** Headers of the page
  */
  head: {
    title: 'VueTailwind - Customizable Vue Components for TailwindCSS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Set of customizable Vue components that works great with TailwindCSS Framework' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  env: {
    apiUrl: process.env.API_URL || 'https://vue-tailwind-themes-api.test'
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@plugins/axios.js',
    '@plugins/vue-tailwind.js',
    '@plugins/exception-handler.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxt/content'
  ],
  content: {
    markdown: {
      // prism: {
      //   theme: false
      // }
    }
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/login', method: 'post' },
          logout: { url: '/logout', method: 'post' },
          user: { url: '/user', method: 'get', propertyName: '' }
        },
        tokenRequired: false,
        tokenType: false
      }
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.API_URL || 'https://vue-tailwind-themes-api.test',
    credentials: true,
    common: {
      Accept: 'application/json'
    }
  }

}
