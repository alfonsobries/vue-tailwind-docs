<template>
  <div class="p-4">
    <t-textarea
      v-model="currentValue"
      :classes="settings.classes"
      :variant="settings.variant ? settings.variant : undefined"
      :variants="settings.variants"
      :placeholder="settings.placeholder"
    />

    <p class="mt-4">
      <span class="text-gray-500 text-sm block">Current value: </span>
      <span class="whitespace-pre block bg-gray-200 font-mono p-2 rounded text-gray-900 text-sm">{{ currentValue }}</span>
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
