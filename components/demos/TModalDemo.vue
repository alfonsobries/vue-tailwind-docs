<template>
  <t-modal
    v-model="show"
    :focus-on-open="false"
    :disable-body-scroll="false"
    :esc-to-close="false"
    :classes="settings.classes"
    :variant="settings.variant ? settings.variant : undefined"
    :variants="settings.variants"
    :fixed-classes="settings.fixedClasses"
    :dismissible="settings.dismissible"
    :header="settings.header ? settings.header : undefined"
    :footer="settings.footer ? settings.footer : undefined"
  >
    {{ settings.body }}
  </t-modal>
</template>

<script>
import ComponentDemo from './ComponentDemo'

export default ComponentDemo.extend({
  data () {
    return {
      show: true
    }
  },
  watch: {
    show (show) {
      if (!show) {
        setTimeout(() => {
          this.show = true
        }, 1000)
      }
    }
  }
})
</script>
