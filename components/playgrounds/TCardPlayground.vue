<template>
  <playground
    component-name="TCard"
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
        footer: 'Footer content'
      },
      settings: {
        fixedClasses: {
          wrapper: 'rounded max-w-lg mx-auto shadow',
          body: 'p-4',
          header: 'p-4 border-b',
          footer: 'p-4 border-t'
        },
        classes: {
          wrapper: 'bg-white',
          body: '',
          header: '',
          footer: ''
        },
        variants: {
          danger: {
            wrapper: 'bg-red-100 text-red-700',
            header: 'border-red-200 text-red-700',
            footer: 'border-red-200 bg-red-100 text-red-700'
          },
          clean: {
            wrapper: 'rounded',
            footer: 'bg-gray-100 ',
            body: 'p-4 text-sm text-gray-700'
          }
        }
      }
    }
  }
})
</script>
