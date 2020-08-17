<template>
  <div>
    <div class="p-4">
      <t-toggle
        v-model="currentValue"
        :fixed-classes="settings.fixedClasses"
        :classes="settings.classes"
        :variant="settings.variant ? settings.variant : undefined"
        :variants="settings.variants"
        :value="settings.value"
        :unchecked-value="settings.uncheckedValue"
      />
      <p class="mt-4">
        <span class="text-gray-500 text-sm">Current value:</span>
        <span class="ml-2 bg-gray-200 font-mono px-3 py-1 rounded text-gray-900 text-sm">{{ currentValue }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import ComponentDemo from './ComponentDemo'

export default ComponentDemo.extend({
  data () {
    return {
      currentValue: 'accept'
    }
  },
  watch: {
    'settings.value' (value) {
      this.currentValue = value
    },
    'settings.uncheckedValue' (uncheckedValue) {
      this.currentValue = uncheckedValue
    }
  }
})
</script>
