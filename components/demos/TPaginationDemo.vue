<template>
  <div class="p-4">
    <t-pagination
      :value="settings.value"
      :total-items="settings.totalItems || 0"
      :per-page="settings.perPage || 20"
      :limit="settings.limit || 5"
      :hide-ellipsis="settings.hideEllipsis === undefined ? false : settings.hideEllipsis"
      :hide-first-last-controls="settings.hideFirstLastControls === undefined ? false : settings.hideFirstLastControls"
      :hide-prev-next-controls="settings.hidePrevNextControls === undefined ? false : settings.hidePrevNextControls"
      :classes="settings.classes"
      :variant="settings.variant ? settings.variant : undefined"
      :variants="settings.variants"
      :fixed-classes="settings.fixedClasses"
    />
  </div>
</template>

<script>
import ComponentDemo from './ComponentDemo'

export default ComponentDemo.extend({
})
</script>
