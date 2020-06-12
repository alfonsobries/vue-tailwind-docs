<template>
  <div>
    <h2 class="text-2xl font-medium text-gray-900">
      Grab your code and build something awesome!
    </h2>
    <p>Copy or download the following code and install it in your project</p>

    <hr class="border-t my-4">

    <t-alert v-if="copied === true" variant="success" @hidden="copied = undefined">
      The code was copied correctly!
    </t-alert>
    <t-alert v-if="copied === false" variant="error" @hidden="copied = undefined">
      Something went wrong! We could not copy the code try to copy it manually.
    </t-alert>

    <div class="relative">
      <div class="absolute right-0 top-0 m-4 flex items-center">
        <button type="button" class="text-gray-500 hover:text-orange-500 flex items-center text-sm" @click="copyCode">
          <icon class="h-5 w-5 mr-2 ">
            <path id="Combined-Shape" d="M0,8.00585866 C0,6.89805351 0.897060126,6 2.00585866,6 L11.9941413,6 C13.1019465,6 14,6.89706013 14,8.00585866 L14,17.9941413 C14,19.1019465 13.1029399,20 11.9941413,20 L2.00585866,20 C0.898053512,20 0,19.1029399 0,17.9941413 L0,8.00585866 L0,8.00585866 Z M6,8 L2,8 L2,18 L12,18 L12,14 L15,14 L15,12 L18,12 L18,2 L8,2 L8,5 L6,5 L6,8 L12,8 L12,14 L17.9941413,14 C19.1029399,14 20,13.1019465 20,11.9941413 L20,2.00585866 C20,0.897060126 19.1019465,0 17.9941413,0 L8.00585866,0 C6.89706013,0 6,0.898053512 6,2.00585866 L6,8 Z" />
          </icon>
          Copy
        </button>

        <button type="button" class="text-gray-500 hover:text-orange-500 flex items-center text-sm ml-4" @click="downloadCode">
          <icon class="h-5 w-5 mr-2 ">
            <path id="Combined-Shape" d="M13,8 L13,2 L7,2 L7,8 L2,8 L10,16 L18,8 L13,8 Z M0,18 L20,18 L20,20 L0,20 L0,18 Z" />
          </icon>
          Download
        </button>
      </div>

      <div class="max-w-2xl overflow-auto">
        <no-ssr>
          <vue-code-highlight>{{ code }}</vue-code-highlight>
        </no-ssr>
      </div>

      <p class="my-4">
        *Dont forget to install the <span class="text-orange-500">vue-tailwind</span> package
      </p>

      <no-ssr>
        <vue-code-highlight>{{ installCode }}</vue-code-highlight>
      </no-ssr>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { component as VueCodeHighlight } from 'vue-code-highlight'
import copy from 'clipboard-copy'
import Icon from '@/components/Icon'

export default Vue.extend({
  components: {
    VueCodeHighlight,
    Icon
  },
  props: {
    theme: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      copied: undefined,
      installCode: `npm install --save vue-tailwind@next
// Or yarn add vue-tailwind@next`
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
  },
  methods: {
    copyCode () {
      copy(this.code)
        .then(() => {
          this.copied = true
        }).catch(() => {
          this.copied = false
        })
    },
    downloadCode () {
      const element = document.createElement('a')
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.code))
      element.setAttribute('download', 'vue-tailwind.js')

      element.style.display = 'none'
      document.body.appendChild(element)

      element.click()

      document.body.removeChild(element)
    }
  }
})
</script>
