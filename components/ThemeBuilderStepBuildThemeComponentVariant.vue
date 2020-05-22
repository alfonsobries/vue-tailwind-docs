<template>
  <div class="mb-4 border-t pt-4">
    <div class="sm:items-start">
      <div class="mb-3">
        <label
          :for="`classes-${localVariant.id}`"
          class="block text-sm leading-5 font-medium text-gray-700"
        >Variant name</label>
        <t-input v-model="localVariant.name" />
      </div>
    </div>

    <div class="sm:items-start">
      <div class="mb-3">
        <label
          :for="`classes-${localVariant.id}`"
          class="block text-sm leading-5 font-medium text-gray-700"
        >Variant classes</label>
        <classes-autocomplete v-model="localVariant.classes" />
      </div>
    </div>
    <div class="flex flex-col items-center justify-center bg-gray-100 p-4 relative mt-2 shadow-inner">
      <span class="absolute left-0 top-0 m-2 pointer-events-none text-gray-500 uppercase text-sm">Preview</span>
      <t-input
        :id="`classes-${localVariant.id}`"
        v-model="inputValue"
        :name="`classes-${localVariant.id}`"
        class="relative"
        :classes="localVariant.classes ? localVariant.classes : ''"
      />
    </div>
    <p class="text-right">
      <a class="text-red-500 text-sm underline" href="#" @click.prevent="$emit('delete')">Remove variant</a>
    </p>
  </div>
</template>
<script>
import Vue from 'vue'
import ClassesAutocomplete from '@/components/ClassesAutocomplete.vue'
export default Vue.extend({
  components: {
    ClassesAutocomplete
  },
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      localVariant: { ...this.value },
      inputValue: 'Hello there!'
    }
  },
  watch: {
    localVariant: {
      handler (localVariant) {
        this.$emit('input', localVariant)
      },
      immediate: true
    }
  }
})
</script>
