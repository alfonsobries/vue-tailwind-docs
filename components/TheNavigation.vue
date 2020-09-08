<template>
  <t-dropdown
    ref="menu"
    variant="menu"
    class="fixed top-0 left-0 z-40 w-full h-16 transition duration-500 ease-in-out bg-white shadow-sm"
    :class="{
      'lg:shadow-none lg:bg-transparent': transparent,
    }"
    toggle-on-click
    toggle-on-focus
    tag-name="nav"
  >
    <template slot="trigger" slot-scope="{ mousedownHandler, focusHandler, blurHandler, keydownHandler, isShown }">
      <div
        class="relative z-50 max-w-screen-xl px-2 mx-auto bg-white shadow-sm sm:px-4 lg:px-8 lg:shadow-none lg:bg-transparent"
      >
        <div class="relative z-50 flex items-center justify-between h-16">
          <div class="flex items-center px-2 lg:px-0">
            <nuxt-link to="/" aria-label="Home" class="flex items-center flex-shrink-0">
              <img class="w-auto h-8 mr-2 sm:h-10" src="@/assets/img/logo.svg" alt="Vue Tailwind">
              VueTailwind
            </nuxt-link>
            <div class="hidden lg:block lg:ml-6">
              <div class="flex">
                <nuxt-link
                  v-for="(item, index) in mainMenu"
                  :key="index"
                  :to="item.to"
                  class="px-3 py-1 ml-4 text-sm font-medium leading-5 text-gray-600 transition duration-150 ease-in-out rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                  active-class="text-gray-900 bg-gray-100"
                >
                  {{ item.text }}
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="flex justify-center flex-1 px-2 lg:ml-6 lg:justify-end">
            <label for="search" class="sr-only">Search</label>
            <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 z-10 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                </svg>
              </div>
              <input
                id="search"
                autocomplete="off"
                class="block w-full py-2 pl-10 pr-3 leading-5 text-gray-700 placeholder-gray-600 transition duration-150 ease-in-out bg-gray-200 border border-transparent rounded-md focus:outline-none focus:bg-gray-300 focus:text-gray-900 sm:text-sm"
                :class="{
                  'lg:bg-white lg:placeholder-gray-500 ': transparent
                }"
                placeholder="Search the docs (Press &quot;/&quot; to focus)"
                type="search"
              >
            </div>
          </div>

          <!-- <search-box :transparent="transparent" /> -->
          <div class="flex lg:hidden">
            <button
              class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
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
              <svg v-if="!isShown" class="block w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg v-else class="block w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="hidden lg:block lg:ml-4">
            <div class="flex items-center">
              <a href="https://twitter.com/alfonsobries" target="_blank" class="text-gray-600 hover:text-gray-700">
                <span class="sr-only">Twitter</span>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>

              <a href="https://github.com/alfonsobries/vue-tailwind" target="_blank" class="mx-6 text-gray-600 hover:text-gray-700">
                <span class="sr-only">GitHub</span>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                </svg>
              </a>

              <iframe
                class="h-8"
                src="https://github.com/sponsors/alfonsobries/button"
                title="Sponsor alfonsobries"
                height="35"
                width="116"
                style="border: 0;"
              />

              <t-dropdown class="relative flex-shrink-0 ml-2" variant="bitcoin">
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
                    id="donate-btc"
                    class="flex items-center h-8 px-4 text-sm text-white transition duration-150 ease-in-out bg-white border border-gray-400 rounded-lg focus:outline-none focus:shadow-solid"
                    :class="{ 'border-gray-300': userMenuIsShown }"
                    aria-label="User menu"
                    aria-haspopup="true"
                    @mousedown="userMenuMousedownHandler"
                    @focus="userMenuFocusHandler"
                    @blur="userMenuBlurHandler"
                    @keydown="userMenuKeydownHandler"
                  >
                    <svg class="w-5 h-5 mr-2" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none" fill-rule="evenodd">
                        <circle fill="#FFAD02" cx="19" cy="19" r="19" />
                        <path d="M24.7 19.68a3.63 3.63 0 0 0 1.47-2.06c.74-2.77-.46-4.87-3.2-5.6l.89-3.33a.23.23 0 0 0-.16-.28l-1.32-.35a.23.23 0 0 0-.28.15l-.89 3.33-1.75-.47.88-3.32a.23.23 0 0 0-.16-.28l-1.31-.35a.23.23 0 0 0-.28.15l-.9 3.33-3.73-1a.23.23 0 0 0-.27.16l-.36 1.33c-.03.12.04.25.16.28l.22.06a1.83 1.83 0 0 1 1.28 2.24l-1.9 7.09a1.83 1.83 0 0 1-2.07 1.33.23.23 0 0 0-.24.12l-.69 1.24a.23.23 0 0 0 0 .2c.02.07.07.12.14.13l3.67.99-.89 3.33c-.03.12.04.24.16.27l1.32.35c.12.03.24-.04.28-.16l.89-3.32 1.76.47-.9 3.33c-.02.12.05.24.16.27l1.32.35c.12.03.25-.04.28-.16l.9-3.32.87.23c2.74.74 4.83-.48 5.57-3.25.35-1.3-.05-2.6-.92-3.48zm-5.96-5.95l2.64.7a1.83 1.83 0 0 1 1.28 2.24 1.83 1.83 0 0 1-2.23 1.3l-2.64-.7.95-3.54zm1.14 9.8l-3.51-.95.95-3.54 3.51.94a1.83 1.83 0 0 1 1.28 2.24 1.83 1.83 0 0 1-2.23 1.3z" fill="#FFF" />
                      </g>
                    </svg>
                    <span class="flex flex-col text-sm leading-none text-left">
                      <span class="text-xs text-gray-500">Donate</span>
                      <span class="font-semibold text-gray-600">BTC</span>
                    </span>
                  </button>
                </div>
                <template>
                  <div class="p-4" role="menu" aria-orientation="vertical" aria-labelledby="donate-btc">
                    <p class="text-xs font-semibold text-gray-600 uppercase">
                      Bitcoin Address:
                    </p>
                    <p>1NqV86kF42bTKv8aHjrJae8HHRU1JzvyUA</p>
                    <p class="text-center">
                      <img class="max-w-full mx-auto" src="@/assets/img/bitcoin.png">
                    </p>
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

      <!-- <div class="pt-4 pb-3 border-t border-gray-300">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img class="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
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
        <div class="px-2 mt-3">
          <a href="#" class="block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300">Your Profile
          </a>
          <a href="#" class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300">Settings
          </a>
          <a href="#" class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300">Sign out
          </a>
        </div>
      </div> -->
    </template>
  </t-dropdown>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import SideNavigation from '@/components/SideNavigation'
// import SearchBox from '@/components/SearchBox'
export default Vue.extend({
  components: {
    SideNavigation
    // SearchBox
  },
  props: {
    transparent: {
      type: Boolean,
      required: true
    }
  },
  computed: mapGetters({
    mainMenu: 'nav/main'
  }),
  created () {
    this.$root.$on('routeChanged', () => {
      if (this.$refs.menu) {
        this.$refs.menu.doHide()
      }
    })
  }
})
</script>
