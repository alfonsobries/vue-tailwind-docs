<template>
  <div class="p-4">
    <t-input
      v-model="currentValue"
      :classes="settings.classes"
      :variant="settings.variant ? settings.variant : undefined"
      :variants="settings.variants"
    />

    <p class="mt-4">
      <span class="text-gray-500 text-sm">Current value: </span>
      <span class="ml-2 bg-gray-200 font-mono px-3 py-1 rounded text-gray-900  text-sm">{{ currentValue }}</span>
    </p>
  </div>
</template>

<script>
import ComponentDemo from './ComponentDemo'

export default ComponentDemo.extend({
  data () {
    return {
      currentValue: 'I love vuejs 😎'
    }
  }
})
</script>
