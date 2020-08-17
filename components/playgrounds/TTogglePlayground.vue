<template>
  <playground
    component-name="TToggle"
    :settings.sync="settings"
    :variant="variant"
    :params="params"
  >
    <template slot="controls">
      <fieldset>
        <t-input-group
          variant="playground"
          :label="themeWasChanged ? 'Custom variants' : 'Example variants'"
        >
          <div class="flex flex-wrap items-center -mx-3">
            <label
              key="---"
              for="variant---"
              class="px-3 py-2 flex items-center "
            >
              <input
                id="variant---"
                v-model="variant"
                :value="''"
                name="variant"
                type="radio"
                class="form-radio h-4 w-4 text-orange-600 transition duration-150 ease-in-out"
              >

              <span class="block text-sm leading-5 font-medium text-gray-700 ml-3 capitalize">
                Default
              </span>
            </label>

            <label
              v-for="(v, variantName) in settings.variants"
              :key="variantName"
              :for="`variant-${variantName}`"
              class="px-3 py-2 flex items-center "
            >
              <input
                :id="`variant-${variantName}`"
                v-model="variant"
                :value="variantName"
                name="variant"
                type="radio"
                class="form-radio h-4 w-4 text-orange-600 transition duration-150 ease-in-out"
              >

              <span class="block text-sm leading-5 font-medium text-gray-700 ml-3 capitalize">
                {{ variantName }}
              </span>
            </label>
          </div>
        </t-input-group>

        <div class="flex flex-wrap align-bottom -mx-3">
          <t-input-group
            variant="playground"
            label="checked value"
            class="px-3"
          >
            <t-input v-model="params.value" variant="playground" />
          </t-input-group>
          <t-input-group
            variant="playground"
            label="unchecked value"
            class="px-3"
          >
            <t-input v-model="params.uncheckedValue" variant="playground" />
          </t-input-group>
        </div>
      </fieldset>
    </template>
  </playground>
</template>

<script>
import ComponentPlayground from './ComponentPlayground'

export default ComponentPlayground.extend({
  data () {
    return {
      variant: '',
      params: {
        value: 'accept',
        uncheckedValue: 'deny'
      },
      settings: {
        fixedClasses: {
          wrapper: 'relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200',
          wrapperChecked: 'relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200',
          button: 'inline-block absolute transform translate-x-0 transition ease-in-out duration-200',
          buttonChecked: 'inline-block absolute transform translate-x-full transition ease-in-out duration-200',
          checkedPlaceholder: 'inline-block',
          uncheckedPlaceholder: 'inline-block'
        },
        classes: {
          wrapper: 'bg-gray-200 focus:outline-none focus:shadow-outline rounded-full border-2 border-transparent',
          wrapperChecked: 'bg-blue-500 focus:outline-none focus:shadow-outline rounded-full border-2 border-transparent',
          button: 'h-5 w-5 rounded-full bg-white shadow  flex items-center justify-center text-gray-400 text-xs',
          buttonChecked: 'h-5 w-5 rounded-full bg-white shadow  flex items-center justify-center text-blue-500 text-xs',
          checkedPlaceholder: 'rounded-full w-5 h-5 flex items-center justify-center text-gray-500 text-xs',
          uncheckedPlaceholder: 'rounded-full w-5 h-5 flex items-center justify-center text-gray-500 text-xs'
        },
        variants: {
          danger: {
            wrapperChecked: 'bg-red-500 focus:outline-none focus:shadow-outline rounded-full border-2 border-transparent'
          },
          success: {
            wrapperChecked: 'bg-green-500 focus:outline-none focus:shadow-outline rounded-full border-2 border-transparent'
          },
          box: {
            wrapper: 'bg-gray-200 focus:outline-none focus:shadow-outline rounded-sm border-2 border-transparent',
            wrapperChecked: 'bg-blue-500 focus:outline-none focus:shadow-outline rounded-sm border-2 border-transparent',
            button: 'h-6 w-6 rounded-sm bg-white shadow  flex items-center justify-center text-gray-400 text-xs',
            buttonChecked: 'h-6 w-6 rounded-sm bg-white shadow  flex items-center justify-center text-blue-500 text-xs',
            checkedPlaceholder: 'rounded-sm h-6 w-6 flex items-center justify-center text-gray-500 text-xs',
            uncheckedPlaceholder: 'rounded-sm h-6 w-6 flex items-center justify-center text-gray-500 text-xs'
          }
        }
      }
    }
  }
})
</script>
