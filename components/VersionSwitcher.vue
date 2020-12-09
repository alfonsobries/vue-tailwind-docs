<template>
  <form class="relative hidden lg:block">
    <label>
      <span class="sr-only">VueTailwind Version</span>
      <select v-model="version" class="block py-1 pr-5 text-sm font-medium text-gray-500 transition-colors duration-200 bg-transparent border-transparent appearance-none focus:outline-none focus:text-gray-900 bg-none" @change="goToVersion">
        <option value="v2">v2.x</option>
        <option value="v1">v1.x</option>
        <option value="v0">v0.x</option>
      </select>
    </label>
    <svg class="w-5 h-5 text-gray-400 absolute top-1/2 right-0 -mt-2.5 pointer-events-none" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
  </form>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({

  data () {
    return {
      version: 'v2'
    }
  },
  methods: {
    goToVersion () {
      if (this.version === 'v1') {
        window.location.href = 'https://v1.vue-tailwind.com'
      }
      if (this.version === 'v0') {
        window.location.href = 'https://v0.vue-tailwind.com/'
      }
    }
  }
})
</script>
