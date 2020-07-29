<template>
  <playground
    component-name="TRichSelect"
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
          <div class="flex flex-wrap items-center  -mx-3">
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
import ComponentPlayground from './ComponentPlayground'

export default ComponentPlayground.extend({
  data () {
    return {
      variant: '',
      params: {
        placeholder: 'Select an option'
      },
      settings: {
        fixedClasses: {
          wrapper: 'relative',
          buttonWrapper: 'inline-block relative w-full',
          selectButton: 'w-full flex text-left justify-between items-center',
          selectButtonLabel: 'block truncate',
          selectButtonPlaceholder: 'block truncate',
          selectButtonIcon: 'fill-current flex-shrink-0 ml-1 h-4 w-4',
          selectButtonClearButton: 'flex flex-shrink-0 items-center justify-center absolute right-0 top-0 m-2 h-6 w-6',
          selectButtonClearIcon: 'fill-current h-3 w-3',
          dropdown: 'absolute w-full z-10',
          dropdownFeedback: '',
          loadingMoreResults: '',
          optionsList: 'overflow-auto',
          searchWrapper: 'inline-block w-full',
          searchBox: 'inline-block w-full',
          optgroup: '',
          option: '',
          highlightedOption: '',
          selectedOption: '',
          selectedHighlightedOption: '',
          optionContent: '',
          optionLabel: 'truncate block',
          selectedIcon: 'fill-current h-4 w-4',
          enterClass: '',
          enterActiveClass: '',
          enterToClass: '',
          leaveClass: '',
          leaveActiveClass: '',
          leaveToClass: ''
        },
        classes: {
          wrapper: '',
          buttonWrapper: '',
          selectButton: 'bg-white border rounded p-2 focus:outline-none focus:shadow-outline',
          selectButtonLabel: '',
          selectButtonPlaceholder: 'text-gray-500',
          selectButtonIcon: '',
          selectButtonClearButton: 'hover:bg-gray-200 text-gray-500 rounded',
          selectButtonClearIcon: '',
          dropdown: 'rounded bg-white shadow',
          dropdownFeedback: 'text-sm text-gray-500',
          loadingMoreResults: 'text-sm text-gray-500',
          optionsList: '',
          searchWrapper: 'bg-white p-2',
          searchBox: 'p-2 bg-gray-200 text-sm rounded border focus:outline-none focus:shadow-outline',
          optgroup: 'text-gray-500 uppercase text-xs py-1 px-2 font-semibold',
          option: '',
          highlightedOption: 'bg-gray-300',
          selectedOption: 'font-semibold bg-gray-100',
          selectedHighlightedOption: 'bg-gray-300 font-semibold',
          optionContent: 'flex justify-between items-center p-2 cursor-pointer',
          optionLabel: 'truncate block',
          selectedIcon: '',
          enterClass: '',
          enterActiveClass: 'opacity-0 transition ease-out duration-100',
          enterToClass: 'opacity-100',
          leaveClass: 'transition ease-in opacity-100',
          leaveActiveClass: '',
          leaveToClass: 'opacity-0 duration-75'
        },
        variants: {
          danger: {
            selectButton: 'border-red-500 text-red-500 bg-red-100 border rounded p-2 focus:outline-none focus:shadow-outline',
            selectButtonPlaceholder: 'text-red-400',
            selectButtonClearButton: 'hover:bg-red-200 text-red-500 rounded'
          },
          success: {
            selectButton: 'border-green-500 text-green-500 bg-green-100 border rounded p-2 focus:outline-none focus:shadow-outline',
            selectButtonPlaceholder: 'text-green-400',
            selectButtonClearButton: 'hover:bg-green-200 text-green-500 rounded'
          }
        }
      }
    }
  }

})
</script>
