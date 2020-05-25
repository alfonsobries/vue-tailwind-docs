<template>
  <div>
    <t-input-group label="Alert wrapper class">
      <classes-autocomplete v-model="localvalue.wrapper" />
    </t-input-group>
    <t-input-group label="Alert body class">
      <classes-autocomplete v-model="localvalue.body" />
    </t-input-group>
    <t-input-group label="Close button class">
      <classes-autocomplete v-model="localvalue.close" />
    </t-input-group>
    <t-input-group label="Close icon class">
      <classes-autocomplete v-model="localvalue.closeIcon" />
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
