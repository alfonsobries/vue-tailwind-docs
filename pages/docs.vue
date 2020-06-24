<template>
  <docs :page="page" />
</template>

<script>
import Vue from 'vue'
import Docs from '@/components/Docs.vue'
export default Vue.extend({
  components: { Docs },
  async asyncData ({ $content }) {
    const page = await $content('home').fetch()

    return {
      page
    }
  }
})
</script>
