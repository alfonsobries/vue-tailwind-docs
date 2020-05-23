<template>
  <fieldset>
    <div
      class="text-base leading-6 font-medium text-gray-900 p-4 flex items-center"
      :class="{
        'border-t': index > 0,
        'border-b': selected,
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
            <classes-autocomplete v-model="classes" />
          </div>
        </div>
        <div class="flex flex-col items-center justify-center bg-gray-100 p-4 relative mt-2 shadow-inner">
          <span class="absolute left-0 top-0 m-2 pointer-events-none text-gray-500 uppercase text-sm">Preview</span>
          <t-input v-model="inputValue" class="relative" :classes="classes ? classes : ''" />
        </div>
      </div>

      <div class="border-2 bg-gray-100 rounded mb-4">
        <h3 class="p-4 border-b">
          Variants:
        </h3>

        <theme-builder-step-build-theme-component-variant
          v-for="(variant, vIndex) in variants"
          :key="variant.id"
          v-model="variants[vIndex]"
          :index="vIndex"
          @delete="variants.splice(index, 1)"
        />

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
      ready: false,
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
      this.variants.push({
        id: uniqid(),
        name: `variant${this.variants.length + 1}`,
        classes: this.defaultClasses
      })
    }
  }
})
</script>
