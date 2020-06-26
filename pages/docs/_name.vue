<template>
  <docs :page="page" />
</template>

<script>
import Vue from 'vue'
import Docs from '@/components/Docs.vue'

export default Vue.extend({
  components: { Docs },
  async asyncData ({ route, $content }) {
    return {
      page: await $content(route.params.name).fetch()
    }
  },

  head () {
    return {
      title: this.page.title + ' - VueTailwind',
      meta: [
        { hid: 'description', name: 'description', content: this.page.description }
      ]
    }
  }
})
</script>
