<template>
  <playground
    component-name="TInput"
    src="/playgrounds/t-input"
    :settings.sync="settings"
    :variant="variant"
  >
    <template slot="controls">
      <fieldset>
        <label for="variant" class="text-xs font-medium uppercase text-gray-500 leading-none">
          {{ themeWasChanged ? 'Custom' : 'Example' }} variants:
        </label>
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
      </fieldset>
    </template>
  </playground>
</template>

<script>
export default {
  data () {
    return {
      themeWasChanged: false,
      currentValue: 'I love vuejs 😎',
      variant: '',
      settings: {
        classes: 'bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full leading-normal',
        variants: {
          error: 'text-red-600 bg-red-100 focus:outline-none focus:shadow-outline border border-red-300 rounded py-2 px-4 block w-full leading-normal ',
          success: 'text-green-600 bg-green-100 focus:outline-none focus:shadow-outline border border-green-300 rounded py-2 px-4 block w-full leading-normal',
          fun: 'bg-orange-100 block border-2 border-orange-300 focus:border-orange-500 focus:outline-none leading-normal px-4 py-3 rounded-full shadow-inner w-full '
        }
      }
    }
  },
  watch: {
    settings () {
      this.themeWasChanged = true
    }
  }
}
</script>
