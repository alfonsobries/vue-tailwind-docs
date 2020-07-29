<template>
  <div class="p-4">
    <t-card
      :classes="settings.classes"
      :variant="settings.variant ? settings.variant : undefined"
      :variants="settings.variants"
      :fixed-classes="settings.fixedClasses"
      :dismissible="settings.dismissible"
      :header="settings.header ? settings.header : undefined"
      :footer="settings.footer ? settings.footer : undefined"
    >
      {{ settings.body }}
    </t-card>
  </div>
</template>

<script>
import ComponentDemo from './ComponentDemo'

export default ComponentDemo.extend({

})
</script>
