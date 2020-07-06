<template>
  <div class="w-full">
    <div class="mb-4">
      <div class="sm:items-start">
        <theme-configurator-classes
          v-model="currentTheme.classes"
          :component-name="componentName"
          label="Base classes"
          :base-classes="currentTheme.classes"
        />

        <theme-configurator-classes
          v-model="currentTheme.fixedClasses"
          :component-name="componentName"
          label="Fixed classes"
          description="Classes shared by all the variants"
          :base-classes="currentTheme.fixedClasses"
        />
      </div>

      <component-preview
        :theme="currentTheme"
        :component-name="componentName"
      />

      <p v-if="isUsingFormPluginClasses" class="text-orange-400  text-xs flex items-center mt-1">
        <icon class="w-4 h-4 text-orange-300 mr-1 inline-block flex-shrink-0">
          <path id="Combined-Shape" d="M2.92893219,17.0710678 C6.83417511,20.9763107 13.1658249,20.9763107 17.0710678,17.0710678 C20.9763107,13.1658249 20.9763107,6.83417511 17.0710678,2.92893219 C13.1658249,-0.976310729 6.83417511,-0.976310729 2.92893219,2.92893219 C-0.976310729,6.83417511 -0.976310729,13.1658249 2.92893219,17.0710678 L2.92893219,17.0710678 Z M15.6568542,15.6568542 C18.7810486,12.5326599 18.7810486,7.46734008 15.6568542,4.34314575 C12.5326599,1.21895142 7.46734008,1.21895142 4.34314575,4.34314575 C1.21895142,7.46734008 1.21895142,12.5326599 4.34314575,15.6568542 C7.46734008,18.7810486 12.5326599,18.7810486 15.6568542,15.6568542 Z M9,11 L9,10.5 L9,9 L11,9 L11,15 L9,15 L9,11 Z M9,5 L11,5 L11,7 L9,7 L9,5 Z" />
        </icon>
        <span>
          To use the class <strong>`{{ isUsingFormPluginClasses }}`</strong> you need to install the <a class="underline" target="_blank" href="https://github.com/tailwindcss/custom-forms">custom-forms</a> plugin.
        </span>
      </p>
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
import Icon from '@/components/Icon'

export default Vue.extend({
  components: {
    Icon,
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
  computed: {
    isUsingFormPluginClasses () {
      const pluginClasses = ['form-input', 'form-select', 'form-textarea', 'form-radio', 'form-chexkbox']
      return pluginClasses.find((className) => {
        return typeof this.currentTheme.classes === 'string' &&
         this.currentTheme.classes.includes(className)
      })
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
