<template>
  <div>
    <header class="bg-white shadow-sm">
      <div class="container mx-auto px-6 md:px-0">
        <h1 class="text-lg leading-6 font-semibold text-gray-900 py-4 mb-4">
          Explore the community contributions
        </h1>
      </div>
    </header>

    <header class="bg-white shadow-sm">
      <div class="container mx-auto px-6 md:px-0">
        <h1 class="text-lg leading-6 font-semibold text-gray-900 py-4 mb-4">
          Build your own theme
        </h1>
      </div>
    </header>

    <div class="container mx-auto">
      <theme-builder />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ThemeBuilder from '~/components/ThemeBuilder.vue'
export default Vue.extend({
  components: {
    ThemeBuilder
  }
})
</script>
