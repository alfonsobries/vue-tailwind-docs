<template>
  <div class="flex flex-col items-center justify-center bg-white p-4 relative mt-2 shadow-sm rounded border-dashed border">
    <span class="absolute left-0 top-0 m-2 pointer-events-none text-gray-500 uppercase text-sm">Preview</span>
    <label
      class="relative"
      :class="{
        'flex items-center': hasLabel
      }"
      :for="`${componentName}-${_uid}`"
    >
      <div v-if="componentName === 'TModal'">
        <t-modal
          ref="modal"
          v-model="showModal"
          :focus-on-open="false"
          :disable-body-scroll="false"
          :esc-to-close="false"
          :click-to-close="false"
          :classes="modalClasses"
          header="title of the modal"
        >
          So you selected VueJs & Tailwind Combo, Good decision!
          <template v-slot:footer>
            <div class="flex justify-between">
              <t-button type="button">Cancel</t-button>
              <t-button type="button">Ok</t-button>
            </div>
          </template>
        </t-modal>
        <p class="text-center mt-2">
          <t-button v-if="!showModal" type="button" @click="resetModal">Show modal</t-button>
          <t-button v-else-if="showModal === true && showModalFull === false" type="button" variant="link" @click="showModalFull=true">Open real modal</t-button>
        </p>
      </div>
      <t-alert
        v-else-if="componentName === 'TAlert'"
        show
        :classes="classes ? classes : null"
      >
        So you selected VueJs & Tailwind Combo, Good decision!
      </t-alert>
      <t-card
        v-else-if="componentName === 'TCard'"
        show
        :classes="classes ? classes : null"
        header="User profile"
        footer="Copyright wharever 2020"
      >
        Im a full-stack software from Mexico City that likes Vue & TailwindCSS.
      </t-card>
      <t-input-group
        v-else-if="componentName === 'TInputGroup'"
        :classes="classes ? classes : null"
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
        :value="hasLabel ? componentValue: undefined"
        :checked="true"
        :classes="classes ? classes : null"
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
          const marginPaddingRegex = /([mp][tlrbyx]?-[0-9]*)/gm
          return {
            ...this.classes,
            ...{
              // Remove margins and padding for better demo inline
              overlay: this.classes.overlay.replace('absolute', '').replace('fixed', '').replace(marginPaddingRegex, ' ') + ' w-full p-4 rounded',
              wrapper: this.classes.wrapper.replace('absolute', '').replace('fixed', '').replace(marginPaddingRegex, ' ')
            }
          }
        }

        return this.classes
      }

      return null
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
