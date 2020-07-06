<template>
  <div v-if="Object.keys(elements).length">
    <t-input-group
      v-for="(element, elementName) in elements"
      :key="elementName"
      :label="getLabel(elementName)"
    >
      <classes-autocomplete
        v-model="localValue[elementName]"
        :placeholder="getPlaceholder(elementName)"
        :description="getDescription(elementName)"
      />
    </t-input-group>
  </div>
  <div v-else>
    <t-input-group :label="getLabel()">
      <classes-autocomplete
        v-model="localValue"
        :placeholder="getPlaceholder()"
        :description="getDescription()"
      />
    </t-input-group>
  </div>
</template>

<script>
import Vue from 'vue'
import get from 'lodash/get'
import snakeCase from 'lodash/snakeCase'
import ClassesAutocomplete from '@/components/ClassesAutocomplete.vue'

export default Vue.extend({
  components: {
    ClassesAutocomplete
  },

  props: {
    elements: {
      type: Object,
      required: true
    },
    baseClasses: {
      type: [Object, String],
      default: undefined
    },
    fixedClasses: {
      type: [Object, String],
      default: undefined
    },
    value: {
      type: [Object, String],
      default: undefined
    }
  },
  data () {
    return {
      localValue: this.value || this.getDefaultClasses(),
      localBaseClasses: this.baseClasses || this.getDefaultClasses(),
      localFixedClasses: this.fixedClasses || this.getDefaultClasses()
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
  },
  methods: {
    getDefaultClasses () {
      if (!Object.keys(this.elements).length) {
        return ''
      }

      const defaultClasses = {}
      Object.keys(this.elements).forEach((elementName) => {
        defaultClasses[elementName] = ''
      })
      return defaultClasses
    },
    getLabel (elementName = null) {
      if (!elementName) {
        return 'Classes'
      }

      return snakeCase(elementName).split('_').join(' ') + ' classes'
    },
    getDescription (elementName = null) {
      if (elementName) {
        return get(this.fixedClasses, elementName)
      }

      return this.fixedClasses
    },
    getPlaceholder (elementName = null) {
      if (elementName) {
        return get(this.baseClasses, elementName)
      }

      return this.baseClasses || ''
    }

  }
})
</script>
