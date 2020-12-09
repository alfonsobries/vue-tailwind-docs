<template>
  <form class="relative hidden lg:block">
    <label>
      <span class="sr-only">VueTailwind Version</span>
      <select v-model="version" class="py-1 pr-6 text-sm font-medium text-gray-500 bg-transparent border-transparent form-select" @change="goToVersion">
        <option value="v2">v2.x</option>
        <option value="v1">v1.x</option>
        <option value="v0">v0.x</option>
      </select>
    </label>
  </form>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({

  data () {
    return {
      version: 'v1'
    }
  },
  methods: {
    goToVersion () {
      if (this.version === 'v2') {
        window.location.href = 'https://www.vue-tailwind.com'
      }
      if (this.version === 'v0') {
        window.location.href = 'https://v0.vue-tailwind.com/'
      }
    }
  }
})
</script>
