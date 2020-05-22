<template>
  <fieldset>
    <div
      class="text-base leading-6 font-medium text-gray-900 p-4 flex items-center cursor-pointer"
      :class="{ 'border-t': index > 0, 'border-b': selected }"
      @click="$emit('select')"
    >
      <icon class="h-4 w-4 text-gray-600">
        <polygon id="Path-126" points="0 11 2 9 7 14 18 3 20 5 7 18" />
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
            <label id="assigned-to-label" class="block text-sm leading-5 font-medium text-gray-700">Default Classes</label>
            <classes-autocomplete v-model="classes" />
          </div>
        </div>
        <div class="flex flex-col items-center justify-center bg-gray-100 p-4 relative mt-2 shadow-inner">
          <span class="absolute left-0 top-0 m-2 pointer-events-none text-gray-500 uppercase text-sm">Preview</span>
          <t-input v-model="inputValue" class="relative" :classes="classes ? classes : ''" />
        </div>
      </div>

      <theme-builder-step-build-theme-component-variant
        v-for="(variant, vIndex) in variants"
        :key="variant.id"
        v-model="variants[vIndex]"
        @delete="variants.splice(index, 1)"
      />

      <div class="flex justify-between">
        <t-button type="button" @click="addVariant">
          Add variant
        </t-button>
        <t-button type="button" variant="link">
          Next component →
        </t-button>
      </div>
    </div>
  </fieldset>
</template>
<script>
import Vue from 'vue'
import uniqid from 'uniqid'
import ThemeBuilderStepBuildThemeComponentVariant from './ThemeBuilderStepBuildThemeComponentVariant'
import Icon from '@/components/Icon'
import ClassesAutocomplete from '@/components/ClassesAutocomplete.vue'
export default Vue.extend({
  components: {
    Icon,
    ClassesAutocomplete,
    ThemeBuilderStepBuildThemeComponentVariant
  },
  props: {
    selected: {
      type: Boolean,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    componentName: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      classes: 'form-input',
      inputValue: 'Hello there!',
      variants: this.getDefaultVariants()
    }
  },

  computed: {
    defaultClasses () {
      switch (this.componentName) {
        case 'TInput':
          return 'form-input'
      }

      return ''
    }
  },

  methods: {
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
            },
            {
              id: uniqid(),
              name: 'warning',
              classes: 'form-input border-yellow-400 bg-yellow-100'
            }
          ]
      }

      return []
    },
    addVariant () {
      this.variants.push({
        id: uniqid(),
        name: `variant${this.variants.length + 1}`,
        classes: this.defaultClasses
      })
    }
  }
})
</script>
