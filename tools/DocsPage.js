import Vue from 'vue'
import Docs from '@/components/Docs.vue'

const DocsPage = Vue.extend({
  components: { Docs },
  async asyncData ({ route, $content }) {
    const pageName = route.name.split('-').pop()
    const page = await $content(pageName).fetch()

    return {
      page
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

export default DocsPage
