<template>
  <div class="flex w-sm bg-gray-800 text-white w-2/5 px-6 py-3 relative flex-col rounded px-6">
    <theme-builder-steps-step
      v-for="(step, index) in steps"
      :key="index"
      :index="index"
      :step="step"
      :current-step-number="currentStep"
      :last-active-step="lastActiveStep"
      @select="$emit('select', index)"
    />
  </div>
</template>
<script>
import Vue from 'vue'
import ThemeBuilderStepsStep from './ThemeBuilderStepsStep.vue'
export default Vue.extend({
  components: {
    ThemeBuilderStepsStep
  },
  props: {
    currentStep: {
      type: Number,
      required: true
    },
    lastActiveStep: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      steps: [
        {
          label: 'Choose the components',
          description: 'Select the component you need for your application'
        },
        {
          label: 'Personalize them',
          description: 'Create yout own theme for every single element'
        },
        {
          label: 'Save and install',
          description: 'Grab the code to use with the VueTailwnd plugin'
        },
        {
          label: 'Share it',
          description: 'Optionally share your theme with the community'
        }
      ]
    }
  }
})
</script>
