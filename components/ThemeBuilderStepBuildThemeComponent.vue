<template>
  <fieldset :class="{ 'border-2 border-orange-300': selected }">
    <div
      class="text-base leading-6 font-medium text-gray-900 p-4 flex items-center"
      :class="{
        'border-b': selected,
        'border-t': index > 0,
        'border border-green-200 cursor-pointer': ready
      }"
      @click="ready ? $emit('select') : undefined"
    >
      <icon v-if="ready" class="h-4 w-4 text-green-500">
        <polygon id="Path-126" points="0 11 2 9 7 14 18 3 20 5 7 18" />
      </icon>
      <icon v-else-if="selected" class="h-4 w-4 text-gray-600">
        <path id="Combined-Shape" d="M12.2928932,3.70710678 L0,16 L0,20 L4,20 L16.2928932,7.70710678 L12.2928932,3.70710678 Z M13.7071068,2.29289322 L16,0 L20,4 L17.7071068,6.29289322 L13.7071068,2.29289322 Z" />
      </icon>
      <icon v-else class="h-4 w-4 text-gray-300">
        <path id="Combined-Shape" d="M9,8.5 L9,4 L11,4 L11,9.58578644 L14.9497475,13.5355339 L13.5355339,14.9497475 L9,10.4142136 L9,8.5 Z M10,20 C15.5228475,20 20,15.5228475 20,10 C20,4.4771525 15.5228475,0 10,0 C4.4771525,0 0,4.4771525 0,10 C0,15.5228475 4.4771525,20 10,20 Z M10,18 C14.418278,18 18,14.418278 18,10 C18,5.581722 14.418278,2 10,2 C5.581722,2 2,5.581722 2,10 C2,14.418278 5.581722,18 10,18 Z" />
      </icon>

      <span class="ml-2">{{ componentName }}</span>

      <icon class="h-4 w-4 text-gray-600 ml-auto">
        <polygon v-if="selected" id="Combined-Shape" points="9.29289322 12.9497475 10 13.6568542 15.6568542 8 14.2426407 6.58578644 10 10.8284271 5.75735931 6.58578644 4.34314575 8" />
        <polygon v-else id="Combined-Shape" points="10.7071068 7.05025253 10 6.34314575 4.34314575 12 5.75735931 13.4142136 10 9.17157288 14.2426407 13.4142136 15.6568542 12" />
      </icon>
    </div>

    <div v-show="selected" class="p-4">
      <div class="mb-4">
        <div class="sm:items-start">
          <div class="space-y-1">
            <h3>
              Default Classes
            </h3>

            <classes-form-alert v-if="componentName === 'TAlert'" v-model="currentComponentTheme.classes" />
            <classes-form-card v-if="componentName === 'TCard'" v-model="currentComponentTheme.classes" />
            <classes-form-input-group v-else-if="componentName === 'TInputGroup'" v-model="currentComponentTheme.classes" />
            <classes-form-simple v-else v-model="currentComponentTheme.classes" />
          </div>
        </div>

        <component-preview
          :classes="currentComponentTheme.classes"
          :component-name="componentName"
        />

        <p v-if="formPluginClass" class="text-gray-500 mr-3 text-xs">
          To use the class <strong>`{{ formPluginClass }}`</strong> you will need to install the <a class="underline" target="_blank" href="https://github.com/tailwindcss/custom-forms">custom-forms</a> plugin.
        </p>
      </div>

      <div class="border-2 bg-gray-100 rounded mb-4">
        <h3 class="p-4 border-b">
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
          <theme-builder-step-build-theme-component-variant
            v-for="(variant, vIndex) in currentComponentTheme.variants"
            :key="variant.id"
            v-model="currentComponentTheme.variants[vIndex]"
            :component-name="componentName"
            :index="vIndex"
            @delete="currentComponentTheme.variants.splice(vIndex, 1)"
          />
        </transition-group>

        <p class="p-4 border-t">
          <t-button type="button" variant="secondary" @click="addVariant">
            Add variant
          </t-button>
        </p>
      </div>

      <div class="flex justify-between">
        <t-button type="button" variant="link" @click="nextComponent">
          Next component →
        </t-button>
      </div>
    </div>
  </fieldset>
