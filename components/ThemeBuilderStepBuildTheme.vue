<template>
  <div class="border rounded">
    <theme-builder-step-build-theme-component
      v-for="(componentTheme, componentName) in currentTheme"
      :key="componentName"
      v-model="currentTheme[componentName]"
      :component-name="componentName"
      :selected="componentName === selected"
      @select="selected = componentName"
      @next="selectNextComponent"
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
    value: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      currentTheme: this.value,
      selected: Object.keys(this.value)[0]
    }
  },
  methods: {
    selectNextComponent () {
      const components = Object.keys(this.value)
      const currentIndex = components.findIndex(c => c === this.selected)
      const nextComponent = components[currentIndex + 1]
      this.selected = nextComponent
    }
  }
})
</script>
