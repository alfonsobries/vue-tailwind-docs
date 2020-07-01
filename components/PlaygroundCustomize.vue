<template>
  <div class="p-4 max-w-full overflow-auto">
    <theme-builder-step-build-theme-component
      v-model="classes"
      :index="0"
      :component-name="componentName"
      :selected="true"
      simple
    />
  </div>
</template>

<script>
import Vue from 'vue'
import ThemeBuilderStepBuildThemeComponent from '@/components/ThemeBuilderStepBuildThemeComponent.vue'
import parseJsonClasses from '@/utils/parseJsonClasses'

export default Vue.extend({
  components: {
    ThemeBuilderStepBuildThemeComponent
  },
  props: {
    componentName: {
      type: String,
      required: true
    },
    params: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      classes: parseJsonClasses(this.params)
    }
  }
})
</script>
