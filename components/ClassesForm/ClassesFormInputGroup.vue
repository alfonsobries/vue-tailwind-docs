<template>
  <div>
    <t-input-group label="Wrapper class">
      <classes-autocomplete v-model="localvalue.wrapper" />
    </t-input-group>
    <t-input-group label="Label class">
      <classes-autocomplete v-model="localvalue.label" />
    </t-input-group>
    <t-input-group label="Feedback class">
      <classes-autocomplete v-model="localvalue.feedback" />
    </t-input-group>
    <t-input-group label="Description class">
      <classes-autocomplete v-model="localvalue.description" />
    </t-input-group>
    <t-input-group label="Body class">
      <classes-autocomplete v-model="localvalue.body" />
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
