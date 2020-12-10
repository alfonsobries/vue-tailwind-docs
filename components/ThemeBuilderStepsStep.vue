<template>
  <div
    class="flex w-full p-3 my-3 text-left rounded"
    :class="{
      'cursor-not-allowed': !isEnabled,
      'group hover:bg-gray-900 cursor-pointer' : isEnabled,
    }"
    @click.prevent="isEnabled ? $emit('select') : undefined"
  >
    <div class="flex-1">
      <h3
        class="text-2xl leading-tight"
        :class="{
          'text-white' : isActive,
          'text-gray-500' : !isActive,
          'group-hover:text-gray-600' : !isActive && isEnabled
        }"
      >
        {{ step.label }}
      </h3>
      <p
        class="text-sm"
        :class="{
          'text-white' : isActive,
          'text-gray-500' : !isActive,
          'group-hover:text-gray-600' : !isActive && isEnabled
        }"
      >
        {{ step.description }}
      </p>
    </div>
    <span
      class="flex items-center justify-center w-12 h-12 p-3 -mr-12 rounded-full shadow-inner"
      :class="{
        'bg-blue-500' : isActive,
        'bg-gray-700' : !isActive
      }"
    >
      {{ index + 1 }}
    </span>
  </div>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
    currentStepNumber: {
      type: Number,
      required: true
    },
    step: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    lastActiveStep: {
      type: Number,
      required: true
    }
  },
  computed: {
    isActive () {
      return this.currentStepNumber === this.index
    },
    isEnabled () {
      return this.lastActiveStep >= this.index
    }
  }
})
</script>
