<template>
  <div class="p-4">
    <t-input-group
      :label="settings.label ? settings.label : undefined"
      :feedback="settings.feedback ? settings.feedback : undefined"
      :description="settings.description ? settings.description : undefined"
      :classes="settings.classes"
      :variant="settings.variant ? settings.variant : undefined"
      :variants="settings.variants"
      :fixed-classes="settings.fixedClasses"
    >
      <t-input value="password" type="password" />
    </t-input-group>
  </div>
</template>

<script>
import ComponentDemo from './ComponentDemo'

export default ComponentDemo.extend({

})
</script>
