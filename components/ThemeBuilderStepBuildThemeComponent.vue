<template>
  <fieldset>
    <div
      class="text-base leading-6 font-medium text-gray-900 p-4 flex items-center cursor-pointer"
      :class="{ 'border-t': index > 0, 'border-b': selected }"
      @click="$emit('select')"
    >
      <icon class="h-4 w-4 text-gray-600">
        <polygon id="Path-126" points="0 11 2 9 7 14 18 3 20 5 7 18" />
      </icon>

      <span class="ml-2">{{ componentName }}</span>

      <icon class="h-4 w-4 text-gray-600 ml-auto">
        <polygon v-if="selected" id="Combined-Shape" points="9.29289322 12.9497475 10 13.6568542 15.6568542 8 14.2426407 6.58578644 10 10.8284271 5.75735931 6.58578644 4.34314575 8" />
        <polygon v-else id="Combined-Shape" points="10.7071068 7.05025253 10 6.34314575 4.34314575 12 5.75735931 13.4142136 10 9.17157288 14.2426407 13.4142136 15.6568542 12" />
      </icon>
    </div>

    <div v-show="selected" class="p-4">
      <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-b sm:border-gray-200 sm:py-5 sm:mb-5">
        <label for="first_name" class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
          First name
        </label>
        <div class="mt-1 sm:mt-0 sm:col-span-2">
          <classes-autocomplete v-model="classes" />
        </div>
      </div>
      <div class="flex flex-col items-center justify-center border-dotted border-4 bg-gray-100 p-4 relative">
        <span class="absolute left-0 top-0 m-2 pointer-events-none text-gray-500 uppercase text-sm">Preview</span>
        <t-input v-model="inputValue" :classes="classes ? classes : ''" />
      </div>
    </div>
  </fieldset>
</template>
<script>
import Vue from 'vue'
import Icon from '@/components/Icon'
import ClassesAutocomplete from '@/components/ClassesAutocomplete.vue'
export default Vue.extend({
  components: {
    Icon,
    ClassesAutocomplete
  },
  props: {
    selected: {
      type: Boolean,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    componentName: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      classes: 'form-input',
      inputValue: 'Hello there!'
    }
  }
})
</script>
