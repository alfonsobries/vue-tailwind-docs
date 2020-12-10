<template>
  <playground
    component-name="TSelect"
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
              class="flex items-center px-3 py-2 "
            >
              <t-radio
                id="variant---"
                v-model="variant"
                :value="''"
                name="variant"
              />

              <span class="block ml-3 text-sm font-medium leading-5 text-gray-700 capitalize">
                Default
              </span>
            </label>

            <label
              v-for="(v, variantName) in settings.variants"
              :key="variantName"
              :for="`variant-${variantName}`"
              class="flex items-center px-3 py-2 "
            >
              <t-radio
                :id="`variant-${variantName}`"
                v-model="variant"
                :value="variantName"
                name="variant"
              />

              <span class="block ml-3 text-sm font-medium leading-5 text-gray-700 capitalize">
                {{ variantName }}
              </span>
            </label>
          </div>
        </t-input-group>
        <div class="flex flex-col -mx-3 sm:items-end sm:flex-row">
          <t-input-group
            variant="playground"
            label="Placeholder"
            class="px-3"
          >
            <t-input v-model="params.placeholder" variant="playground" placeholder="No placeholder" />
          </t-input-group>

          <t-input-group variant="playground" class="px-3 mt-3 sm:mt-0">
            <label
              for="wrapped"
              class="flex "
            >
              <t-checkbox
                id="wrapped"
                v-model="wrapped"
                name="wrapped"
                class="w-4 h-4 mt-1 text-orange-600 transition duration-150 ease-in-out form-checkbox"
              />

              <div class="ml-3">
                <strong class="block text-sm font-medium text-gray-700 capitalize">
                  Wrapped
                </strong>
                <span class="block text-sm leading-none text-gray-500">Wraps the select tag in a div and some extra HTML that make the element more customizable.</span>
              </div>
            </label>
          </t-input-group>
        </div>
      </fieldset>
    </template>
  </playground>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep'
import { notWrappedTheme, wrappedTheme } from '../../utils/demoTheme'
import ComponentPlayground from './ComponentPlayground'

const themeBuilderSettings = {
  notWrappedTheme: notWrappedTheme.TSelect,
  wrappedTheme: wrappedTheme.TSelect
}

export default ComponentPlayground.extend({
  data () {
    return {
      wrapped: false,
      variant: '',
      themeBuilderSettings,
      params: {
        placeholder: 'Select an option'
      },
      settings: cloneDeep(themeBuilderSettings.notWrappedTheme)
    }
  },
  watch: {
    wrapped (wrapped) {
      if (wrapped) {
        this.settings = cloneDeep(themeBuilderSettings.wrappedTheme)
      } else {
        this.settings = cloneDeep(themeBuilderSettings.notWrappedTheme)
      }
    },
    'settings.wrapped' (wrapped) {
      this.wrapped = !!wrapped
    }
  }
})
</script>
