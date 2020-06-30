<template>
  <t-input-playground />
</template>

<script>
import Vue from 'vue'
import TInputPlayground from '@/components/playgrounds/TInputPlayground'

export default Vue.extend({
  layout: 'iframe',
  components: {
    TInputPlayground
  }
})
</script>
