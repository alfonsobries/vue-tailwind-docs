<template>
  <div>
    <t-input-group label="Wrapper class">
      <classes-autocomplete v-model="localvalue.wrapper" :placeholder="baseClasses.wrapper" />
    </t-input-group>
    <t-input-group label="Label class">
      <classes-autocomplete v-model="localvalue.label" :placeholder="baseClasses.label" />
    </t-input-group>
    <t-input-group label="Feedback class">
      <classes-autocomplete v-model="localvalue.feedback" :placeholder="baseClasses.feedback" />
    </t-input-group>
    <t-input-group label="Description class">
      <classes-autocomplete v-model="localvalue.description" :placeholder="baseClasses.description" />
    </t-input-group>
    <t-input-group label="Body class">
      <classes-autocomplete v-model="localvalue.body" :placeholder="baseClasses.body" />
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
        label: '',
        feedback: '',
        description: '',
        body: ''
      })
    },
    value: {
      type: Object,
      default: () => ({
        wrapper: '',
        label: '',
        feedback: '',
        description: '',
        body: ''
      })
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
