<template>
  <playground
    component-name="TPagination"
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
            label="Current page"
            class="px-3"
          >
            <t-input v-model="params.value" type="number" variant="playground" placeholder="Current page" />
          </t-input-group>
          <t-input-group
            variant="playground"
            label="Total items"
            class="px-3"
          >
            <t-input v-model="params.totalItems" type="number" variant="playground" placeholder="Total items" />
          </t-input-group>
          <t-input-group
            variant="playground"
            label="Per page"
            class="px-3"
          >
            <t-input v-model="params.perPage" type="number" variant="playground" placeholder="Per page" />
          </t-input-group>
          <t-input-group
            variant="playground"
            label="Limit"
            class="px-3"
          >
            <t-input v-model="params.limit" type="number" variant="playground" placeholder="Limit" />
          </t-input-group>
          <label class="flex items-center px-3 py-2 mt-4 ">
            <t-checkbox v-model="params.hideEllipsis" />
            <span class="block ml-3 text-sm font-medium leading-5 text-gray-700 capitalize">
              Hide ellipsis
            </span>
          </label>
          <label class="flex items-center px-3 py-2 mt-4 ">
            <t-checkbox v-model="params.hideFirstLastControls" />
            <span class="block ml-3 text-sm font-medium leading-5 text-gray-700 capitalize">
              Hide first & last
            </span>
          </label>
          <label class="flex items-center px-3 py-2 mt-4 ">
            <t-checkbox v-model="params.hidePrevNextControls" />
            <span class="block ml-3 text-sm font-medium leading-5 text-gray-700 capitalize">
              Hide prev & next
            </span>
          </label>
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
        totalItems: 200,
        perPage: 20,
        value: 2,
        limit: 5,
        hideEllipsis: false,
        hideFirstLastControls: false,
        hidePrevNextControls: false
      },
      settings: {
        classes: {
          wrapper: 'table border-collapse text-center bg-white mx-auto mt-2',
          element: 'w-8 h-8 border table-cell',
          disabledElement: 'w-8 h-8 border table-cell',
          ellipsisElement: 'w-8 h-8 border table-cell',
          activeButton: 'bg-gray-300 w-full h-full',
          disabledButton: 'opacity-25 w-full h-full cursor-not-allowed',
          button: 'hover:bg-gray-200 w-full h-full',
          ellipsis: ''
        },
        variants: {
          rounded: {
            wrapper: 'flex',
            element: 'w-8 h-8 mx-1',
            disabledElement: 'w-8 h-8 mx-1',
            ellipsisElement: 'w-8 h-8 mx-1',
            activeButton: 'bg-blue-500 w-full h-full text-white rounded-full ',
            disabledButton: 'opacity-25 w-full h-full cursor-not-allowed rounded-full',
            button: 'hover:bg-blue-100 w-full h-full text-blue-500 rounded-full ',
            ellipsis: 'text-gray-500'
          }
        }
      }
    }
  }
})
</script>
