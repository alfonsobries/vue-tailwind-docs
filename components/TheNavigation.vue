<template>
  <nav class="bg-white py-3 md:py-6">
    <t-dropdown
      variant="menu"
      :classes="undefined"
      class="relative"
    >
      <template slot="trigger" slot-scope="{ mousedownHandler, focusHandler, blurHandler, keydownHandler }">
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
          <nav class="relative flex items-center justify-between sm:h-10 md:justify-center">
            <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
              <div class="flex items-center justify-between w-full md:w-auto">
                <nuxt-link to="/" aria-label="Home" class="flex items-center">
                  <img class="h-8 w-auto sm:h-10 mr-2" src="@/assets/img/logo.svg" alt="Vue Tailwind">
                  VueTailwind
                </nuxt-link>
                <div class="-mr-2 flex items-center md:hidden">
                  <button
                    id="main-menu"
                    type="button"
                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    aria-label="Main menu"
                    aria-haspopup="true"
                    @mousedown="mousedownHandler"
                    @focus="focusHandler"
                    @blur="blurHandler"
                    @keydown="keydownHandler"
                  >
                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="hidden md:block">
              <a
                v-for="(item, index) in menu"
                :key="index"
                href="#"
                class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                :class="{
                  'ml-10': index !== 0
                }"
              >
                {{ item.text }}
              </a>
            </div>
            <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
              <span class="inline-flex rounded-md shadow">
                <nuxt-link
                  to="/login"
                  class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-orange-500 bg-white hover:text-orange-600 focus:outline-none focus:border-orange-300 focus:shadow-outline-orange active:bg-gray-50 active:text-orange-700 transition duration-150 ease-in-out"
                >
                  Log in
                </nuxt-link>
              </span>
            </div>
          </nav>
        </div>
      </template>

      <template slot-scope="{ hide }">
        <div class="rounded-lg shadow-md">
          <div class="rounded-lg bg-white shadow-xs overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
            <div class="px-5 pt-4 flex items-center justify-between">
              <div class="flex items-center">
                <img class="h-8 w-auto mr-2" src="@/assets/img/logo.svg" alt="Vue Tailwind">
                VueTailwind
              </div>
              <div class="-mr-2">
                <button
                  type="button"
                  class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  aria-label="Close menu"
                  @click="hide"
                >
                  <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="px-2 pt-2 pb-3">
              <a
                v-for="(item, index) in menu"
                :key="index"
                href="#"
                class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                role="menuitem"
              >
                {{ item.text }}
              </a>
            </div>
            <div>
              <nuxt-link
                to="/login"
                class="block w-full px-5 py-3 text-center font-medium text-orange-600 bg-gray-50 hover:bg-gray-100 hover:text-orange-700 focus:outline-none focus:bg-gray-100 focus:text-orange-700 transition duration-150 ease-in-out"
                role="menuitem"
              >
                Log in
              </nuxt-link>
            </div>
          </div>
        </div>
      </template>
    </t-dropdown>
  </nav>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      menu: [
        {
          text: 'Documentation'
        },
        {
          text: 'Theme Builder'
        },
        {
          text: 'Community Themes'
        },
        {
          text: 'Contribute'
        }
      ]
    }
  }
})
</script>
