<template>
  <playground
    component-name="TSelect"
    src="/playgrounds/t-select"
    :settings.sync="settings"
    :params.sync="params"
    :theme-builder-settings="themeBuilderSettings"
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
          <t-input v-model="params.placeholder" variant="playground" placeholder="No placeholder" />
        </t-input-group>
      </fieldset>
    </template>
  </playground>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep'
import ComponentPlayground from './ComponentPlayground'

const themeBuilderSettings = {
  notWrappedTheme: {
    fixedClasses: 'form-select',
    classes: '',
    variants: {
      danger: 'border-red-300 bg-red-100',
      success: 'border-green-300 bg-green-100'
    }
  },
  wrappedTheme: {
    wrapped: true,
    fixedClasses: {
      wrapper: 'relative',
      input: 'appearance-none focus:outline-none focus:shadow-outline border rounded py-2 px-4 block w-full leading-normal',
      arrowWrapper: 'pointer-events-none absolute inset-y-0 right-0 flex items-center px-2',
      arrow: 'fill-current h-4 w-4'
    },
    classes: {
      wrapper: '',
      input: 'bg-white border-gray-300',
      arrowWrapper: 'text-gray-700',
      arrow: ''
    },
    variants: {
      danger: {
        input: 'bg-red-100 border-red-500',
        arrowWrapper: 'text-red-700'
      }
    }
  }
}
export default ComponentPlayground.extend({

  data () {
    return {
      variant: '',
      themeBuilderSettings,
      params: {
        placeholder: 'Select an option'
      },
      settings: cloneDeep(themeBuilderSettings.notWrappedTheme)
    }
  }
})
</script>
