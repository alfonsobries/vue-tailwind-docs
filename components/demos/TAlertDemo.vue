<template>
  <div class="p-4">
    <t-alert
      :show.sync="localShow"
      :classes="settings.classes"
      :variant="settings.variant ? settings.variant : undefined"
      :variants="settings.variants"
      :fixed-classes="settings.fixedClasses"
      :dismissible="settings.dismissible"
    >
      {{ settings.text }}
    </t-alert>
  </div>
</template>

<script>
import ComponentDemo from './ComponentDemo'

export default ComponentDemo.extend({
  data () {
    return {
      localShow: true
    }
  },
  watch: {
    localShow (show) {
      if (!show) {
        setTimeout(() => {
          this.localShow = true
        }, 1000)
      }
    }
  }
})
</script>
