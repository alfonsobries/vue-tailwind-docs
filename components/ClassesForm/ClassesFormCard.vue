<template>
  <div>
    <t-input-group label="Card wrapper class">
      <classes-autocomplete v-model="localvalue.wrapper" />
    </t-input-group>
    <t-input-group label="Card body class">
      <classes-autocomplete v-model="localvalue.body" />
    </t-input-group>
    <t-input-group label="Header class">
      <classes-autocomplete v-model="localvalue.header" />
    </t-input-group>
    <t-input-group label="Footer class">
      <classes-autocomplete v-model="localvalue.footer" />
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
    value: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      localvalue: this.value
    }
  },
  watch: {
    localvalue (localvalue) {
      this.$emit('input', localvalue)
    },
    value (value) {
      this.localvalue = value
    }
  }
}
</script>
