<template>
  <t-input-group
    :label="label"
    :description="description"
    variant="classes"
    :sorted-elements="['label', 'description', 'default', 'feedback']"
  >
    <classes-form-rich-select
      v-if="componentName === 'TRichSelect'"
      v-model="localValue"
      :base-classes="baseClasses"
    />
    <classes-form-modal
      v-else-if="componentName === 'TModal'"
      v-model="localValue"
      :base-classes="baseClasses"
    />
    <classes-form-alert
      v-else-if="componentName === 'TAlert'"
      v-model="localValue"
      :base-classes="baseClasses"
    />
    <classes-form-card
      v-else-if="componentName === 'TCard'"
      v-model="localValue"
      :base-classes="baseClasses"
    />
    <classes-form-input-group
      v-else-if="componentName === 'TInputGroup'"
      v-model="localValue"
      :base-classes="baseClasses"
    />
    <classes-form-simple
      v-else
      v-model="localValue"
      :base-classes="baseClasses"
    />

    <slot v-if="needsFormsPlugin" name="feedback">
      <p class="text-orange-400  text-xs flex items-center mt-1">
        <icon class="w-4 h-4 text-orange-300 mr-1 inline-block flex-shrink-0">
          <path id="Combined-Shape" d="M2.92893219,17.0710678 C6.83417511,20.9763107 13.1658249,20.9763107 17.0710678,17.0710678 C20.9763107,13.1658249 20.9763107,6.83417511 17.0710678,2.92893219 C13.1658249,-0.976310729 6.83417511,-0.976310729 2.92893219,2.92893219 C-0.976310729,6.83417511 -0.976310729,13.1658249 2.92893219,17.0710678 L2.92893219,17.0710678 Z M15.6568542,15.6568542 C18.7810486,12.5326599 18.7810486,7.46734008 15.6568542,4.34314575 C12.5326599,1.21895142 7.46734008,1.21895142 4.34314575,4.34314575 C1.21895142,7.46734008 1.21895142,12.5326599 4.34314575,15.6568542 C7.46734008,18.7810486 12.5326599,18.7810486 15.6568542,15.6568542 Z M9,11 L9,10.5 L9,9 L11,9 L11,15 L9,15 L9,11 Z M9,5 L11,5 L11,7 L9,7 L9,5 Z" />
        </icon>
        <span>
          To use the class <strong>`{{ formsPluginClass }}`</strong> you need to install the <a class="underline" target="_blank" href="https://github.com/tailwindcss/custom-forms">custom-forms</a> plugin.
        </span>
      </p>
    </slot>
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
import Icon from '@/components/Icon'

export default Vue.extend({
  components: {
    Icon,
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
      localValue: this.value
    }
  },
  computed: {
    formsPluginClass () {
      const pluginClasses = ['form-input', 'form-select', 'form-textarea', 'form-radio', 'form-chexkbox']

      if (typeof this.value === 'string') {
        return pluginClasses.find(className => this.value.includes(className))
      }

      if (typeof this.value === 'object') {
        const classesWithPluginClass = Object.keys(this.value).map((key) => {
          const value = this.value[key]
          if (typeof value === 'string') {
            return pluginClasses.find(className => value.includes(className))
          }
          return ''
        })
          .filter(className => !!className)
          .join(',')

        return classesWithPluginClass || ''
      }

      return ''
    },
    needsFormsPlugin () {
      return !!this.formsPluginClass
    }
  },
  watch: {
    localValue (localValue) {
      this.$emit('input', localValue)
    },
    value (value) {
      this.localValue = value
    }
  }
})
</script>
