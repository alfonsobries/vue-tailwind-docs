<template>
  <div class="flex w-sm bg-gray-800 text-white w-2/5 px-6 py-3 relative flex-col rounded px-6">
    <a
      v-for="(step, index) in steps"
      :key="index"
      href="#"
      class="group flex w-full p-3 my-3 hover:bg-gray-900 rounded"
    >

      <div class="flex-1">
        <h3
          class="text-2xl leading-tight"
          :class="{
            'text-white' : currentStep === index,
            'text-gray-700 group-hover:text-gray-600' : currentStep !== index
          }"
        >
          {{ step.label }}
        </h3>
        <p
          class="text-sm"
          :class="{
            'text-white' : currentStep === index,
            'text-gray-700  group-hover:text-gray-600' : currentStep !== index
          }"
        >
          {{ step.description }}
        </p>
      </div>
      <span
        class="rounded-full p-3 h-12 w-12 flex items-center justify-center mr-3 shadow-inner -mr-12"
        :class="{
          'bg-orange-500' : currentStep === index,
          'bg-gray-700' : currentStep !== index
        }"
      >
        {{ index + 1 }}
      </span>
    </a>
  </div>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
    currentStep: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      steps: [
        {
          label: 'Choose the components',
          description: 'Select the component you want to personalize'
        },
        {
          label: 'Personalize them',
          description: 'Create yout own theme for every single element'
        },
        {
          label: 'Save and download',
          description: 'Grab the code for your own personal theme'
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
