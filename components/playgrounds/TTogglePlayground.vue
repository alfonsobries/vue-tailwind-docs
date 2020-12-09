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

        <div class="flex flex-wrap -mx-3 align-bottom">
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
import { defaultTheme } from '../../utils/demoTheme'
import ComponentPlayground from './ComponentPlayground'

export default ComponentPlayground.extend({
  data () {
    return {
      variant: '',
      params: {
        value: 'accept',
        uncheckedValue: 'deny'
      },
      settings: defaultTheme.TToggle
    }
  }
})
</script>
