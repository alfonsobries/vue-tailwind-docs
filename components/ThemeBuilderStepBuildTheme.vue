<template>
  <div>
    <h2 class="text-2xl font-medium text-gray-900">
      Personalize your component CSS classes
    </h2>
    <p>Browse among the components you chose and assign them a list of default classes as well as all the variants you need.</p>
    <div class="border rounded mt-3">
      <theme-builder-step-build-theme-component
        v-for="(componentTheme, componentName) in currentTheme"
        :key="componentName"
        v-model="currentTheme[componentName]"
        :index="Object.keys(currentTheme).indexOf(componentName)"
        :component-name="componentName"
        :selected="componentName === selected"
        @select="selected = componentName"
        @next="selectNextComponent"
      />
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import difference from 'lodash/difference'
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
  computed: {
    isReady () {
      return this.selected === undefined
    }
  },
  watch: {
    isReady (isReady) {
      if (isReady) {
        this.$emit('ready')
      }
      // No need for notready
    },
    value (value) {
      const activeComponents = Object.keys(value)
      const currentActiveComponents = Object.keys(this.currentTheme)
      const removed = difference(currentActiveComponents, activeComponents)
      const added = difference(activeComponents, currentActiveComponents)
      removed.forEach((componentName) => {
        Vue.delete(this.currentTheme, componentName)
      })
      added.forEach((componentName) => {
        this.$set(this.currentTheme, componentName, this.value[componentName])
      })
      this.selected = Object.keys(this.currentTheme).length ? Object.keys(this.currentTheme)[0] : undefined
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
