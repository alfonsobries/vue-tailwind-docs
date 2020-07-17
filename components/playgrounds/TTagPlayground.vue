<template>
  <playground
    component-name="TTag"
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

        <div class="flex flex-wrap -mx-3">
          <t-input-group
            variant="playground"
            label="text"
            class="px-3"
          >
            <t-input v-model="params.text" variant="playground" placeholder="No text" />
          </t-input-group>
          <t-input-group
            variant="playground"
            label="tag"
            class="px-3"
          >
            <t-select v-model="params.tag" variant="playground" :options="params.tagOptions" />
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
        text: 'whats up?',
        tag: 'span',
        tagOptions: ['span', 'h1', 'button', 'p', 'code', 'pre', 'strong', 'i']
      },
      settings: {
        classes: '',
        variants: {
          heading: 'text-2xl leading-8 font-semibold tracking-tight font-display text-gray-900 sm:text-3xl sm:leading-9',
          body: 'mt-2 text-base leading-6 text-gray-500',
          subtitle: 'text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase',
          badge: 'px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800',
          link: 'text-indigo-600 hover:text-indigo-900 underline'
        }
      }
    }
  }
})
</script>
