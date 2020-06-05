<template>
  <div
    class="p-4 flex"
    :class="{
      'bg-gray-200': index % 2 === 1
    }"
  >
    <icon class="h-4 w-4 mr-4 mt-1 text-gray-500">
      <path id="Combined-Shape" d="M12.5355339,10.7071068 L9,14.2426407 L7.58578644,12.8284271 L10.4142136,10 L7.58578644,7.17157288 L9,5.75735931 L13.2426407,10 L12.5355339,10.7071068 L12.5355339,10.7071068 Z M10,-5.68434189e-14 C4.4771525,-5.68434189e-14 -5.68434189e-14,4.4771525 -5.68434189e-14,10 C-5.68434189e-14,15.5228475 4.4771525,20 10,20 C15.5228475,20 20,15.5228475 20,10 C20,4.4771525 15.5228475,-5.32907052e-14 10,-5.68434189e-14 L10,-5.68434189e-14 Z M2,10 C2,14.418278 5.581722,18 10,18 C14.418278,18 18,14.418278 18,10 C18,5.581722 14.418278,2 10,2 C5.581722,2 2,5.581722 2,10 L2,10 Z" />
    </icon>

    <div class="flex-grow">
      <div class="sm:items-start">
        <div class="mb-3">
          <label
            :for="`classes-${localVariant.id}`"
            class="block text-sm leading-5 font-medium text-gray-700"
          >
            Variant name
          </label>
          <t-input v-model="currentName" @blur="localVariant.name = currentName" />
        </div>
      </div>

      <div>
        <div class="sm:items-start">
          <div class="mb-3">
            <label
              :for="`classes-${localVariant.id}`"
              class="block text-sm leading-5 font-medium text-gray-700"
            >Variant classes</label>
            <classes-form-rich-select v-if="componentName === 'TRichSelect'" v-model="localVariant.classes" :base-classes="baseClasses" />
            <classes-form-modal v-else-if="componentName === 'TModal'" v-model="localVariant.classes" :base-classes="baseClasses" />
            <classes-form-alert v-else-if="componentName === 'TAlert'" v-model="localVariant.classes" :base-classes="baseClasses" />
            <classes-form-card v-else-if="componentName === 'TCard'" v-model="localVariant.classes" :base-classes="baseClasses" />
            <classes-form-input-group v-else-if="componentName === 'TInputGroup'" v-model="localVariant.classes" :base-classes="baseClasses" />
            <classes-form-simple v-else v-model="localVariant.classes" :base-classes="baseClasses" />
          </div>
        </div>

        <component-preview
          :classes="baseClasses"
          :component-name="componentName"
          :variant="localVariant.name"
          :variants="variants"
        />
      </div>
      <p class="flex justify-between text-sm items-end">
        <span v-if="formPluginClass" class="text-gray-500 mr-3 text-xs">
          To use the class <strong>`{{ formPluginClass }}`</strong> you will need to install the <a class="underline" target="_blank" href="https://github.com/tailwindcss/custom-forms">custom-forms</a> plugin.
        </span>
        <a class="text-red-500 underline ml-auto" href="#" @click.prevent="$emit('delete')">Remove variant</a>
      </p>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import ComponentPreview from './ThemeBuilderStepBuildThemeComponentPreview.vue'
import Icon from '@/components/Icon'
import ClassesFormSimple from '@/components/ClassesForm/ClassesFormSimple.vue'
import ClassesFormModal from '@/components/ClassesForm/ClassesFormModal.vue'
import ClassesFormRichSelect from '@/components/ClassesForm/ClassesFormRichSelect.vue'
import ClassesFormAlert from '@/components/ClassesForm/ClassesFormAlert.vue'
import ClassesFormCard from '@/components/ClassesForm/ClassesFormCard.vue'
import ClassesFormInputGroup from '@/components/ClassesForm/ClassesFormInputGroup.vue'

export default Vue.extend({
  components: {
    Icon,
    ComponentPreview,
    ClassesFormSimple,
    ClassesFormRichSelect,
    ClassesFormModal,
    ClassesFormAlert,
    ClassesFormCard,
    ClassesFormInputGroup
  },
  props: {
    componentName: {
      type: String,
      required: true
    },
    value: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    baseClasses: {
      type: [String, Object],
      required: true
    }
  },
  data () {
    return {
      localVariant: { ...this.value },
      currentName: this.value.name
    }
  },
  computed: {
    variants () {
      const variants = {}
      variants[this.localVariant.name] = this.localVariant.classes
      return variants
    },
    formPluginClass () {
      const pluginClasses = ['form-input', 'form-select', 'form-textarea', 'form-radio', 'form-chexkbox']
      return pluginClasses.find((className) => {
        return typeof this.localVariant.classes === 'string' &&
          this.localVariant.classes.includes(className)
      })
    }
  },
  watch: {

    localVariant: {
      handler (localVariant) {
        if (typeof localVariant.classes === 'object') {
          Object.keys(localVariant.classes).forEach((className) => {
            if (localVariant.classes[className] === '') {
              delete localVariant.classes[className]
            }
          })
        }
        this.$emit('input', localVariant)
      },
      deep: true
    }
  }

})
</script>
