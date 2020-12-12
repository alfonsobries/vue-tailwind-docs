<template>
  <div class="flex flex-col">
    <tip class="items-stretch text-sm leading-5 border-b">
      In this tab you can modify the TailwindCSS classes of the theme we create as example, you can also edit or delete as many variants as you wish. Once you finished you can preview your theme on the <a href="#" class="font-medium underline" @click.prevent="$emit('select', 'demo')">demo</a> tab or grab the settings from the <a href="#" class="font-medium underline" @click.prevent="$emit('select', 'settings')">settings</a> tab.
    </tip>

    <theme-configurator
      v-model="currentTheme"
      class="p-4"
      v-bind="themeBuilderSettings"
      :component-name="componentName"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import isEqual from 'lodash/isEqual'
import ThemeConfigurator from '@/components/ThemeConfigurator.vue'

export default Vue.extend({
  components: {
    ThemeConfigurator
  },
  props: {
    componentName: {
      type: String,
      required: true
    },
    settings: {
      type: Object,
      default: null
    },
    themeBuilderSettings: {
      type: Object,
      default: null
    },
    params: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      currentTheme: {}
    }
  },
  watch: {
    currentTheme: {
      handler (currentTheme) {
        if (!isEqual(currentTheme, this.settings)) {
          this.$emit('update:settings', currentTheme)
        }
      },
      deep: true
    },
    settings: {
      handler (value) {
        this.currentTheme = value
      },
      immediate: true
    }
  }
})
</script>
