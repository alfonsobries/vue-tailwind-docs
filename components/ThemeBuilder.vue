<template>
  <div id="theme-builder" class="flex shadow">
    <theme-builder-steps
      :current-step="step"
      :last-active-step="lastActiveStep"
      @select="(index) => step = index"
    />
    <div class="w-full px-6 py-5 bg-white rounded rounded-r rounded-br sm:p-6 md:w-3/4">
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
          :not-wrapped-theme="notWrappedTheme"
          :wrapped-theme="wrappedTheme"
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

        <div class="flex justify-between pt-4 mt-8 border-t">
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
import cloneDeep from 'lodash/cloneDeep'
import { notWrappedTheme, wrappedTheme, defaultTheme } from '../utils/demoTheme'
import ThemeBuilderSteps from './ThemeBuilderSteps.vue'
import ThemeBuilderStepSelectComponents from './ThemeBuilderStepSelectComponents.vue'
import ThemeBuilderStepBuildTheme from './ThemeBuilderStepBuildTheme.vue'
import ThemeBuilderStepInstall from './ThemeBuilderStepInstall.vue'
import ThemeBuilderStepShare from './ThemeBuilderStepShare.vue'

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
      theme: cloneDeep(defaultTheme),
      notWrappedTheme,
      wrappedTheme
    }
  },
  computed: {
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
