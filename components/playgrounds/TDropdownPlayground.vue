<template>
  <playground
    component-name="TDropdown"
    :settings.sync="settings"
    :variant="variant"
    :min-height="180"
    :initial-height="180"
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
        classes: {
          button: 'px-4 py-2 flex items-center border rounded hover:text-gray-700',
          wrapper: 'inline-flex flex-col',
          dropdownWrapper: 'relative z-10',
          dropdown: 'origin-top-right absolute right-0 w-56 rounded-md shadow-lg bg-white',
          enterClass: '',
          enterActiveClass: 'transition ease-out duration-100 transform opacity-0 scale-95',
          enterToClass: 'transform opacity-100 scale-100',
          leaveClass: 'transition ease-in transform opacity-100 scale-100',
          leaveActiveClass: '',
          leaveToClass: 'transform opacity-0 scale-95 duration-75'
        },
        variants: {
          danger: {
            button: 'px-4 py-2 flex items-center border rounded bg-red-100 border-red-600 text-red-500 hover:text-red-400',
            dropdown: 'origin-top-right absolute right-0 w-56 rounded-md shadow bg-red-100'
          }
        }
      }
    }
  }
})
</script>
