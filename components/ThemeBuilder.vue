<template>
  <div class="flex -mx-6 px-6">
    <theme-builder-steps :current-step="step" />
    <div class="px-6 bg-white rounded w-full border rounded-r rounded-br px-4 py-5 bg-white sm:p-6">
      <form action="#" method="POST">
        <div class="w-full pl-4">
          <theme-builder-step-select-components
            v-if="step === 0"
            v-model="form.selectedComponents"
          />

          <theme-builder-step-build-theme
            v-if="step === 1"
            :components="form.selectedComponents"
          />

          <div class="flex justify-between mt-8 pt-4 border-t">
            <t-button
              type="button"
              :variant="[step <= 0 ? 'disabledLink' : 'link']"
              :disabled="step <= 0"
              @click="prevStep"
            >
              prev step
            </t-button>
            <t-button type="button" @click="nextStep">
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
import Form from 'vform'
import ThemeBuilderSteps from './ThemeBuilderSteps.vue'
import ThemeBuilderStepSelectComponents from './ThemeBuilderStepSelectComponents.vue'
import ThemeBuilderStepBuildTheme from './ThemeBuilderStepBuildTheme.vue'

export default Vue.extend({
  components: {
    ThemeBuilderSteps,
    ThemeBuilderStepSelectComponents,
    ThemeBuilderStepBuildTheme
  },
  data () {
    return {
      step: 1,
      form: new Form({
        selectedComponents: [
          'TInput',
          'TTextarea',
          'TSelect',
          'TRadio',
          'TCheckbox'
        ]
      })
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
