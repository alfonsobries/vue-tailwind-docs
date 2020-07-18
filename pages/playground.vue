<template>
  <client-only>
    <component :is="`${componentName}-demo`" :params="params" />
  </client-only>
</template>

<script>
import Vue from 'vue'
import kebabCase from 'lodash/kebabCase'
export default Vue.extend({
  layout: 'iframe',
  data () {
    return {
      componentName: kebabCase(this.$route.query.component),
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
