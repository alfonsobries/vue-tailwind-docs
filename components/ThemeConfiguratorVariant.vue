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
            <t-input v-model="currentVariantName" @blur="updateName" />
          </t-input-group>
        </div>
      </div>

      <div>
        <div class="sm:items-start">
          <theme-configurator-classes
            v-model="localVariant"
            label="Variant classes"
            :description="`Classes used when the ${currentVariantName} variant is applied`"
            :base-classes="theme.classes"
            :wrapped.sync="wrapped"
            :fixed-classes="theme.fixedClasses"
            :component-name="componentName"
          />
        </div>

        <component-preview
          :theme="theme"
          :component-name="componentName"
          :variant="currentVariantName"
        />
      </div>

      <p class="flex justify-between text-sm items-end">
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
      type: [String, Object],
      required: true
    },
    variantName: {
      type: String,
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
      localVariant: this.value,
      currentVariantName: this.variantName,
      wrapped: this.theme.wrapped
    }
  },
  watch: {
    value: {
      handler (value) {
        this.localVariant = value
      },
      deep: true
    },
    localVariant: {
      handler (localVariant) {
        this.$emit('input', localVariant)
      },
      deep: true
    },
    variantName (variantName) {
      this.currentVariantName = variantName
    }
  },
  methods: {
    updateName () {
      this.$emit('update-name', this.currentVariantName)
    }
  }

})
</script>
