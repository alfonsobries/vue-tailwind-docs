<template>
  <playground
    component-name="TSelect"
    src="/playgrounds/t-select"
    :settings.sync="settings"
    :params.sync="params"
    :variant="variant"
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

        <t-input-group
          variant="playground"
          label="Placeholder"
        >
          <t-input v-model="params.placeholder" variant="playground" />
        </t-input-group>
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
        placeholder: 'Select an option'
      },
      settings: {
        classes: 'form-select w-full leading-normal',
        variants: {
          error: 'form-select text-red-600 bg-red-100 focus:outline-none focus:shadow-outline border-red-300 w-full leading-normal',
          success: 'form-select text-green-600 bg-green-100 focus:outline-none focus:shadow-outline border-green-300 w-full leading-normal',
          fun: 'form-select bg-orange-100 border-2 border-orange-300 focus:border-orange-500 focus:outline-none leading-normal px-4 py-3 rounded-full shadow-inner w-full'
        }
      }
    }
  }
})
</script>
