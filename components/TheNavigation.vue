<template>
  <t-dropdown
    ref="menu"
    variant="menu"
    class="fixed top-0 left-0 w-full z-50 transition ease-in-out duration-500 bg-white shadow-sm h-16"
    :class="{
      'lg:shadow-none lg:bg-transparent': transparent,
    }"
    toggle-on-click
    toggle-on-focus
    tag-name="nav"
  >
    <template slot="trigger" slot-scope="{ mousedownHandler, focusHandler, blurHandler, keydownHandler, isShown }">
      <div
        class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 z-50 relative bg-white shadow-sm lg:shadow-none lg:bg-transparent"
      >
        <div class="relative flex items-center justify-between h-16 z-50">
          <div class="flex items-center px-2 lg:px-0">
            <nuxt-link to="/" aria-label="Home" class="flex-shrink-0 flex items-center">
              <img class="h-8 w-auto sm:h-10 mr-2" src="@/assets/img/logo.svg" alt="Vue Tailwind">
              VueTailwind
            </nuxt-link>
            <div class="hidden lg:block lg:ml-6">
              <div class="flex">
                <nuxt-link
                  v-for="(item, index) in mainMenu"
                  :key="index"
                  :to="item.to"
                  class="ml-4 px-3 py-1 rounded-md text-sm leading-5 font-medium text-gray-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 transition duration-150 ease-in-out"
                  active-class="bg-gray-100 text-gray-900"
                >
                  {{ item.text }}
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
            <div class="max-w-lg w-full lg:max-w-xs">
              <label for="search" class="sr-only">Search</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                  </svg>
                </div>
                <input
                  id="search"
                  v-model="query"
                  autocomplete="off"
                  class="block w-full pl-10 pr-3 py-2 border border-transparent focus:outline-none focus:bg-gray-300 focus:text-gray-900 rounded-md leading-5 sm:text-sm transition duration-150 ease-in-out bg-gray-200 text-gray-700 placeholder-gray-600"
                  :class="{
                    'lg:bg-white lg:placeholder-gray-500 ': transparent
                  }"
                  placeholder="Search the docs (Press &quot;/&quot; to focus)"
                  type="search"
                >

                <!-- <ul v-if="articles.length">
                  <li v-for="article of articles" :key="article.slug">
                    <NuxtLink :to="{ name: 'docs', params: { slug: article.slug } }">
                      {{ article.title }}
                    </NuxtLink>
                  </li>
                </ul> -->
              </div>
            </div>
          </div>
          <div class="flex lg:hidden">
            <button
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 transition duration-150 ease-in-out"
              :class="{
                'bg-gray-2  00': isShown
              }"
              aria-label="Main menu"
              :aria-expanded="isShown ? 'true': 'false'"
              @mousedown="mousedownHandler"
              @focus="focusHandler"
              @blur="blurHandler"
              @keydown="keydownHandler"
            >
              <svg v-if="!isShown" class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg v-else class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="hidden lg:block lg:ml-4">
            <div class="flex items-center">
              <t-dropdown class="ml-2 relative flex-shrink-0">
                <div
                  slot="trigger"
                  slot-scope="{
                    mousedownHandler: userMenuMousedownHandler,
                    focusHandler: userMenuFocusHandler,
                    blurHandler: userMenuBlurHandler,
                    keydownHandler: userMenuKeydownHandler,
                    isShown: userMenuIsShown
                  }"
                >
                  <button
                    id="user-menu"
                    class="flex text-sm rounded-full text-white focus:outline-none focus:shadow-solid transition duration-150 ease-in-out border-2 border-gray-200"
                    :class="{ 'border-gray-300': userMenuIsShown }"
                    aria-label="User menu"
                    aria-haspopup="true"
                    @mousedown="userMenuMousedownHandler"
                    @focus="userMenuFocusHandler"
                    @blur="userMenuBlurHandler"
                    @keydown="userMenuKeydownHandler"
                  >
                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                  </button>
                </div>
                <template>
                  <div class="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                      role="menuitem"
                    >
                      Your Profile
                    </a>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                      role="menuitem"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                      role="menuitem"
                    >
                      Sign out
                    </a>
                  </div>
                </template>
              </t-dropdown>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template>
      <side-navigation />

      <div class="pt-4 pb-3 border-t border-gray-300">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
          </div>
          <div class="ml-3">
            <div class="text-base font-medium leading-6 text-gray-900">
              Tom Cook
            </div>
            <div class="text-sm font-medium leading-5 text-gray-700">
              tom@example.com
            </div>
          </div>
        </div>
        <div class="mt-3 px-2">
          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 transition duration-150 ease-in-out">Your Profile
          </a>
          <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 transition duration-150 ease-in-out">Settings
          </a>
          <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 transition duration-150 ease-in-out">Sign out
          </a>
        </div>
      </div>
    </template>
  </t-dropdown>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import SideNavigation from '@/components/SideNavigation'
export default Vue.extend({
  components: {
    SideNavigation
  },
  props: {
    transparent: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      query: '',
      articles: []

    }
  },
  computed: mapGetters({
    mainMenu: 'nav/main'
  }),
  watch: {
    async query (query) {
      if (!query) {
        this.articles = []
        return
      }

      this.articles = await this.$content()
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .limit(12)
        .search(query)
        .fetch()
    }
  },

  created () {
    this.$root.$on('routeChanged', () => {
      this.$refs.menu.doHide()
    })
  }
})
</script>
