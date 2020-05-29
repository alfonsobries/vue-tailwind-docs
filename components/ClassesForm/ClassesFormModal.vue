<template>
  <div>
    <t-input-group label="Overlay class">
      <classes-autocomplete v-model="localvalue.overlay" />
    </t-input-group>
    <t-input-group label="Wrapper class">
      <classes-autocomplete v-model="localvalue.wrapper" />
    </t-input-group>
    <t-input-group label="Modal wrapper class">
      <classes-autocomplete v-model="localvalue.modal" />
    </t-input-group>
    <t-input-group label="Modal body class">
      <classes-autocomplete v-model="localvalue.body" />
    </t-input-group>
    <t-input-group label="Modal header class">
      <classes-autocomplete v-model="localvalue.header" />
    </t-input-group>
    <t-input-group label="Modal hooter class">
      <classes-autocomplete v-model="localvalue.footer" />
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
