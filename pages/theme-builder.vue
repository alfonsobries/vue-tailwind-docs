<template>
  <div class="bg-gray-100">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 pb-10 py-10">
      <h1 class="mb-10 leading-none text-gray-900 font-medium text-3xl tracking-tight">
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
