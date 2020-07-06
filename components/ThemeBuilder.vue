<template>
  <div id="theme-builder" class="flex shadow">
    <theme-builder-steps
      :current-step="step"
      :last-active-step="lastActiveStep"
      @select="(index) => step = index"
    />
    <div class="px-6 bg-white rounded w-full rounded-r rounded-br px-4 py-5 bg-white sm:p-6">
      <div class="w-full md:pl-4">
        <theme-builder-step-select-components
          v-show="step === 0"
          v-model="selectedComponents"
          @ready="stepReady = 0"
          @notready="stepReady = null"
        />

        <theme-builder-step-build-theme
          v-show="step === 1"
          v-model="theme"
          :selected-components="sortedSelectedComponents"
          @ready="step === 1 ? stepReady = 2 : undefined"
        />

        <theme-builder-step-install
          v-show="step === 2"
          :theme="theme"
        />

        <theme-builder-step-share
          v-show="step === 3"
          :theme="theme"
        />

        <div class="flex justify-between mt-8 pt-4 border-t">
          <t-button
            type="button"
            :variant="{
              'disabledLink': step <= 0,
              'link' : step > 0
            }"
            :disabled="step <= 0"
            @click="prevStep"
          >
            Prev step
          </t-button>
          <t-button
            v-if="step < 3"
            type="button"
            :disabled="nextStepDisabled"
            :variant="{
              'disabled': nextStepDisabled
            }"
            @click="nextStep"
          >
            Next step
          </t-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import clone from 'lodash/clone'
import ThemeBuilderSteps from './ThemeBuilderSteps.vue'
import ThemeBuilderStepSelectComponents from './ThemeBuilderStepSelectComponents.vue'
import ThemeBuilderStepBuildTheme from './ThemeBuilderStepBuildTheme.vue'
import ThemeBuilderStepInstall from './ThemeBuilderStepInstall.vue'
import ThemeBuilderStepShare from './ThemeBuilderStepShare.vue'

