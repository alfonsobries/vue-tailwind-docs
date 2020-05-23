<template>
  <div class="flex flex-col items-center justify-center bg-white p-4 relative mt-2 shadow-sm rounded border-dashed border">
    <span class="absolute left-0 top-0 m-2 pointer-events-none text-gray-500 uppercase text-sm">Preview</span>
    <t-input value="Hello there" class="relative" :classes="classes ? classes : null" />
  </div>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    classes: {
      type: [String, Object],
      default: null
    }
  }

})
</script>
