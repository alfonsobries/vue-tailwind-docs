<template>
  <div>
    <t-input-group label="Overlay class">
      <classes-autocomplete v-model="localvalue.overlay" :placeholder="baseClasses.overlay" />
    </t-input-group>
    <t-input-group label="Wrapper class">
      <classes-autocomplete v-model="localvalue.wrapper" :placeholder="baseClasses.wrapper" />
    </t-input-group>
    <t-input-group label="Modal wrapper class">
      <classes-autocomplete v-model="localvalue.modal" :placeholder="baseClasses.modal" />
    </t-input-group>
    <t-input-group label="Modal body class">
      <classes-autocomplete v-model="localvalue.body" :placeholder="baseClasses.body" />
    </t-input-group>
    <t-input-group label="Modal header class">
      <classes-autocomplete v-model="localvalue.header" :placeholder="baseClasses.header" />
    </t-input-group>
    <t-input-group label="Modal footer class">
      <classes-autocomplete v-model="localvalue.footer" :placeholder="baseClasses.footer" />
    </t-input-group>
    <t-input-group label="Close button class">
      <classes-autocomplete v-model="localvalue.close" :placeholder="baseClasses.close" />
    </t-input-group>
    <t-input-group label="Close icon class">
      <classes-autocomplete v-model="localvalue.closeIcon" :placeholder="baseClasses.closeIcon" />
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
      required: true
    },
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
