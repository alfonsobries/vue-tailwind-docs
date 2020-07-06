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
          <t-input-group label="Variant name">
            <t-input v-model="currentName" @blur="localVariant.name = currentName" />
          </t-input-group>
        </div>
      </div>

      <div>
        <div class="sm:items-start">
          <theme-configurator-classes
            v-model="localVariant.classes"
            label="Variant classes"
            :base-classes="theme.classes"
            :component-name="componentName"
          />
        </div>

        <component-preview
          :theme="theme"
          :component-name="componentName"
          :variant="localVariant.name"
        />
      </div>
      <p class="flex justify-between text-sm items-end">
        <span v-if="formPluginClass" class="text-orange-400 text-xs flex items-center mt-1 mr-3">
          <icon class="w-4 h-4 text-orange-300 mr-1 inline-block flex-shrink-0">
            <path id="Combined-Shape" d="M2.92893219,17.0710678 C6.83417511,20.9763107 13.1658249,20.9763107 17.0710678,17.0710678 C20.9763107,13.1658249 20.9763107,6.83417511 17.0710678,2.92893219 C13.1658249,-0.976310729 6.83417511,-0.976310729 2.92893219,2.92893219 C-0.976310729,6.83417511 -0.976310729,13.1658249 2.92893219,17.0710678 L2.92893219,17.0710678 Z M15.6568542,15.6568542 C18.7810486,12.5326599 18.7810486,7.46734008 15.6568542,4.34314575 C12.5326599,1.21895142 7.46734008,1.21895142 4.34314575,4.34314575 C1.21895142,7.46734008 1.21895142,12.5326599 4.34314575,15.6568542 C7.46734008,18.7810486 12.5326599,18.7810486 15.6568542,15.6568542 Z M9,11 L9,10.5 L9,9 L11,9 L11,15 L9,15 L9,11 Z M9,5 L11,5 L11,7 L9,7 L9,5 Z" />
          </icon>
          <span>
            To use the class <strong>`{{ formPluginClass }}`</strong> you need to install the <a class="underline" target="_blank" href="https://github.com/tailwindcss/custom-forms">custom-forms</a> plugin.
          </span>
        </span>
        <a class="text-red-500 underline ml-auto" href="#" @click.prevent="$emit('delete')">Remove variant</a>
      </p>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import ComponentPreview from './ThemeConfiguratorPreview.vue'
import ThemeConfiguratorClasses from './ThemeConfiguratorClasses.vue'
import Icon from '@/components/Icon'

export default Vue.extend({
  components: {
    Icon,
    ComponentPreview,
    ThemeConfiguratorClasses
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
    theme: {
      type: Object,
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
