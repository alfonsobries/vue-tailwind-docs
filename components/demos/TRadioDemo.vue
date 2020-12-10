<template>
  <div>
    <div class="p-4">
      <div class="flex" :class="{'-mx-2': !settings.wrapped}">
        <div v-for="option in options" :key="option" :class="{'px-2': !settings.wrapped}">
          <t-radio
            v-model="currentValue"
            name="radio-example"
            :value="option"
            :fixed-classes="settings.fixedClasses"
            :classes="settings.classes"
            :variant="settings.variant ? settings.variant : undefined"
            :variants="settings.variants"
            :wrapped="settings.wrapped"
            :label="option"
          />
        </div>
      </div>
      <p class="mt-4">
        <span class="text-sm text-gray-500">Current value:</span>
        <span class="px-3 py-1 ml-2 font-mono text-sm text-gray-900 bg-gray-200 rounded">{{ currentValue || '-' }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import ComponentDemo from './ComponentDemo'

export default ComponentDemo.extend({
  data () {
    return {
      currentValue: 'Option A',
      options: [
        'Option A',
        'Option B',
        'Option C'
      ]
    }
  }
})
</script>
