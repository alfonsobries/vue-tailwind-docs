<template>
  <t-input-demo v-if="component === 't-input'" :params="params" />
  <t-textarea-demo v-else-if="component === 't-textarea'" :params="params" />
  <t-select-demo v-else-if="component === 't-select'" :params="params" />
</template>

<script>
import Vue from 'vue'
import TInputDemo from '@/components/demos/TInputDemo'
import TTextareaDemo from '@/components/demos/TTextareaDemo'
import TSelectDemo from '@/components/demos/TSelectDemo'

export default Vue.extend({
  layout: 'iframe',
  components: {
    TInputDemo,
    TTextareaDemo,
    TSelectDemo
  },
  data () {
    return {
      component: this.$route.params.slug,
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
