<template>
  <div class="flex -mx-6 px-6">
    <theme-builder-steps
      :current-step="step"
      :last-active-step="lastActiveStep"
      @select="(index) => step = index"
    />
    <div class="px-6 bg-white rounded w-full border rounded-r rounded-br px-4 py-5 bg-white sm:p-6">
      <form action="#" method="POST">
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
            @ready="step === 1 ? stepReady = 2 : undefined"
          />

          <theme-builder-step-install
            v-show="step === 2"
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
      </form>
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

const defaultTheme = {
  TInput: {
    classes: 'form-input',
    theme: {
      danger: 'form-input border-red-300 bg-red-100',
      success: 'form-input border-green-300 bg-green-100'
    }
  },
  TTextarea: {
    classes: 'form-textarea',
    theme: {
      danger: 'form-textarea border-red-300 bg-red-100',
      success: 'form-textarea border-green-300 bg-green-100'
    }
  },
  TSelect: {
    classes: 'form-select',
    theme: {
      danger: 'form-select border-red-300 bg-red-100',
      success: 'form-select border-green-300 bg-green-100'
    }
  },
  TRadio: {
    classes: 'form-radio',
    theme: {
      danger: 'form-radio border-red-300 bg-red-100 text-red-500',
      success: 'form-radio border-green-300 bg-green-100 text-green-500'
    }
  },
  TCheckbox: {
    classes: 'form-checkbox',
    theme: {
      danger: 'form-checkbox border-red-300 bg-red-100 text-red-500',
      success: 'form-checkbox border-green-300 bg-green-100 text-green-500'
    }
  }
}

export default Vue.extend({
  components: {
    ThemeBuilderSteps,
    ThemeBuilderStepSelectComponents,
    ThemeBuilderStepBuildTheme,
    ThemeBuilderStepInstall
  },
  data () {
    return {
      step: 0,
      stepReady: 0,
      lastActiveStep: 0,
      selectedComponents: Object.keys(defaultTheme),
      theme: clone(defaultTheme)
    }
  },
  computed: {
    nextStepDisabled () {
      return this.stepReady === null || this.stepReady < this.step
    }
  },
  watch: {
    step (step) {
      if (step > this.lastActiveStep) {
        this.lastActiveStep = step
      }
    },
    selectedComponents (selectedComponents) {
      const theme = {}
      selectedComponents.map((componentName) => {
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
