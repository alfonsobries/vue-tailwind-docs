<template>
  <playground
    component-name="TInputGroup"
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
        <div class="flex flex-wrap -mx-3">
          <t-input-group
            variant="playground"
            label="label"
            class="px-3"
          >
            <t-input v-model="params.label" variant="playground" placeholder="No label" />
          </t-input-group>
          <t-input-group
            variant="playground"
            label="feedback"
            class="px-3"
          >
            <t-input v-model="params.feedback" variant="playground" placeholder="No feedback" />
          </t-input-group>
          <t-input-group
            variant="playground"
            label="description"
            class="px-3"
          >
            <t-input v-model="params.description" variant="playground" placeholder="No description" />
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
        label: 'Password',
        feedback: 'Password must be at least 6 characters long'
      },
      settings: {
        fixedClasses: {
          wrapper: 'mb-4',
          label: 'block uppercase tracking-wide text-xs font-bold mb-1',
          body: '',
          feedback: 'text-sm',
          description: 'text-sm'
        },
        classes: {
          wrapper: '',
          label: '',
          body: '',
          feedback: 'text-gray-500',
          description: 'text-gray-500'
        },
        variants: {
          danger: {
            label: 'text-red-500',
            feedback: 'text-red-500'
          },
          success: {
            label: 'text-green-500',
            feedback: 'text-green-500'
          }
        }
      }
    }
  }

})
</script>
