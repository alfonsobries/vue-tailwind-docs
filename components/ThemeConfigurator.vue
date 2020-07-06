<template>
  <div class="w-full">
    <div class="mb-4">
      <div class="sm:items-start">
        <theme-configurator-classes
          v-model="currentTheme.classes"
          :component-name="componentName"
          label="Base classes"
          description="Classes used by default (when no variant is applied)"
        />

        <theme-configurator-classes
          v-model="currentTheme.fixedClasses"
          :component-name="componentName"
          label="Fixed classes"
          description="Fixed classes shared by all the variants"
        />
      </div>

      <component-preview
        :theme="currentTheme"
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
          v-for="(variant, vIndex) in currentTheme.variants"
          :key="variant.id"
          v-model="currentTheme.variants[vIndex]"
          :theme="currentTheme"
          :component-name="componentName"
          :index="vIndex"
          @delete="currentTheme.variants.splice(vIndex, 1)"
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
import uniqid from 'uniqid'
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
    }
  },
  data () {
    return {
      currentTheme: this.value
    }
  },
  watch: {
    currentTheme: {
      handler (currentTheme) {
        this.$emit('input', currentTheme)
      },
      deep: true
    },
    value (value) {
      if (!isEqual(value, this.currentTheme)) {
        this.currentTheme = value
      }
    }
  },
  methods: {
    addVariant () {
      this.currentTheme.variants.push({
        id: uniqid(),
        name: `variant${this.currentTheme.variants.length + 1}`,
        classes: this.currentTheme.classes
      })
    }
  }
})
</script>
