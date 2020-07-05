<template>
  <div class="flex flex-col">
    <tip class="border-b text-sm leading-5 items-stretch">
      In this tab you can modify the TailwindCSS classes of the example theme and add, edit or delete as many variants as you wish. Once you finished you can preview your theme in the <a href="#" class="underline font-medium" @click.prevent="$emit('select', 'demo')">demo</a> tab or grab the settings from the <a href="#" class="underline font-medium" @click.prevent="$emit('select', 'settings')">settings</a> tab.
    </tip>

    <theme-configurator
      v-model="currentTheme"
      class="p-4"
      :component-name="componentName"
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
    settings: {
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

        if (typeof currentTheme.wrapped === 'boolean') {
          newTheme.wrapped = currentTheme.wrapped
        }

        if (!isEqual(newTheme, this.settings)) {
          this.$emit('update:settings', newTheme)
        }
      },
      deep: true
    },
    settings: {
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

        const currentTheme = {
          classes: value.classes,
          variants
        }

        if (typeof value.wrapped === 'boolean') {
          currentTheme.wrapped = value.wrapped
        }

        this.currentTheme = currentTheme
      },
      immediate: true
    }
  }
})
</script>
