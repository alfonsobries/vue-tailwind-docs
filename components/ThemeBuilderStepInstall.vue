<template>
  <div>
    <h2 class="text-2xl font-medium text-gray-900">
      Choose the component you need
    </h2>
    <p>Select the components that you want to personalize</p>
    <hr class="border-t my-4">
    <fieldset>
      <pre>
        {{ theme }}
      </pre>
    </fieldset>
  </div>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
    theme: {
      type: Object,
      required: true
    }
  }
})
</script>
