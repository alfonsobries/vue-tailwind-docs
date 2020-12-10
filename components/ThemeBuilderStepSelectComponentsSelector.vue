<template>
  <div
    class="flex items-start mt-4"
    :class="{'opacity-50': model === undefined}"
  >
    <div class="flex items-center h-5 mr-3">
      <t-checkbox v-if="model === undefined" :id="value" disabled :value="value" />
      <t-checkbox v-else :id="value" v-model="localValue" :value="value" />
    </div>
    <div class="flex-grow pl-2 ">
      <label :for="value" class="mb-1 text-sm font-medium leading-5 text-gray-700">{{ label }}</label>
      <div class="mt-1" :class="{ 'opacity-50': localValue !== undefined && ! localValue.includes(value) }">
        <slot />
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  model: {
    prop: 'model',
    event: 'input'
  },
  props: {
    model: {
      type: Array,
      default: undefined
    },
    value: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      localValue: this.model
    }
  },
  watch: {
    localValue (localValue) {
      this.$emit('input', localValue)
    },
    model (model) {
      this.localValue = model
    }
  }
})
</script>
