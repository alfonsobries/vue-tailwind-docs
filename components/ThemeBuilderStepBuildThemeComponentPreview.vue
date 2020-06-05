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
      >
        So you selected VueJs & Tailwind Combo, Good decision!
      </t-alert>
      <t-card
        v-else-if="componentName === 'TCard'"
        :variant="variant"
        :variants="variants"
        :classes="classes"
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
    classes: {
      type: [String, Object],
      default: null
    },
    variants: {
      type: [String, Object],
      default: undefined
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
    modalClasses () {
      if (this.classes) {
        if (!this.showModalFull) {
          const marginPaddingRegex = /([mpz][tlrbyx]?-[0-9]*)/gm
          return {
            ...this.classes,
            ...{
              // Remove margins and padding for better demo inline
              overlay: (this.classes.overlay || '').replace('absolute', '').replace('fixed', '').replace(marginPaddingRegex, ' ') + ' w-full p-4 rounded',
              wrapper: (this.classes.wrapper || '').replace('absolute', '').replace('fixed', '').replace(marginPaddingRegex, ' ')
            }
          }
        }

        return this.classes
      }

      return null
    },
    modalVariants () {
      if (this.variants) {
        if (!this.showModalFull) {
          const marginPaddingRegex = /([mpz][tlrbyx]?-[0-9]*)/gm
          const newVariants = { ...this.variants }
          newVariants[this.variant].overlay = (newVariants.overlay || '').replace('absolute', '').replace('fixed', '').replace(marginPaddingRegex, ' ') + ' w-full p-4 rounded'
          newVariants[this.variant].wrapper = (newVariants.wrapper || '').replace('absolute', '').replace('fixed', '').replace(marginPaddingRegex, ' ') + ' w-full p-4 rounded'
          return newVariants
        }

        return this.variants
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
    resetModal () {
      this.showModal = true
      this.showModalFull = false
    }
  }
})
</script>
