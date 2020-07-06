<template>
  <t-input-group :label="label" :description="description">
    <classes-form-rich-select
      v-if="componentName === 'TRichSelect'"
      v-model="localvalue"
      :base-classes="baseClasses"
    />
    <classes-form-modal
      v-else-if="componentName === 'TModal'"
      v-model="localvalue"
      :base-classes="baseClasses"
    />
    <classes-form-alert
      v-else-if="componentName === 'TAlert'"
      v-model="localvalue"
      :base-classes="baseClasses"
    />
    <classes-form-card
      v-else-if="componentName === 'TCard'"
      v-model="localvalue"
      :base-classes="baseClasses"
    />
    <classes-form-input-group
      v-else-if="componentName === 'TInputGroup'"
      v-model="localvalue"
      :base-classes="baseClasses"
    />
    <classes-form-simple
      v-else
      v-model="localvalue"
      :base-classes="baseClasses"
    />
  </t-input-group>
</template>
<script>
import Vue from 'vue'
import ClassesFormSimple from '@/components/ClassesForm/ClassesFormSimple.vue'
import ClassesFormAlert from '@/components/ClassesForm/ClassesFormAlert.vue'
import ClassesFormModal from '@/components/ClassesForm/ClassesFormModal.vue'
import ClassesFormRichSelect from '@/components/ClassesForm/ClassesFormRichSelect.vue'
import ClassesFormCard from '@/components/ClassesForm/ClassesFormCard.vue'
import ClassesFormInputGroup from '@/components/ClassesForm/ClassesFormInputGroup.vue'

export default Vue.extend({
  components: {
    ClassesFormSimple,
    ClassesFormAlert,
    ClassesFormModal,
    ClassesFormRichSelect,
    ClassesFormCard,
    ClassesFormInputGroup
  },
  props: {
    label: {
      type: String,
      default: undefined
    },
    description: {
      type: String,
      default: undefined
    },
    value: {
      type: [String, Object],
      default: undefined
    },
    baseClasses: {
      type: [String, Object],
      default: undefined
    },
    componentName: {
      type: String,
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
})
</script>
