<template>
  <div>
    <div class="mb-4">
      <div class="sm:items-start">
        <div class="space-y-1">
          <h3>
            Default Classes
          </h3>

          <classes-form-rich-select v-if="componentName === 'TRichSelect'" v-model="currentTheme.classes" :base-classes="currentTheme.classes" />
          <classes-form-modal v-else-if="componentName === 'TModal'" v-model="currentTheme.classes" :base-classes="currentTheme.classes" />
          <classes-form-alert v-else-if="componentName === 'TAlert'" v-model="currentTheme.classes" :base-classes="currentTheme.classes" />
          <classes-form-card v-else-if="componentName === 'TCard'" v-model="currentTheme.classes" :base-classes="currentTheme.classes" />
          <classes-form-input-group v-else-if="componentName === 'TInputGroup'" v-model="currentTheme.classes" :base-classes="currentTheme.classes" />
          <classes-form-simple v-else v-model="currentTheme.classes" :base-classes="currentTheme.classes" />
        </div>
      </div>

      <component-preview
        :classes="currentTheme.classes"
        :component-name="componentName"
      />

      <p v-if="isUsingFormPluginClasses" class="text-gray-500 mr-3 text-xs">
        To use the class <strong>`{{ isUsingFormPluginClasses }}`</strong> you will need to install the <a class="underline" target="_blank" href="https://github.com/tailwindcss/custom-forms">custom-forms</a> plugin.
      </p>
    </div>

    <div class="border-2 bg-gray-100 rounded mb-4">
      <h3 class="p-4 border-b">
        Variants:
      </h3>

      <transition-group
        enter-active-class="transition ease-out duration-100"
        leave-active-class="transition ease-in duration-100"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <theme-configurator-variant
          v-for="(variant, vIndex) in currentTheme.variants"
          :key="variant.id"
          v-model="currentTheme.variants[vIndex]"
          :base-classes="currentTheme.classes"
          :component-name="componentName"
          :index="vIndex"
          @delete="currentTheme.variants.splice(vIndex, 1)"
        />
      </transition-group>

      <p class="p-4 border-t">
        <t-button type="button" variant="secondary" @click="addVariant">
          Add variant
        </t-button>
      </p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import isEqual from 'lodash/isEqual'
import uniqid from 'uniqid'
import ThemeConfiguratorVariant from './ThemeConfiguratorVariant'
import ComponentPreview from './ThemeConfiguratorPreview.vue'
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
    ClassesFormInputGroup,
    ThemeConfiguratorVariant,
    ComponentPreview
  },
  props: {
    value: {
      type: Object,
      required: true
    },
    componentName: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      currentTheme: this.value
    }
  },
  computed: {
    isUsingFormPluginClasses () {
      const pluginClasses = ['form-input', 'form-select', 'form-textarea', 'form-radio', 'form-chexkbox']
      return pluginClasses.find((className) => {
        return typeof this.currentTheme.classes === 'string' &&
         this.currentTheme.classes.includes(className)
      })
    }
  },
  watch: {
    currentTheme: {
      handler (currentTheme) {
        this.$emit('input', currentTheme)
      },
      deep: true
    },
    value (value) {
      if (!isEqual(value, this.currentTheme)) {
        this.currentTheme = value
      }
    }
  },
  methods: {
    addVariant () {
      this.currentTheme.variants.push({
        id: uniqid(),
        name: `variant${this.currentTheme.variants.length + 1}`,
        classes: this.currentTheme.classes
      })
    }
  }
})
</script>
