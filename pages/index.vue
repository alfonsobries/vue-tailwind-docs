<template>
  <div class="container">
    <theme-builder />
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
