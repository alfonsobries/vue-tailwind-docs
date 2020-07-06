<template>
  <div>
    <tip v-show="!settings.wrapped" class="border-b text-sm leading-5 items-stretch" closable>
      Notice that the radio buttons ignore most of the CSS classes. For the demo below we use the <a class="underline" href="https://github.com/tailwindcss/custom-forms">tailwind custom forms plugin</a> that adds the `<i>form-radio</i>` class that make the input more customizable.
    </tip>
    <div class="p-4">
      <div class="flex" :class="{'-mx-2': !settings.wrapped}">
        <div v-for="option in options" :key="option" :class="{'px-2': !settings.wrapped}">
          <t-radio
            v-model="currentValue"
            name="radio-example"
            :value="option"
            :classes="settings.classes"
            :variant="settings.variant ? settings.variant : undefined"
            :variants="settings.variants"
            :wrapped="settings.wrapped"
            :label="option"
          />
        </div>
      </div>
      <p class="mt-4">
        <span class="text-gray-500 text-sm">Current value:</span>
        <span class="ml-2 bg-gray-200 font-mono px-3 py-1 rounded text-gray-900  text-sm">{{ currentValue || '-' }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import ComponentDemo from './ComponentDemo'

export default ComponentDemo.extend({
  data () {
    return {
      currentValue: 'Option A',
      options: [
        'Option A',
        'Option B',
        'Option C'
      ]
    }
  }
})
</script>
