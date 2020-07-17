<template>
  <div class="p-4">
    <t-tag
      ref="tag"
      :tag-name="settings.tag"
      :text="settings.text"
      :classes="settings.classes"
      :variant="settings.variant ? settings.variant : undefined"
      :variants="settings.variants"
      :fixed-classes="settings.fixedClasses"
    />

    <p class="mt-4">
      <span class="text-gray-500 text-sm block">Rendered HTML: </span>
      <span ref="render" class="whitespace-pre block bg-gray-200 font-mono p-2 rounded text-gray-900 text-sm">{{ `<${settings.tag}>${settings.text}</${settings.tag}>` }}</span>
    </p>
  </div>
</template>

<script>
import ComponentDemo from './ComponentDemo'

export default ComponentDemo.extend({
  watch: {
    async settings () {
      await this.$nextTick()
      this.$refs.render.textContent = this.$refs.tag.$el.outerHTML
    }
  }
})
</script>
