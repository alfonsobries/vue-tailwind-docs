<template>
  <div>
    <t-input-group label="Wrapper class">
      <classes-autocomplete v-model="localValue.wrapper" :placeholder="baseClasses.wrapper" />
    </t-input-group>
    <t-input-group label="Label class">
      <classes-autocomplete v-model="localValue.label" :placeholder="baseClasses.label" />
    </t-input-group>
    <t-input-group label="Feedback class">
      <classes-autocomplete v-model="localValue.feedback" :placeholder="baseClasses.feedback" />
    </t-input-group>
    <t-input-group label="Description class">
      <classes-autocomplete v-model="localValue.description" :placeholder="baseClasses.description" />
    </t-input-group>
    <t-input-group label="Body class">
      <classes-autocomplete v-model="localValue.body" :placeholder="baseClasses.body" />
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
