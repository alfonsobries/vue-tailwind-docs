<template>
  <div>
    <t-input-group label="Overlay class">
      <classes-autocomplete v-model="localvalue.overlay" :placeholder="baseClasses ? baseClasses.overlay : undefined" />
    </t-input-group>
    <t-input-group label="Wrapper class">
      <classes-autocomplete v-model="localvalue.wrapper" :placeholder="baseClasses ? baseClasses.wrapper : undefined" />
    </t-input-group>
    <t-input-group label="Modal wrapper class">
      <classes-autocomplete v-model="localvalue.modal" :placeholder="baseClasses ? baseClasses.modal : undefined" />
    </t-input-group>
    <t-input-group label="Modal body class">
      <classes-autocomplete v-model="localvalue.body" :placeholder="baseClasses ? baseClasses.body : undefined" />
    </t-input-group>
    <t-input-group label="Modal header class">
      <classes-autocomplete v-model="localvalue.header" :placeholder="baseClasses ? baseClasses.header : undefined" />
    </t-input-group>
    <t-input-group label="Modal footer class">
      <classes-autocomplete v-model="localvalue.footer" :placeholder="baseClasses ? baseClasses.footer : undefined" />
    </t-input-group>
    <t-input-group label="Close button class">
      <classes-autocomplete v-model="localvalue.close" :placeholder="baseClasses ? baseClasses.close : undefined" />
    </t-input-group>
    <t-input-group label="Close icon class">
      <classes-autocomplete v-model="localvalue.closeIcon" :placeholder="baseClasses ? baseClasses.closeIcon : undefined" />
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
        overlay: '',
        wrapper: '',
        modal: '',
        body: '',
        header: '',
        footer: '',
        close: '',
        closeIcon: ''
      })
    },
    value: {
      type: Object,
      default: () => ({
        overlay: '',
        wrapper: '',
        modal: '',
        body: '',
        header: '',
        footer: '',
        close: '',
        closeIcon: ''
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
