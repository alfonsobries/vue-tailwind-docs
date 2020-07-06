<template>
  <div>
    <classes-autocomplete v-model="localValue" :placeholder="baseClasses" />
  </div>
</template>

<script>
import ClassesAutocomplete from '@/components/ClassesAutocomplete.vue'
export default {
  components: {
    ClassesAutocomplete
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    baseClasses: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      localValue: this.value
    }
  },
  watch: {
    localValue (localValue) {
      this.$emit('input', localValue)
    },
    value (value) {
      this.localValue = value
    }
  }
}
</script>
