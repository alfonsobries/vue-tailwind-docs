<template>
  <div class="p-4">
    <t-table
      :headers="['Name', 'Email', 'Age', 'Sales']"
      :data="[
        ['Alfonso Bribiesca', 'alfonso@vexilo.com', '31', '$9,999.00'],
        ['Saida Redondo', 'saida@gmail.com', 27, '$124.00'],
      ]"
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
