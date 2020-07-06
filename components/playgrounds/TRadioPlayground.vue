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
              v-model="wrapped"
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
          v-if="wrapped"
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
      wrapped: true,
      simpleSettings: {
        classes: 'form-radio h-4 w-4 transition duration-150 ease-in-out',
        variants: {
          error: 'form-radio h-4 w-4 text-red-500 transition duration-150 ease-in-out',
          success: 'form-radio h-4 w-4 text-green-500 transition duration-150 ease-in-out',
          orange: 'form-radio h-4 w-4 text-orange-500 transition duration-150 ease-in-out'
        }
      },
      wrappedDettings: {
        classes: {
          label: '',
          labelChecked: '',
          wrapper: 'mx-1 bg-white border border-gray-300 flex items-center px-4 py-2 rounded shadow-sm cursor-pointer focus:shadow-outline text-sm text-gray-700 hover:text-gray-500 leading-5 uppercase',
          wrapperChecked: 'mx-1 bg-gray-100 border border-gray-300 flex items-center px-4 py-2 rounded shadow-inner cursor-pointer focus:shadow-outline text-sm text-gray-700 hover:text-gray-500 leading-5 uppercase',
          input: 'absolute invisible'
        },
        variants: {
          error: {
            label: '',
            labelChecked: '',
            wrapper: 'mx-1 bg-red-100 border border-red-200 flex items-center px-4 py-2 rounded shadow-sm cursor-pointer focus:shadow-outline text-sm text-red-700 hover:text-red-500 leading-5 uppercase',
            wrapperChecked: 'mx-1 bg-red-500 border border-red-500 flex items-center px-4 py-2 rounded shadow-inner cursor-pointer focus:shadow-outline text-sm text-red-100 hover:text-red-200 leading-5 uppercase',
            input: 'absolute invisible'
          },
          success: {
            label: '',
            labelChecked: '',
            wrapper: 'mx-1 bg-green-100 border border-green-200 flex items-center px-4 py-2 rounded shadow-sm cursor-pointer focus:shadow-outline text-sm text-green-700 hover:text-green-500 leading-5 uppercase',
            wrapperChecked: 'mx-1 bg-green-500 border border-green-500 flex items-center px-4 py-2 rounded shadow-inner cursor-pointer focus:shadow-outline text-sm text-green-100 hover:text-green-200 leading-5 uppercase',
            input: 'absolute invisible'
          },
          tabs: {
            label: '',
            labelChecked: '',
            wrapper: 'whitespace-no-wrap py-4 px-5 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 cursor-pointer mb-3 inline-flex',
            wrapperChecked: 'whitespace-no-wrap py-4 px-5 border-b-2 border-orange-500 font-medium text-sm leading-5 text-orange-600 focus:outline-none focus:text-orange-800 focus:border-orange-700  cursor-pointer mb-3 inline-flex ',
            input: 'absolute invisible'
          }
        }
      }
    }
  },
  computed: {
    settings: {
      get () {
        if (this.wrapped) {
          return {
            wrapped: true,
            ...this.wrappedDettings
          }
        } else {
          return this.simpleSettings
        }
      },
      set (settings) {
        if (this.wrapped) {
          this.wrappedDettings = settings
        } else {
          this.simpleSettings = settings
        }
      }
    }
  }
})
</script>