</template>
<script>
import Vue from 'vue'
import uniqid from 'uniqid'
import isEqual from 'lodash/isEqual'
import ThemeBuilderStepBuildThemeComponentVariant from './ThemeBuilderStepBuildThemeComponentVariant'
import ComponentPreview from './ThemeBuilderStepBuildThemeComponentPreview.vue'
import Icon from '@/components/Icon'
import ClassesFormSimple from '@/components/ClassesForm/ClassesFormSimple.vue'
import ClassesFormAlert from '@/components/ClassesForm/ClassesFormAlert.vue'
import ClassesFormCard from '@/components/ClassesForm/ClassesFormCard.vue'
import ClassesFormInputGroup from '@/components/ClassesForm/ClassesFormInputGroup.vue'

export default Vue.extend({
  components: {
    Icon,
    ThemeBuilderStepBuildThemeComponentVariant,
    ComponentPreview,
    ClassesFormSimple,
    ClassesFormAlert,
    ClassesFormCard,
    ClassesFormInputGroup
  },
  props: {
    value: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    selected: {
      type: Boolean,
      required: true
    },
    componentName: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      currentComponentTheme: {},
      ready: false
    }
  },
  computed: {
    isReady () {
      return this.selected.length > 0
    },
    formPluginClass () {
      const pluginClasses = ['form-input', 'form-select', 'form-textarea', 'form-radio', 'form-chexkbox']
      return pluginClasses.find((className) => {
        return typeof this.currentComponentTheme.classes === 'string' &&
         this.currentComponentTheme.classes.includes(className)
      })
    }
  },

  watch: {
    async selected (selected) {
      if (selected) {
        await this.$nextTick()
        this.$el.scrollIntoView({ behavior: 'smooth' })
      }
    },
    isReady (isReady) {
      this.$emit(isReady ? 'ready' : 'noready')
    },
    currentComponentTheme: {
      handler (currentComponentTheme) {
        const themeAsExpectedInSettings = {}
        currentComponentTheme.variants.forEach((variant) => {
          themeAsExpectedInSettings[variant.name] = variant.classes
        })
        const newTheme = {
          classes: currentComponentTheme.classes,
          variants: themeAsExpectedInSettings
        }

        if (!isEqual(newTheme, this.value)) {
          this.$emit('input', newTheme)
        }
      },
      deep: true
    },
    value: {
      handler (value) {
        const variants = Object.keys(value.variants).map((variantName) => {
          const currentVariant = this.currentComponentTheme.variants
            ? this.currentComponentTheme.variants.find(v => v.name === variantName)
            : null

          return {
            id: currentVariant ? currentVariant.id : uniqid(),
            name: variantName,
            classes: value.variants[variantName]
          }
        })

        this.currentComponentTheme = {
          classes: value.classes,
          variants
        }
      },
      immediate: true
    }
  },

  methods: {
    nextComponent () {
      this.ready = true
      this.$emit('next')
    },
    getDefaultVariants () {
      switch (this.componentName) {
        case 'TInput':
          return [
            {
              id: uniqid(),
              name: 'danger',
              classes: 'form-input border-red-300 bg-red-100'
            },
            {
              id: uniqid(),
              name: 'success',
              classes: 'form-input border-green-300 bg-green-100'
            }
          ]
      }

      return []
    },
    addVariant () {
      this.currentComponentTheme.variants.push({
        id: uniqid(),
        name: `variant${this.currentComponentTheme.variants.length + 1}`,
        classes: this.currentComponentTheme.classes
      })
    }
  }
})
</script>
