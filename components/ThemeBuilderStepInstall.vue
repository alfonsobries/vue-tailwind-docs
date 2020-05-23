<template>
  <div>
    <h2 class="text-2xl font-medium text-gray-900">
      Choose the component you need
    </h2>
    <p>Select the components that you want to personalize</p>
    <hr class="border-t my-4">
    <vue-code-highlight>{{ code }}</vue-code-highlight>
  </div>
</template>
<script>
import Vue from 'vue'
import { component as VueCodeHighlight } from 'vue-code-highlight'

export default Vue.extend({
  components: {
    VueCodeHighlight
  },
  props: {
    theme: {
      type: Object,
      required: true
    }
  },
  computed: {
    code () {
      const theme = JSON.stringify(this.theme, null, 2)
        .replace(/"([^"]+)":/g, '$1:')
        .replace(/\"/g, '\'')
      return `import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

const theme = ${theme}

Vue.use(VueTailwind, theme)

`
    }
  }
})
</script>
