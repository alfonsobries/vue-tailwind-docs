<template>
  <div class="bg-gray-100">
    <div class="max-w-screen-xl px-4 py-10 pb-10 mx-auto sm:px-6">
      <h1 class="mb-10 text-3xl font-medium leading-none tracking-tight text-gray-900">
        Build your own theme
      </h1>

      <theme-builder />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import ThemeBuilder from '~/components/ThemeBuilder.vue'

export default Vue.extend({
  components: {
    ThemeBuilder
  },

  head () {
    return {
      title: 'Theme Builder - VueTailwind',
      meta: [
        { hid: 'description', name: 'description', content: 'Tool to create, preview, store and share your personal theme for the vue-tailwind package.' }
      ]
    }
  }
})
</script>
