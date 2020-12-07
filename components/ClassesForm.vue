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
      />

      <template v-if="getDescription(elementName)" slot="description">
        <div class="flex items-center py-1 font-mono text-xs tracking-tight text-gray-400">
          <icon class="flex-shrink-0 w-4 h-4 mr-2">
            <path id="Shape" d="M11,9 L11,5 L9,5 L9,9 L5,9 L5,11 L9,11 L9,15 L11,15 L11,11 L15,11 L15,9 L11,9 Z M10,20 C15.5228475,20 20,15.5228475 20,10 C20,4.4771525 15.5228475,0 10,0 C4.4771525,0 0,4.4771525 0,10 C0,15.5228475 4.4771525,20 10,20 Z M10,18 C14.418278,18 18,14.418278 18,10 C18,5.581722 14.418278,2 10,2 C5.581722,2 2,5.581722 2,10 C2,14.418278 5.581722,18 10,18 Z" />
          </icon>
          {{ getDescription(elementName) }}
        </div>
      </template>
    </t-input-group>
  </div>
  <div v-else>
    <t-input-group
      :label="getLabel()"
    >
      <classes-autocomplete
        v-model="localValue"
        :placeholder="getPlaceholder()"
      />

      <template v-if="getDescription()" slot="description">
        <div class="flex items-center py-1 font-mono text-xs tracking-tight text-gray-400">
          <icon class="flex-shrink-0 w-4 h-4 mr-2">
            <path id="Shape" d="M11,9 L11,5 L9,5 L9,9 L5,9 L5,11 L9,11 L9,15 L11,15 L11,11 L15,11 L15,9 L11,9 Z M10,20 C15.5228475,20 20,15.5228475 20,10 C20,4.4771525 15.5228475,0 10,0 C4.4771525,0 0,4.4771525 0,10 C0,15.5228475 4.4771525,20 10,20 Z M10,18 C14.418278,18 18,14.418278 18,10 C18,5.581722 14.418278,2 10,2 C5.581722,2 2,5.581722 2,10 C2,14.418278 5.581722,18 10,18 Z" />
          </icon>
          {{ getDescription() }}
        </div>
      </template>
    </t-input-group>
  </div>
</template>

<script>
import Vue from 'vue'
import get from 'lodash/get'
import snakeCase from 'lodash/snakeCase'
import ClassesAutocomplete from '@/components/ClassesAutocomplete.vue'
import Icon from '@/components/Icon.vue'

export default Vue.extend({
  components: {
    ClassesAutocomplete,
    Icon
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
    baseClasses: {
      handler (baseClasses) {
        this.localBaseClasses = baseClasses || this.getDefaultClasses()
      },
      deep: true
    },
    fixedClasses: {
      handler (fixedClasses) {
        this.localFixedClasses = fixedClasses || this.getDefaultClasses()
      },
      deep: true
    },
    value: {
      handler (value) {
        this.localValue = value || this.getDefaultClasses()
      },
      deep: true
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
      const description = elementName ? get(this.localFixedClasses, elementName) : this.localFixedClasses
      return typeof description === 'string' ? description : ''
    },
    getPlaceholder (elementName = null) {
      const placeholder = elementName ? get(this.localBaseClasses, elementName) : this.localBaseClasses
      return typeof placeholder === 'string' ? placeholder : ''
    }

  }
})
</script>
