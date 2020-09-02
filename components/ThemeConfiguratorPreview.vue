<template>
  <div class="relative flex flex-col items-center justify-center p-4 mt-2 bg-white border border-dashed rounded shadow-sm">
    <span class="absolute top-0 left-0 m-2 text-sm text-gray-500 uppercase pointer-events-none">Preview</span>
    <label
      class="relative "
      :class="{
        'w-full max-w-xs': componentName === 'TRichSelect',
      }"
      :for="`${componentName}-${_uid}`"
    >
      <t-datepicker
        v-if="componentName === 'TDatepicker'"
        v-model="date"
        :variant="variant"
        :variants="variants"
        :classes="classes"
        :fixed-classes="fixedClasses"
      />

      <div v-else-if="componentName === 'TModal'">
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
        <p class="mt-2 text-center">
          <t-button v-if="!showModal" type="button" @click="resetModal">Show modal</t-button>
          <t-button v-else-if="showModal === true && showModalFull === false" type="button" variant="link" @click="showModalFull=true">Open real modal</t-button>
        </p>
      </div>
      <div v-else-if="componentName === 'TRichSelect'" class="w-full max-w-md">
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
      <t-table
        v-else-if="componentName === 'TTable'"
        :headers="['Name', 'Email', 'Age', 'Sales']"
        :data="[
          ['Alfonso Bribiesca', 'alfonso@vexilo.com', '31', '$9,999.00'],
          ['Saida Redondo', 'saida@gmail.com', 27, '$124.00'],
        ]"
        :variant="variant"
        :variants="variants"
        :classes="classes"
        :fixed-classes="fixedClasses"
      />
      <t-checkbox-group
        v-else-if="componentName === 'TCheckboxGroup'"
        :options="['Option A', 'Option B', 'Option C', 'Option D']"
        :variant="variant"
        :variants="variants"
        :classes="classes"
        :fixed-classes="fixedClasses"
      />
      <t-radio-group
        v-else-if="componentName === 'TRadioGroup'"
        :options="['Option A', 'Option B', 'Option C', 'Option D']"
        :variant="variant"
        :variants="variants"
        :classes="classes"
        :fixed-classes="fixedClasses"
      />
      <t-dropdown
        v-else-if="componentName === 'TDropdown'"
        :variant="variant"
        :variants="variants"
        :classes="classes"
        :fixed-classes="fixedClasses"
      >
        <template
          slot="button"
        >
          My account
          <icon class="w-3 h-3 ml-2">
            <path d="M19 9l-7 7-7-7" />
          </icon>
        </template>
        <div class="py-1 rounded-md shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
          <a
            href="#"
            class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            role="menuitem"
          >
            Your Profile
          </a>
          <a
            href="#"
            class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            role="menuitem"
          >
            Settings
          </a>
          <a
            href="#"
            class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            role="menuitem"
          >
            Sign out
          </a>
        </div>
      </t-dropdown>
      <t-toggle
        v-else-if="componentName === 'TToggle'"
        checked
        :variant="variant"
        :variants="variants"
        :classes="classes"
        :fixed-classes="fixedClasses"
      />
      <t-pagination
        v-else-if="componentName === 'TPagination'"
        :value="2"
        :total-items="100"
        :per-page="10"
        :variant="variant"
        :variants="variants"
        :classes="classes"
        :fixed-classes="fixedClasses"
      />
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
      <div v-else-if="componentName === 'TRadio'" class="flex flex-row items-center">
        <div class="px-1">
          <t-radio
            :id="`${componentName}-${_uid}-1`"
            v-model="radioModel"
            :name="`${componentName}-${_uid}`"
            :value="true"
            :variant="variant"
            :variants="radioVariants"
            :classes="radioClasses"
            :wrapped="wrapped"
            :fixed-classes="radioFixedClasses"
            label="Option A"
          />
        </div>
        <div class="px-1">
          <t-radio
            :id="`${componentName}-${_uid}-2`"
            v-model="radioModel"
            :name="`${componentName}-${_uid}`"
            :value="false"
            :variant="variant"
            :variants="radioVariants"
            :classes="radioClasses"
            :wrapped="wrapped"
            :fixed-classes="radioFixedClasses"
            label="Option B"
          />
        </div>
      </div>
      <div v-else-if="componentName === 'TCheckbox'" class="flex flex-row items-center">
        <div class="px-1">
          <t-checkbox
            :id="`${componentName}-${_uid}-1`"
            v-model="checkboxModel"
            :name="`${componentName}-${_uid}`"
            value="a"
            :variant="variant"
            :variants="checkboxVariants"
            :classes="checkboxClasses"
            :wrapped="wrapped"
            :fixed-classes="checkboxFixedClasses"
            label="Option A"
          />
        </div>
        <div class="px-1">
          <t-checkbox
            :id="`${componentName}-${_uid}-2`"
            v-model="checkboxModel"
            :name="`${componentName}-${_uid}`"
            value="b"
            :variant="variant"
            :variants="checkboxVariants"
            :classes="checkboxClasses"
            :wrapped="wrapped"
            :fixed-classes="checkboxFixedClasses"
            label="Option B"
          />
        </div>
        <div class="px-1">
          <t-checkbox
            :id="`${componentName}-${_uid}-2`"
            v-model="checkboxModel"
            :name="`${componentName}-${_uid}`"
            value="c"
            :variant="variant"
            :variants="checkboxVariants"
            :classes="checkboxClasses"
            :wrapped="wrapped"
            :fixed-classes="checkboxFixedClasses"
            label="Option C"
          />
        </div>
      </div>
      <t-button
        v-else-if="componentName === 'TButton'"
        :variant="variant"
        :variants="radioVariants"
        :classes="radioClasses"
        :fixed-classes="radioFixedClasses"
      >Button example</t-button>
      <t-tag
        v-else-if="componentName === 'TTag'"
        :variant="variant"
        :variants="variants"
        :classes="classes"
        :fixed-classes="fixedClasses"
      >My text</t-tag>
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
        :value="componentValue"
        :checked="true"
        v-bind="componentAttribs"
      />

    </label>
  </div>