const defaultTheme = {
  TInputGroup: {
    classes: {
      wrapper: 'mb-4',
      label: 'block uppercase tracking-wide text-xs font-bold mb-1',
      body: '',
      feedback: 'text-sm text-gray-500',
      description: 'text-sm text-gray-500'
    },
    variants: {
      danger: {
        label: 'block uppercase tracking-wide text-xs font-bold mb-1 text-red-500',
        feedback: 'text-sm text-red-500'
      }
    }
  },
  TInput: {
    classes: 'form-input',
    variants: {
      danger: 'form-input border-red-300 bg-red-100',
      success: 'form-input border-green-300 bg-green-100'
    }
  },
  TTextarea: {
    classes: 'form-textarea',
    variants: {
      danger: 'form-textarea border-red-300 bg-red-100',
      success: 'form-textarea border-green-300 bg-green-100'
    }
  },

  TRadio: {
    classes: 'form-radio',
    variants: {
      danger: 'form-radio border-red-300 bg-red-100 text-red-500',
      success: 'form-radio border-green-300 bg-green-100 text-green-500'
    }
  },
  TCheckbox: {
    classes: 'form-checkbox',
    variants: {
      danger: 'form-checkbox border-red-300 bg-red-100 text-red-500',
      success: 'form-checkbox border-green-300 bg-green-100 text-green-500'
    }
  },
  TSelect: {
    fixedClasses: 'form-select',
    classes: '',
    variants: {
      danger: 'border-red-300 bg-red-100',
      success: 'border-green-300 bg-green-100'
    }
  },
  // TSelectWrapped: {
  //   wrapped: true,
  //   fixedClasses: {
  //     wrapper: 'relative',
  //     input: 'appearance-none focus:outline-none focus:shadow-outline border rounded py-2 px-4 block w-full leading-normal',
  //     arrowWrapper: 'pointer-events-none absolute inset-y-0 right-0 flex items-center px-2',
  //     arrow: 'fill-current h-4 w-4'
  //   },
  //   classes: {
  //     wrapper: '',
  //     input: 'bg-white border-gray-500',
  //     arrowWrapper: 'text-gray-700',
  //     arrow: ''
  //   },
  //   variants: {
  //     danger: {
  //       input: 'bg-red-100 border-red-500',
  //       arrowWrapper: 'text-red-700'
  //     }
  //   }
  // },

  TRichSelect: {
    classes: {
      wrapper: 'relative',
      buttonWrapper: 'inline-block w-full relative',
      selectButton: 'w-full border bg-white flex text-left justify-between items-center rounded p-2 focus:outline-none focus:shadow-outline',
      selectButtonLabel: 'block truncate',
      selectButtonPlaceholder: 'block truncate text-gray-500',
      selectButtonIcon: 'fill-current flex-shrink-0 ml-1 h-4 w-4',
      selectButtonClearButton: 'hover:bg-gray-200 text-gray-500 rounded flex flex-shrink-0 items-center justify-center absolute right-0 top-0 m-2 h-6 w-6',
      selectButtonClearIcon: 'fill-current h-3 w-3',
      dropdown: 'absolute w-full rounded bg-white shadow z-10',
      dropdownFeedback: 'p-2 text-sm text-gray-500',
      loadingMoreResults: 'p-2 text-sm text-gray-500',
      optionsList: 'overflow-auto',
      searchWrapper: 'inline-block w-full bg-white p-2',
      searchBox: 'inline-block w-full p-2 bg-gray-200 text-sm rounded border focus:outline-none focus:shadow-outline',
      optgroup: 'text-gray-500 uppercase text-xs py-1 px-2 font-semibold',
      option: '',
      highlightedOption: 'bg-gray-300',
      selectedOption: 'font-semibold bg-gray-100',
      selectedHighlightedOption: 'bg-gray-300 font-semibold',
      optionContent: 'flex justify-between p-2 items-center',
      optionLabel: 'truncate block',
      selectedIcon: 'fill-current h-4 w-4'
    },
    variants: {
      danger: {
        selectButton: 'w-full border border-red-500 text-red-500 bg-red-100 flex text-left justify-between items-center rounded p-2 focus:outline-none focus:shadow-outline',
        selectButtonPlaceholder: 'block truncate text-red-400',
        selectButtonClearButton: 'hover:bg-red-200 text-red-500 rounded flex flex-shrink-0 items-center justify-center absolute right-0 top-0 m-2 h-6 w-6'
      }
    }
  },
  TAlert: {
    classes: {
      wrapper: 'rounded bg-blue-100 p-4 flex text-sm border-l-4 border-blue-500',
      body: 'flex-grow text-blue-700',
      close: 'text-blue-700 hover:text-blue-500 hover:bg-blue-200 ml-4 rounded',
      closeIcon: 'h-5 w-5 fill-current'
    },
    variants: {
      danger: {
        wrapper: 'rounded bg-red-100 p-4 flex text-sm border-l-4 border-red-500',
        body: 'flex-grow text-red-700',
        close: 'text-red-700 hover:text-red-500 hover:bg-red-200 ml-4 rounded'
      },
      success: {
        wrapper: 'rounded bg-green-100 p-4 flex text-sm border-l-4 border-green-500',
        body: 'flex-grow text-green-700',
        close: 'text-green-700  hover:text-green-500 hover:bg-green-200 ml-4 rounded'
      }
    }
  },
  TCard: {
    classes: {
      wrapper: 'rounded max-w-lg mx-auto bg-white shadow',
      body: 'p-4',
      header: 'p-4 border-b',
      footer: 'p-4 border-t'
    },
    variants: {
      danger: {
        wrapper: 'rounded max-w-lg mx-auto bg-red-100 text-red-700 shadow',
        header: 'p-4 border-b border-red-200 text-red-700',
        footer: 'p-4 border-t border-red-200 bg-red-100 text-red-700 text-sm'
      }
    }
  },
  TModal: {
    classes: {
      overlay: 'z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-black bg-opacity-50',
      wrapper: 'z-50 relative mx-auto my-0 max-w-lg mt-12',
      modal: 'bg-white shadow overflow-hidden relative',
      body: 'p-4',
      header: 'p-4 border-b text-sm font-semibold uppercase text-gray-700',
      footer: 'p-2 border-t',
      close: 'absolute right-0 top-0 m-3 text-gray-700 hover:text-gray-600',
      closeIcon: 'h-5 w-5 fill-current'
    },
    variants: {
      danger: {
        overlay: 'z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-red-500 bg-opacity-50',
        header: 'p-4 border-b border-red-100 text-sm font-semibold uppercase text-red-700',
        footer: 'p-2 border-t border-red-100 bg-red-100',
        close: 'absolute right-0 top-0 m-3 text-red-700 hover:text-red-600'
      }
    }
  }
}

export default Vue.extend({
  components: {
    ThemeBuilderSteps,
    ThemeBuilderStepSelectComponents,
    ThemeBuilderStepBuildTheme,
    ThemeBuilderStepInstall,
    ThemeBuilderStepShare
  },
  data () {
    return {
      step: 0,
      stepReady: 0,
      lastActiveStep: 0,
      selectedComponents: Object.keys(defaultTheme),
      sortedComponents: Object.keys(defaultTheme),
      theme: clone(defaultTheme)
    }
  },
  computed: {
    nextStepDisabled () {
      return this.stepReady === null || this.stepReady < this.step
    },
    sortedSelectedComponents () {
      return this.sortedComponents.filter((componentName) => {
        return this.selectedComponents.includes(componentName)
      })
    }
  },
  watch: {
    async step (step) {
      if (step > this.lastActiveStep) {
        this.lastActiveStep = step
      }

      await this.$nextTick()
      this.$el.scrollIntoView({ behavior: 'smooth' })
    },
    sortedSelectedComponents (selectedComponents) {
      const theme = {}
      selectedComponents.forEach((componentName) => {
        theme[componentName] = defaultTheme[componentName]
      })
      this.theme = theme
    }
  },
  methods: {
    prevStep () {
      this.step--
    },
    nextStep () {
      this.step++
    }
  }
})
</script>
