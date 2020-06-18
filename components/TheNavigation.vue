<template>
  <nav>
    <t-dropdown
      variant="menu"
      :classes="undefined"
      :toggle-on-focus="false"
    >
      <template slot="trigger" slot-scope="{ mousedownHandler, focusHandler, blurHandler, keydownHandler, isShown }">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex">
              <div class="flex-shrink-0 flex items-center">
                <img class="block lg:hidden h-8 w-auto" src="@/assets/img/logo.svg" alt="Vue Tailwind">
                <img class="hidden lg:block h-8 w-auto" src="@/assets/img/logo.svg" alt="Vue Tailwind">
              </div>
              <div class="hidden sm:ml-6 sm:flex">
                <a
                  v-for="(menuItem, index) in menu"
                  :key="index"
                  href="#"
                  :class="{
                    'inline-flex items-center px-1 pt-1 border-b-2 border-orange-500 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-orange-700 transition duration-150 ease-in-out': index === 0,
                    'ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out': index > 0
                  }"
                >
                  {{ menuItem.text }}
                </a>
              </div>
            </div>

            <div class="hidden sm:ml-6 sm:flex sm:items-center">
              <t-dropdown class="ml-3">
                <template
                  slot="trigger"
                  slot-scope="{ mousedownHandler, focusHandler, blurHandler, keydownHandler, isShown }"
                >
                  <button
                    id="user-menu"
                    class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
                    :class="{ 'border-gray-300': isShown }"
                    aria-label="User menu"
                    aria-haspopup="true"
                    @mousedown="mousedownHandler"
                    @focus="focusHandler"
                    @blur="blurHandler"
                    @keydown="keydownHandler"
                  >
                    <img
                      class="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    >
                  </button>
                </template>

                <template slot-scope="{ blurHandler }">
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                    role="menuitem"
                    @blur="blurHandler"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                    role="menuitem"
                    @blur="blurHandler"
                  >Settings
                  </a>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                    role="menuitem"
                    @blur="blurHandler"
                  >Sign out
                  </a>
                </template>
              </t-dropdown>
            </div>

            <div class="-mr-2 flex items-center sm:hidden">
              <!-- Mobile menu button -->
              <button
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                aria-label="Main menu"
                aria-expanded="false"
                @mousedown="mousedownHandler"
                @focus="focusHandler"
                @blur="blurHandler"
                @keydown="keydownHandler"
              >
                <svg v-if="isShown" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <svg v-else class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </template>

      <div class="pt-2 pb-3">
        <a
          v-for="(menuItem, index) in menu"
          :key="index"
          href="#"
          :class="{
            'block pl-3 pr-4 py-2 border-l-4 border-orange-500 text-base font-medium text-orange-700 bg-orange-50 focus:outline-none focus:text-orange-800 focus:bg-orange-100 focus:border-orange-700 transition duration-150 ease-in-out': index === 0,
            'mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out': index > 0
          }"
        >
          {{ menuItem.text }}
        </a>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-200">
        <div class="flex items-center px-4">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
          </div>
          <div class="ml-3">
            <div class="text-base font-medium leading-6 text-gray-800">
              Tom Cook
            </div>
            <div class="text-sm font-medium leading-5 text-gray-500">
              tom@example.com
            </div>
          </div>
        </div>
        <div class="mt-3">
          <a href="#" class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out">Your Profile
          </a>
          <a href="#" class="mt-1 block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out">Settings
          </a>
          <a href="#" class="mt-1 block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out">Sign out
          </a>
        </div>
      </div>
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
