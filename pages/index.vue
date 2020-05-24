<template>
  <div class="bg-gray-100 py-6">
    <header>
      <div class="container mx-auto md:px-0">
        <h2 class="text-3xl text-center font-semibold text-gray-900 mb-4">
          Build your own theme
        </h2>
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
