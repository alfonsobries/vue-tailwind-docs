<template>
  <t-input-demo :params="params" />
</template>

<script>
import Vue from 'vue'
import TInputDemo from '@/components/demos/TInputDemo'

export default Vue.extend({
  layout: 'iframe',
  components: {
    TInputDemo
  },
  data () {
    return {
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
