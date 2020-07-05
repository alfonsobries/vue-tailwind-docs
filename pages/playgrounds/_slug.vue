<template>
  <component :is="`${componentName}-demo`" :params="params" />
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  layout: 'iframe',
  data () {
    return {
      componentName: this.$route.params.slug,
      params: this.$route.query
    }
  },
  watch: {
    '$route.query' (query) {
      this.params = query
    }
  }
})
</script>
