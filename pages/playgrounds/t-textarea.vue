<template>
  <t-textarea-demo :params="params" />
</template>

<script>
import Vue from 'vue'
import TTextareaDemo from '@/components/demos/TTextareaDemo'

export default Vue.extend({
  layout: 'iframe',
  components: {
    TTextareaDemo
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
