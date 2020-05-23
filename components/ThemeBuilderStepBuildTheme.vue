<template>
  <div class="border rounded">
    <theme-builder-step-build-theme-component
      v-for="(componentName, index) in components"
      :key="componentName"
      :index="index"
      :component-name="componentName"
      :selected="index === selected"
      @select="selected = index"
      @next="selected = index+1"
    />
  </div>
</template>
<script>
import Vue from 'vue'
import ThemeBuilderStepBuildThemeComponent from './ThemeBuilderStepBuildThemeComponent.vue'

export default Vue.extend({
  components: {
    ThemeBuilderStepBuildThemeComponent
  },
  props: {
    components: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      selected: 0
    }
  }

})
</script>
