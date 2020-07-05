<template>
  <playground
    component-name="TRadio"
    src="/playgrounds/t-radio"
    :settings.sync="settings"
    :variant="variant"
  >
    <template slot="controls">
      <fieldset>
        <t-input-group variant="playground">
          <label
            for="wrapped"
            class=" flex"
          >
            <t-checkbox
              id="wrapped"
              v-model="settings.wrapped"
              name="wrapped"
              class="form-checkbox h-4 w-4 text-orange-600 transition duration-150 ease-in-out mt-1"
            />

            <div class="ml-3">
              <strong class="block text-sm font-medium text-gray-700 capitalize">
                Wrapped
              </strong>
              <span class="text-sm text-gray-500 leading-none block">If set it add some extra HTML tags and and accepts a text label.</span>
            </div>

          </label>
        </t-input-group>

        <t-input-group
          v-if="settings.wrapped"
          class="mt-2"
          variant="playground"
          :label="themeWasChanged ? 'Custom variants for wrapped' : 'Example variants for wrapped'"
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
          v-else
          class="mt-2"
          variant="playground"
          :label="themeWasChanged ? 'Custom variants for input' : 'Example variants input'"
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
      settings: {
        wrapped: true,
        classes: 'form-radio h-4 w-4 transition duration-150 ease-in-out',
        variants: {
          error: 'form-radio h-4 w-4 text-red-500 transition duration-150 ease-in-out',
          success: 'form-radio h-4 w-4 text-green-500 transition duration-150 ease-in-out',
          orange: 'form-radio h-4 w-4 text-orange-500 transition duration-150 ease-in-out'
        }
      }
    }
  }
})
</script>
