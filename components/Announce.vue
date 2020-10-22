<template>
  <div v-if="show" class="fixed inset-x-0 bottom-0 pb-2 sm:pb-5">
    <div class="max-w-screen-xl px-2 mx-auto sm:px-6 lg:px-8">
      <div class="p-2 bg-orange-600 rounded-lg shadow-lg sm:p-3">
        <div class="flex flex-wrap items-center justify-between">
          <div class="flex items-center flex-1 w-0">
            <span class="flex p-2 bg-orange-800 rounded-lg">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            </span>
            <p class="ml-3 font-medium text-white truncate">
              <span class="md:hidden">
                New Dialog Component
              </span>
              <span class="hidden md:inline">
                I just released (v1.1.3) that includes a new <a class="underline" href="/docs/dialog">Dialog component</a>
              </span>
            </p>
          </div>
          <div class="flex-shrink-0 order-3 w-full mt-2 sm:order-2 sm:mt-0 sm:w-auto">
            <div class="rounded-md shadow-sm">
              <a href="/docs/release-notes#vue-tailwind-v13 " class="flex items-center justify-center px-4 py-2 text-sm font-medium leading-5 text-orange-600 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-orange-500 focus:outline-none focus:shadow-outline" @click="closeAnnounce">
                Read release notes →
              </a>
            </div>
          </div>
          <div class="flex-shrink-0 order-2 sm:order-3 sm:ml-2">
            <button type="button" class="flex p-2 -mr-1 transition duration-150 ease-in-out rounded-md hover:bg-orange-500 focus:outline-none focus:bg-orange-500" aria-label="Dismiss" @click="closeAnnounce">
              <!-- Heroicon name: x -->
              <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  mounted () {
    const showAnnounce = window.localStorage.getItem('hide-announce')
    if (showAnnounce === null || showAnnounce === undefined) {
      this.show = true
    }
  },
  methods: {
    closeAnnounce () {
      this.show = false
      window.localStorage.setItem('hide-announce', 1)
    }
  }
}
</script>
