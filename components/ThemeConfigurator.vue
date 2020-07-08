<template>
  <div class="w-full">
    <div class="mb-4">
      <div class="sm:items-start">
        <theme-configurator-classes
          :key="`fixed-configurator-${wrapped}`"
          v-model="currentTheme.fixedClasses"
          :wrapped.sync="wrapped"
          :component-name="componentName"
          label="Fixed classes"
          description="Fixed classes shared by all the variants"
        />

        <theme-configurator-classes
          :key="`base-configurator-${wrapped}`"
          v-model="currentTheme.classes"
          :component-name="componentName"
          :wrapped.sync="wrapped"
          :fixed-classes="currentTheme.fixedClasses"
          label="Base classes"
          description="Classes used by default (when no variant is applied)"
        />
      </div>

      <component-preview
        :theme="currentTheme"
        :wrapped="wrapped"
        :component-name="componentName"
      />
    </div>

    <div class="border bg-gray-100 rounded mb-4">
      <h3 class="px-4 py-2 border-b">
        Variants:
      </h3>

      <transition-group
        enter-active-class="transition ease-out duration-100"
        leave-active-class="transition ease-in duration-100"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <theme-configurator-variant
          v-for="(variantName, vIndex) in Object.keys(currentTheme.variants)"
          :key="`${variantName}-${vIndex}-${wrapped}`"
          v-model="currentTheme.variants[variantName]"
          :variant-name="variantName"
          :theme="currentTheme"
          :component-name="componentName"
          :index="vIndex"
          :wrapped="wrapped"
          :wrapped-theme="wrappedTheme"
          :not-wrapped-theme="notWrappedTheme"
          @delete="removeVariant(variantName)"
          @update-name="(newVariantName) => updateVariantName(variantName, newVariantName)"
        />
      </transition-group>

      <p class="p-4 border-t">
        <t-button type="button" variant="secondary" @click="addVariant">
          Add variant
        </t-button>
      </p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'
import ThemeConfiguratorVariant from './ThemeConfiguratorVariant'
import ThemeConfiguratorClasses from './ThemeConfiguratorClasses.vue'
import ComponentPreview from './ThemeConfiguratorPreview.vue'

export default Vue.extend({
  components: {
    ThemeConfiguratorClasses,
    ThemeConfiguratorVariant,
    ComponentPreview
  },
  props: {
    value: {
      type: Object,
      required: true
    },
    componentName: {
      type: String,
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
      wrapped: this.value.wrapped
    }
  },
  watch: {
    wrapped (wrapped) {
      let newTheme

      if (wrapped) {
        newTheme = cloneDeep(this.wrappedTheme)
      } else {
        newTheme = cloneDeep(this.notWrappedTheme)
      }

      newTheme.wrapped = wrapped

      this.currentTheme = newTheme
    },
    currentTheme: {
      handler (currentTheme) {
        let fixedClasses = {}

        if (typeof currentTheme.fixedClasses === 'object') {
          Object.keys(currentTheme.fixedClasses).forEach((elementName) => {
            if (currentTheme.fixedClasses[elementName]) {
              fixedClasses[elementName] = currentTheme.fixedClasses[elementName]
            }
          })
          if (!Object.keys(fixedClasses).length) {
            fixedClasses = undefined
          }
        } else {
          fixedClasses = currentTheme.fixedClasses ? currentTheme.fixedClasses : undefined
        }

        const wrapped = currentTheme.wrapped || undefined

        this.$emit('input', {
          ...currentTheme,
          ...{ fixedClasses, wrapped }
        })
      },
      deep: true
    },
    value (value) {
      if (!isEqual(value, this.currentTheme)) {
        this.currentTheme = value
        this.wrapped = value.wrapped
      }
    }
  },
  methods: {
    updateVariantName (currentVariantName, newVariantName) {
      delete Object.assign(this.currentTheme.variants, { [newVariantName]: this.currentTheme.variants[currentVariantName] })[currentVariantName]
    },
    removeVariant (variantName) {
      this.$delete(this.currentTheme.variants, variantName)
    },
    addVariant () {
      const index = Object.keys(this.currentTheme.variants).length + 1
      this.$set(
        this.currentTheme.variants,
        `variant${index}`,
        cloneDeep(this.currentTheme.classes)
      )
    }
  }
})
</script>
