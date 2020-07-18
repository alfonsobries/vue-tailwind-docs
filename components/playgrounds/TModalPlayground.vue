<template>
  <playground
    component-name="TModal"
    :settings.sync="settings"
    :params.sync="params"
    :variant="variant"
    :min-height="300"
    :initial-height="300"
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

        <div class="flex flex-wrap align-bottom -mx-3">
          <t-input-group
            variant="playground"
            label="text"
            class="px-3"
          >
            <t-input v-model="params.header" variant="playground" placeholder="No header" />
          </t-input-group>
          <t-input-group
            variant="playground"
            label="body"
            class="px-3"
          >
            <t-input v-model="params.body" variant="playground" placeholder="No body" />
          </t-input-group>
          <t-input-group
            variant="playground"
            label="footer"
            class="px-3"
          >
            <t-input v-model="params.footer" variant="playground" placeholder="No footer" />
          </t-input-group>
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
        header: 'Header content',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet diam risus, et vulputate mauris sagittis at.',
        footer: 'Footer content',
        dismissible: true
      },
      settings: {
        fixedClasses: {
          overlay: 'z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-opacity-50',
          wrapper: 'z-50 relative mx-auto my-0 max-w-lg mt-12',
          modal: 'bg-white shadow overflow-hidden relative',
          body: 'p-4',
          header: 'p-4  text-sm font-semibold uppercase text-gray-700',
          footer: 'p-4 text-sm font-semibold uppercase text-gray-700',
          close: 'absolute right-0 top-0 m-3 text-gray-700 hover:text-gray-600',
          closeIcon: 'h-5 w-5 fill-current'
        },
        classes: {
          overlay: 'bg-black ',
          wrapper: '',
          modal: '',
          body: 'p-4',
          header: 'text-gray-700 border-b',
          footer: 'border-t ',
          close: 'text-gray-700 hover:text-gray-600',
          closeIcon: ''
        },
        variants: {
          danger: {
            overlay: 'bg-red-500',
            header: 'border-red-100 text-red-700 border-b',
            footer: 'border-red-100 bg-red-100 border-t  ',
            close: 'text-red-700 hover:text-red-600'
          },
          clean: {
            modal: 'rounded shadow-lg',
            footer: 'bg-gray-100 ',
            body: 'p-4 text-sm text-gray-700',
            close: 'bg-blue-100 p-1 flex items-center justify-center leading-normal rounded-full text-blue-80 hover:bg-blue-200'
          }
        }
      }
    }
  }
})
</script>
