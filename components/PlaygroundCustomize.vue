<template>
  <div class="p-4 max-w-full overflow-auto">
    <theme-configurator
      v-model="currentTheme"
      :component-name="componentName"
      class="p-4"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import uniqid from 'uniqid'
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
    componentSettings: {
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
        const themeAsExpectedInSettings = {}
        currentTheme.variants.forEach((variant) => {
          themeAsExpectedInSettings[variant.name] = variant.classes
        })
        const newTheme = {
          classes: currentTheme.classes,
          variants: themeAsExpectedInSettings
        }

        if (!isEqual(newTheme, this.value)) {
          this.$emit('input', newTheme)
        }
      },
      deep: true
    },
    componentSettings: {
      handler (value) {
        const variants = Object.keys(value.variants).map((variantName) => {
          const currentVariant = this.currentTheme.variants
            ? this.currentTheme.variants.find(v => v.name === variantName)
            : null

          return {
            id: currentVariant ? currentVariant.id : uniqid(),
            name: variantName,
            classes: value.variants[variantName]
          }
        })

        this.currentTheme = {
          classes: value.classes,
          variants
        }
      },
      immediate: true
    }
  }
})
</script>
