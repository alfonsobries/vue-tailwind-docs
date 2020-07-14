<template>
  <div class="p-4">
    <t-button
      :fixed-classes="settings.fixedClasses"
      :classes="settings.classes"
      :variant="settings.variant ? settings.variant : undefined"
      :variants="settings.variants"
    >
      {{ currentValue }}
    </t-button>
  </div>
</template>

<script>
import ComponentDemo from './ComponentDemo'

export default ComponentDemo.extend({
  data () {
    return {
      currentValue: 'My button'
    }
  }
})
</script>
