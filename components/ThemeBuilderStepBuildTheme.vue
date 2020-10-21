<template>
  <div>
    <h2 class="text-2xl font-medium text-gray-900">
      Personalize your component CSS classes
    </h2>
    <p>Browse among the components you chose and assign them a list of default classes as well as all the variants you need.</p>
    <hr class="my-4 border-t">
    <div class="border rounded">
      <theme-builder-step-build-theme-component
        v-for="componentName in selectedComponents"
        :key="componentName"
        v-model="currentTheme[componentName]"
        :index="Object.keys(currentTheme).indexOf(componentName)"
        :component-name="componentName"
        :selected="componentName === selected"
        :wrapped-theme="wrappedTheme"
        :not-wrapped-theme="notWrappedTheme"
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
    selectedComponents: {
      type: Array,
      required: true
    },
    value: {
      type: Object,
      required: true
    },
    wrappedTheme: {
      type: Object,
      default: undefined
    },
    notWrappedTheme: {
      type: Object,
      default: undefined
    }
  },
  data () {
    return {
      currentTheme: this.value,
      selected: this.selectedComponents[0]
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
      this.selected = this.selectedComponents.length ? this.selectedComponents[0] : undefined
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
