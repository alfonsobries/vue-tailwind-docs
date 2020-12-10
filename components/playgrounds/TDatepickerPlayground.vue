<template>
  <playground
    component-name="TDatepicker"
    :settings.sync="settings"
    :params.sync="params"
    :variant="variant"
    :min-height="350"
    :initial-height="350"
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
            label="Months per view"
            class="mx-3"
          >
            <t-select v-model="params.monthsPerView" variant="playground" :options="[1,2,3]" />
          </t-input-group>
          <t-input-group
            variant="playground"
            label="Week start"
            class="mx-3"
          >
            <t-select
              v-model="params.weekStart"
              variant="playground"
              :options="{
                0: 'Sunday',
                1: 'Monday',
                2: 'Tuesday',
                3: 'Wednesday',
                4: 'Thursday',
                5: 'Friday',
                6: 'Saturday',
              }"
            />
          </t-input-group>
          <t-input-group
            variant="playground"
            label="User format"
            class="mx-3"
          >
            <t-select
              v-model="params.userFormat"
              variant="playground"
              :options="['F j, Y', 'Z', 'Y-m-d', 'Y-m-d H:i:S']"
            />
          </t-input-group>
        </div>

        <div class="flex flex-wrap -mx-3 align-bottom">
          <label class="flex items-center px-3 py-2 mt-4 ">
            <t-checkbox v-model="params.clearable" name="clearable" />
            <span class="block ml-3 text-sm font-medium leading-5 text-gray-700 capitalize">
              Clearable
            </span>
          </label>

          <label class="flex items-center px-3 py-2 mt-4 ">
            <t-checkbox v-model="params.inline" name="inline" />
            <span class="block ml-3 text-sm font-medium leading-5 text-gray-700 capitalize">
              Inline
            </span>
          </label>

          <label class="flex items-center px-3 py-2 mt-4 ">
            <t-checkbox v-model="params.range" name="range" />
            <span class="block ml-3 text-sm font-medium leading-5 text-gray-700 capitalize">
              Range
            </span>
          </label>

          <label class="flex items-center px-3 py-2 mt-4 ">
            <t-checkbox v-model="params.multiple" name="multiple" />
            <span class="block ml-3 text-sm font-medium leading-5 text-gray-700 capitalize">
              Multiple
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
        clearable: true,
        inline: true,
        range: false,
        multiple: false,
        monthsPerView: 1,
        weekStart: 0,
        userFormat: 'F j, Y'
      },
      settings: defaultTheme.TDatepicker
    }
  }

})
</script>
