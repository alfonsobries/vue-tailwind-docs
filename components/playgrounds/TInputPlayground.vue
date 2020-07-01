<template>
  <playground
    src="/playgrounds/t-input"
    :params="params"
  >
    <template slot="controls">
      <fieldset>
        <legend class="text-base font-medium text-gray-900">
          Example variants
        </legend>
        <p class="text-xs leading-5 text-gray-500">
          Variants crafted by us as an example
        </p>

        <div class="flex -mx-3">
          <label
            v-for="(v, variantName) in variants"
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
              {{ variantName || 'Default' }}
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
      currentValue: 'I love vuejs 😎',
      variant: '',
      classes: 'bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full leading-normal',
      variants: {
        '': undefined,
        gray: 'block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-normal  ocus:outline-none focus:bg-white focus:border-gray-500',
        error: 'text-red-600 bg-red-100 focus:outline-none focus:shadow-outline border border-red-300 rounded py-2 px-4 block w-full leading-normal ',
        success: 'text-green-600 bg-green-100 focus:outline-none focus:shadow-outline border border-green-300 rounded py-2 px-4 block w-full leading-normal',
        funny: 'bg-orange-100 block border-2 border-orange-300 focus:border-orange-500 focus:outline-none leading-normal px-4 py-3 rounded-full shadow-inner w-full '
      }
    }
  },
  computed: {
    params () {
      return {
        classes: this.classes,
        variant: this.variant,
        variants: JSON.stringify(this.variants)
      }
    }
  }
}
</script>
