<template>
  <div class="flex flex-col items-center justify-center bg-white p-4 relative mt-2 shadow-sm rounded border-dashed border">
    <span class="absolute left-0 top-0 m-2 pointer-events-none text-gray-500 uppercase text-sm">Preview</span>
    <div class="relative">
      <component
        :is="componentName"
        :value="componentValue"
        :classes="classes ? classes : null"
        v-bind="componentAttribs"
      />
    </div>
  </div>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    classes: {
      type: [String, Object],
      default: null
    },
    componentName: {
      type: String,
      required: true
    }
  },
  computed: {
    componentValue () {
      return 'Hello there!'
    },
    componentAttribs () {
      if (this.componentName === 'TSelect') {
        return {
          options: ['Hello there!', '¡Hola mundo!', '¡Hello world!']
        }
      }
      return {}
    }

  }
})
</script>
