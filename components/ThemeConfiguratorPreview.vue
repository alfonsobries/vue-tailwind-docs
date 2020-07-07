<template>
  <div class="flex flex-col items-center justify-center bg-white p-4 relative mt-2 shadow-sm rounded border-dashed border">
    <span class="absolute left-0 top-0 m-2 pointer-events-none text-gray-500 uppercase text-sm">Preview</span>
    <label
      class="relative "
      :class="{
        'flex items-center': hasLabel,
        'w-full max-w-xs': componentName === 'TRichSelect',
      }"
      :for="`${componentName}-${_uid}`"
    >
      <div v-if="componentName === 'TModal'">
        <t-modal
          ref="modal"
          v-model="showModal"
          :focus-on-open="showModalFull ? true : false"
          :disable-body-scroll="showModalFull ? true : false"
          :esc-to-close="showModalFull ? true : false"
          :click-to-close="showModalFull ? true : false"
          :variants="modalVariants"
          :classes="modalClasses"
          :fixed-classes="modalFixedClasses"
          :variant="variant"
          header="title of the modal"
        >
          So you selected VueJs & Tailwind Combo, Good decision!
          <template v-slot:footer>
            <div class="flex justify-between">
              <t-button type="button" @click="showModalFull ? $refs.modal.hide() : undefined">Cancel</t-button>
              <t-button type="button" @click="showModalFull ? $refs.modal.hide() : undefined">Ok</t-button>
            </div>
          </template>
        </t-modal>
        <p class="text-center mt-2">
          <t-button v-if="!showModal" type="button" @click="resetModal">Show modal</t-button>
          <t-button v-else-if="showModal === true && showModalFull === false" type="button" variant="link" @click="showModalFull=true">Open real modal</t-button>
        </p>
      </div>
      <div v-else-if="componentName === 'TRichSelect'" class="max-w-md w-full">
        <t-rich-select
          :variant="variant"
          :variants="variants"
          :classes="classes"
          :fixed-classes="fixedClasses"
          :options="[
            { value: 'optgroup', text: 'With optgroup' },
            { value: 'option-2', text: 'Option 2' },
            {
              text: 'Numbers',
              children: [
                { value: 1, text: 1 },
                { value: 2, text: 2 },
              ],
            },
            {
              text: 'Letters',
              children: [
                { value: 'A', text: 'A' },
                { value: 'B', text: 'B' },
                { value: 'C', text: 'C' },
              ],
            },
          ]"
          clearable
          placeholder="Select an option"
        />
      </div>
      <t-alert
        v-else-if="componentName === 'TAlert'"
        show
        :variant="variant"
        :variants="variants"
        :classes="classes"
        :fixed-classes="fixedClasses"
      >
        So you selected VueJs & Tailwind Combo, Good decision!
      </t-alert>
      <t-card
        v-else-if="componentName === 'TCard'"
        :variant="variant"
        :variants="variants"
        :classes="classes"
        :fixed-classes="fixedClasses"
        header="User profile"
        footer="Copyright wharever 2020"
      >
        Im a full-stack software from Mexico City that likes Vue & TailwindCSS.
      </t-card>
      <t-input-group
        v-else-if="componentName === 'TInputGroup'"
        :variant="variant"
        :variants="variants"
        :classes="classes"
        :fixed-classes="fixedClasses"
        label="Your password"
        description="Use characters and numbers"
        feedback="Your password doesnt match!"
      >
        <t-input />
      </t-input-group>
      <component
        :is="componentName"
        v-else
        :id="`${componentName}-${_uid}`"
        v-model="componentValue"
        :variant="variant"
        :variants="variants"
        :classes="classes"
        :wrapped="wrapped"
        :fixed-classes="fixedClasses"
        :value="hasLabel ? componentValue: undefined"
        :checked="true"
        v-bind="componentAttribs"
      />

      <span v-if="hasLabel" class="ml-2 text-gray-700 text-sm">Hello there!</span>
    </label>
  </div>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
    theme: {
      type: Object,
      required: true
    },
    variant: {
      type: String,
      default: undefined
    },
    componentName: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      showModal: true,
      showModalFull: false,
      componentValue: 'Hello there!'
    }
  },
  computed: {
    wrapped () {
      return this.theme.wrapped
    },
    classes () {
      return this.theme.classes
    },
    fixedClasses () {
      return this.theme.fixedClasses
    },
    variants () {
      return this.theme.variants
      // if (!this.theme.variants) {
      //   return []
      // }

      // const variants = {}

      // this.theme.variants.forEach((variant) => {
      //   variants[variant.name] = variant.classes
      // })

      // return variants
    },
    modalClasses () {
      return this.getDemoableModalClasses(this.classes)
    },
    modalFixedClasses () {
      return this.getDemoableModalClasses(this.fixedClasses)
    },
    modalVariants () {
      if (this.variants) {
        const demoableVariants = {}

        Object.keys(this.variants).forEach((variantName) => {
          demoableVariants[variantName] = this.getDemoableModalClasses(this.variants[variantName].classes)
        })

        return demoableVariants
      }

      return undefined
    },
    hasLabel () {
      return ['TRadio', 'TCheckbox'].includes(this.componentName)
    },
    componentAttribs () {
      if (this.componentName === 'TSelect') {
        return {
          options: ['Hello there!', '¡Hola mundo!', '¡Hello world!']
        }
      }
      return {}
    }
  },
  methods: {
    /**
     * Removes position related classes so we can show the preview inline
     */
    getDemoableModalClasses (classes) {
      if (classes) {
        if (!this.showModalFull) {
          const marginPaddingRegex = /([mpz][tlrbyx]?-[0-9]*)/gm
          return {
            ...classes,
            ...{
              // Remove margins and padding for better demo inline
              overlay: (classes.overlay || '').replace('absolute', '').replace('fixed', '').replace(marginPaddingRegex, ' ') + ' w-full p-4 rounded',
              wrapper: (classes.wrapper || '').replace('absolute', '').replace('fixed', '').replace(marginPaddingRegex, ' ')
            }
          }
        }

        return classes
      }

      return null
    },
    resetModal () {
      this.showModal = true
      this.showModalFull = false
    }
  }
})
</script>
