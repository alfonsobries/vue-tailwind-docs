<template>
  <div class="max-w-full overflow-auto">
    <tip class="items-stretch text-sm leading-5 border-b">
      In this tab you can view and download or copy the settings to make your theme look like the <a href="#" class="font-medium underline" @click.prevent="$emit('select', 'demo')">demo</a>. If you want to modify these settings use the <a href="#" class="font-medium underline" @click.prevent="$emit('select', 'customize')">customize</a> tab.
    </tip>
    <div class="p-4">
      <t-alert class="mb-4" :show="copied === true" variant="success" @hidden="copied = undefined">
        The code was copied correctly!
      </t-alert>

      <t-alert class="mb-4" :show="copied === false" variant="error" @hidden="copied = undefined">
        Something went wrong! We could not copy the code try to copy it manually.
      </t-alert>

      <div class="relative px-2 -mb-1">
        <button
          type="button"
          class="px-6 py-2 text-xs font-semibold text-white border shadow-lg rounded-t-md"
          :class="{ 'bg-gray-800 border-gray-800 ': syntax === 'new', 'bg-gray-500 border-gray-500': syntax !== 'new' }"
          @click="syntax = 'new'"
        >
          Install within library
        </button>
        <button
          type="button"
          class="px-6 py-2 text-xs font-semibold text-white border shadow-lg rounded-t-md"
          :class="{ 'bg-gray-800 border-gray-800 ': syntax === 'select', 'bg-gray-500 border-gray-500': syntax !== 'select' }"
          @click="syntax = 'select'"
        >
          Only install this component
        </button>
        <button
          type="button"
          class="px-6 py-2 text-xs font-semibold text-white border shadow-lg rounded-t-md"
          :class="{ 'bg-gray-800 border-gray-800 ': syntax === 'old', 'bg-gray-500 border-gray-500': syntax !== 'old' }"
          @click="syntax = 'old'"
        >
          Install with old syntax
        </button>
      </div>

      <div class="relative">
        <div class="absolute top-0 right-0 flex items-center m-4">
          <button type="button" class="flex items-center text-sm text-gray-500 hover:text-orange-500" @click="copyCode">
            <icon class="w-5 h-5 mr-2 ">
              <path id="Combined-Shape" d="M0,8.00585866 C0,6.89805351 0.897060126,6 2.00585866,6 L11.9941413,6 C13.1019465,6 14,6.89706013 14,8.00585866 L14,17.9941413 C14,19.1019465 13.1029399,20 11.9941413,20 L2.00585866,20 C0.898053512,20 0,19.1029399 0,17.9941413 L0,8.00585866 L0,8.00585866 Z M6,8 L2,8 L2,18 L12,18 L12,14 L15,14 L15,12 L18,12 L18,2 L8,2 L8,5 L6,5 L6,8 L12,8 L12,14 L17.9941413,14 C19.1029399,14 20,13.1019465 20,11.9941413 L20,2.00585866 C20,0.897060126 19.1019465,0 17.9941413,0 L8.00585866,0 C6.89706013,0 6,0.898053512 6,2.00585866 L6,8 Z" />
            </icon>
            Copy
          </button>

          <button type="button" class="flex items-center ml-4 text-sm text-gray-500 hover:text-orange-500" @click="downloadCode">
            <icon class="w-5 h-5 mr-2 ">
              <path id="Combined-Shape" d="M13,8 L13,2 L7,2 L7,8 L2,8 L10,16 L18,8 L13,8 Z M0,18 L20,18 L20,20 L0,20 L0,18 Z" />
            </icon>
            Download
          </button>
        </div>

        <no-ssr>
          <vue-code-highlight>{{ codeToUse }}</vue-code-highlight>
        </no-ssr>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { component as VueCodeHighlight } from 'vue-code-highlight'
import copy from 'clipboard-copy'
import Icon from '@/components/Icon'
import kebabCase from 'lodash/kebabCase'
export default Vue.extend({
  components: {
    VueCodeHighlight,
    Icon
  },
  props: {
    componentName: {
      type: String,
      required: true
    },
    settings: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      copied: undefined,
      syntax: 'new'
    }
  },
  computed: {
    codeToUse () {
      if (this.syntax === 'new') {
        return this.newSyntax
      }

      if (this.syntax === 'old') {
        return this.oldSyntax
      }

      return this.selectSyntax
    },
    oldSyntax () {
      const code = {}

      code[this.componentName] = this.settings

      const settings = JSON.stringify(code, null, 2)
        .replace(/"([^"]+)":/g, '$1:')
        .replace(/\"/g, '\'')
      return `import Vue from 'vue'
import VueTailwind from 'vue-tailwind/dist/full'

const settings = ${settings}

Vue.use(VueTailwind, settings)
`
    },
    newSyntax () {
      const themeV2 = {}

      themeV2[kebabCase(this.componentName)] = {
        component: this.componentName,
        props: this.settings
      }

      let settings = JSON.stringify(themeV2, null, 2)
        .replace(/"([^"]+)":/g, '$1:')
        .replace(/\"/g, '\'')

      settings = settings.replace(`${kebabCase(this.componentName)}:`, `'${kebabCase(this.componentName)}':`)
      settings = settings.replace(`'${this.componentName}'`, this.componentName)

      return `import Vue from 'vue'
import VueTailwind from 'vue-tailwind'
import {
  ${
    this.componentName
  },
} from 'vue-tailwind/dist/components'

const settings = ${settings}

Vue.use(VueTailwind, settings)
`
    },
    selectSyntax () {
      const themeV2 = {}

      themeV2[kebabCase(this.componentName)] = {
        component: this.componentName,
        props: this.settings
      }

      let settings = JSON.stringify(themeV2, null, 2)
        .replace(/"([^"]+)":/g, '$1:')
        .replace(/\"/g, '\'')

      settings = settings.replace(`${kebabCase(this.componentName)}:`, `'${kebabCase(this.componentName)}':`)
      settings = settings.replace(`'${this.componentName}'`, this.componentName)

      return `import Vue from 'vue'
import VueTailwind from 'vue-tailwind'
import ${this.componentName} from 'vue-tailwind/dist/${kebabCase(this.componentName)}';

const settings = ${settings}

Vue.use(VueTailwind, settings)

`
    }
  },
  methods: {
    copyCode () {
      copy(this.codeToUse)
        .then(() => {
          this.copied = true
        }).catch(() => {
          this.copied = false
        })
    },
    downloadCode () {
      const element = document.createElement('a')
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.codeToUse))
      element.setAttribute('download', 'vue-tailwind.js')

      element.style.display = 'none'
      document.body.appendChild(element)

      element.click()

      document.body.removeChild(element)
    }
  }
})
</script>
