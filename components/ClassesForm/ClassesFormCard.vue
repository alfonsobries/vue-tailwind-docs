<template>
  <div>
    <t-input-group label="Card wrapper class">
      <classes-autocomplete v-model="localValue.wrapper" :placeholder="baseClasses.wrapper" />
    </t-input-group>
    <t-input-group label="Card body class">
      <classes-autocomplete v-model="localValue.body" :placeholder="baseClasses.body" />
    </t-input-group>
    <t-input-group label="Header class">
      <classes-autocomplete v-model="localValue.header" :placeholder="baseClasses.header" />
    </t-input-group>
    <t-input-group label="Footer class">
      <classes-autocomplete v-model="localValue.footer" :placeholder="baseClasses.footer" />
    </t-input-group>
  </div>
</template>

<script>
import ClassesAutocomplete from '@/components/ClassesAutocomplete.vue'
export default {
  components: {
    ClassesAutocomplete
  },
  props: {
    baseClasses: {
      type: Object,
      default: () => ({
        wrapper: '',
        body: '',
        header: '',
        footer: ''
      })
    },
    value: {
      type: Object,
      default: () => ({
        wrapper: '',
        body: '',
        header: '',
        footer: ''
      })
    }
  },
  data () {
    return {
      localValue: this.value
    }
  },
  watch: {
    localValue: {
      handler (localValue) {
        this.$emit('input', localValue)
      },
      deep: true
    },
    value (value) {
      this.localValue = value
    }
  }
}
</script>