</template>
<script>
import Vue from 'vue'
import Icon from '@/components/Icon'
export default Vue.extend({
  components: {
    Icon
  },
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
    },
    wrapped: {
      type: Boolean,
      default: undefined
    }
  },
  data () {
    return {
      date: '2020-02-18',
      radioModel: true,
      checkboxModel: ['a'],
      showModal: true,
      showModalFull: false,
      componentValue: 'Hello there!'
    }
  },
  computed: {
    classes () {
      return this.theme.classes
    },
    fixedClasses () {
      return this.theme.fixedClasses
    },
    variants () {
      return this.theme.variants
    },
    radioClasses () {
      return this.getDemoableRadioClasses(this.classes)
    },
    radioFixedClasses () {
      return this.getDemoableRadioClasses(this.fixedClasses)
    },
    radioVariants () {
      if (this.variants) {
        const demoableVariants = {}

        Object.keys(this.variants).forEach((variantName) => {
          demoableVariants[variantName] = this.getDemoableRadioClasses(this.variants[variantName])
        })

        return demoableVariants
      }

      return undefined
    },
    checkboxClasses () {
      return this.getDemoableCheckboxClasses(this.classes)
    },
    checkboxFixedClasses () {
      return this.getDemoableCheckboxClasses(this.fixedClasses)
    },
    checkboxVariants () {
      if (this.variants) {
        const demoableVariants = {}

        Object.keys(this.variants).forEach((variantName) => {
          demoableVariants[variantName] = this.getDemoableCheckboxClasses(this.variants[variantName])
        })

        return demoableVariants
      }

      return undefined
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
          demoableVariants[variantName] = this.getDemoableModalClasses(this.variants[variantName])
        })

        return demoableVariants
      }

      return undefined
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
    uncheckRadio () {
      this.radioModel = false
      this.$refs.radio.$refs.input.checked = false
    },
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
    getDemoableRadioClasses (classes) {
      if (typeof classes === 'string') {
        return classes
      }

      if (classes) {
        return {
          ...classes,
          ...{
            labelChecked: !classes.labelChecked ? undefined : classes.labelChecked,
            wrapperChecked: !classes.wrapperChecked ? undefined : classes.wrapperChecked
          }
        }
      }

      return null
    },
    getDemoableCheckboxClasses (classes) {
      if (typeof classes === 'string') {
        return classes
      }

      if (classes) {
        return {
          ...classes,
          ...{
            labelChecked: !classes.labelChecked ? undefined : classes.labelChecked,
            wrapperChecked: !classes.wrapperChecked ? undefined : classes.wrapperChecked
          }
        }
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
