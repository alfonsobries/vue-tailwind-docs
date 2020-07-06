<template>
  <div>
    <t-input-group label="Alert wrapper class">
      <classes-autocomplete v-model="localValue.wrapper" :placeholder="baseClasses.wrapper" />
    </t-input-group>
    <t-input-group label="Alert body class">
      <classes-autocomplete v-model="localValue.body" :placeholder="baseClasses.body" />
    </t-input-group>
    <t-input-group label="Close button class">
      <classes-autocomplete v-model="localValue.close" :placeholder="baseClasses.close" />
    </t-input-group>
    <t-input-group label="Close icon class">
      <classes-autocomplete v-model="localValue.closeIcon" :placeholder="baseClasses.closeIcon" />
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
        close: '',
        closeIcon: ''
      })
    },
    value: {
      type: Object,
      default: () => ({
        wrapper: '',
        body: '',
        close: '',
        closeIcon: ''
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
