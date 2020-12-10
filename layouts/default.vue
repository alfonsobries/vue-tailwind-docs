<template>
  <div>
    <div
      class="pt-16"
      :class="{
        'bg-gray-100 pattern': isHome
      }"
    >
      <the-navigation
        :transparent="isHome && !isScrolled"
      />

      <hero v-if="isHome" />
    </div>

    <main>
      <nuxt />
    </main>

    <footer>
      <div class="px-6 mt-5 bg-gray-100">
        <div class="max-w-screen-xl py-16 mx-auto lg:flex lg:items-center">
          <div class="lg:w-0 lg:flex-1">
            <h2 id="newsletter-headline" class="text-2xl leading-9 tracking-tight text-gray-700 font-semilbold sm:text-4xl sm:leading-10">
              Sign up for our newsletter
            </h2>
            <p class="max-w-3xl mt-3 text-gray-500">
              Stay up-to-date on news and updates about this project by email.
            </p>
          </div>
          <div class="max-w-md mt-8 lg:mt-0 lg:ml-8">
            <form aria-labelledby="newsletter-headline" @submit.prevent="submitNewsletter">
              <t-input-group
                :variant="{
                  'newsletterSuccess': newsletterSent,
                  'newsletter': !newsletterSent,
                }"
                :feedback="newsletterSent ? 'You have successfully subscribed to the newsletter!. check your inbox to confirm' :form.errors.get('email')"
              >
                <t-input
                  v-model="form.email"
                  :variant="{
                    'newsletterSuccess': newsletterSent,
                    'newsletter': !form.errors.has('email'),
                    'newsletterError': form.errors.has('email'),
                  }"
                  aria-label="Email address"
                  type="email"
                  required
                  class="w-full px-5 py-3 text-base leading-6 transition duration-150 ease-in-out border-2 rounded-md appearance-none focus:outline-none sm:max-w-xs"
                  placeholder="Enter your email"
                  @input="form.errors.clear('email')"
                />
                <div class="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button class="block px-5 py-3 text-white transition duration-100 ease-in-out bg-blue-500 border border-transparent rounded shadow-sm hover:bg-blue-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed">
                    Notify me
                  </button>
                </div>
              </t-input-group>
            </form>
            <p class="mt-3 text-sm leading-5 text-gray-500">
              I will never spam or share your email under any circustance.
            </p>
          </div>
        </div>
      </div>

      <div class="px-6 bg-white">
        <div class="justify-between max-w-screen-xl py-4 mx-auto text-center md:flex">
          <div class="flex justify-center md:order-2">
            <iframe
              class="h-8 rounded-md"
              src="https://github.com/sponsors/alfonsobries/button"
              title="Sponsor alfonsobries"
              height="35"
              width="116"
              style="border: 0;"
            />
          </div>
          <div class="mt-8 md:mt-0 md:order-1">
            <p class="inline-flex items-center text-base leading-6 text-center text-gray-600">
              Made with
              <icon class="w-5 h-5 mx-2 text-red-400 hover:text-red-500">
                <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
              </icon>
              by&nbsp;<a href="https://twitter.com/alfonsobries" class="hover:text-gray-700 hover:underline" target="_blank">Alfonso Bribiesca </a>

              <a href="https://twitter.com/alfonsobries" target="_blank" class="ml-6 text-gray-600 hover:text-gray-700">
                <span class="sr-only">Twitter</span>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://github.com/alfonsobries/vue-tailwind" target="_blank" class="ml-6 text-gray-600 hover:text-gray-700">
                <span class="sr-only">GitHub</span>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                </svg>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation'
import Icon from '@/components/Icon'
import Hero from '@/components/Hero'
import Form from 'vform'
export default {
  components: {
    TheNavigation,
    Icon,
    Hero
  },
  data () {
    return {
      loggingOut: false,
      showMenu: false,
      isScrolled: false,
      newsletterSent: false,
      form: new Form({
        email: ''
      })
    }
  },
  computed: {
    isHome () {
      return this.$route.name === 'index'
    }
  },
  mounted () {
    const self = this
    window.addEventListener('scroll', function () {
      self.isScrolled = this.scrollY > 0
    })

    this.isScrolled = window.scrollY > 0

    // eslint-disable-next-line no-undef
    docsearch({
      apiKey: '4aea9352059c96cd2e15f6e36965b3c7',
      indexName: 'vue-tailwind',
      inputSelector: '#search',
      debug: true // Set debug to true if you want to inspect the dropdown
    })
  },
  methods: {
    submitNewsletter () {
      this.newsletterSent = false
      this.form.post('/newsletter/subscribe')
        .then(() => {
          this.newsletterSent = true
        }).catch(this.$handleException)
    },
    async logout () {
      this.loggingOut = true
      await this.$auth.logout()
      await this.$nextTick()
      this.$router.push('/')
      this.loggingOut = false
      this.showMenu = false
    },
    toggleMenu () {
      this.showMenu = !this.showMenu
    },
    hideMenu () {
      this.showMenu = false
    }
  }
}
</script>

<style>
.pattern{
background-color: #f7fafc;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23e2e8f0' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E");
}
</style>
