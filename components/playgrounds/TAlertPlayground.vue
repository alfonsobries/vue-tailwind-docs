<template>
  <playground
    component-name="TAlert"
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
            label="text"
            class="px-3"
          >
            <t-input v-model="params.text" variant="playground" placeholder="No text" />
          </t-input-group>
          <label class="flex items-center px-3 py-2 mt-4 ">
            <t-checkbox v-model="params.dismissible" />
            <span class="block ml-3 text-sm font-medium leading-5 text-gray-700 capitalize">
              Dismissible
            </span>
          </label>
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
        text: 'Something goes wrong!',
        dismissible: true
      },
      settings: defaultTheme.TAlert
    }
  }
})
</script>
