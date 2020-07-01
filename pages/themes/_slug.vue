<template>
  <div class="bg-gray-100 py-16 shadow-inner">
    <h1 class="max-w-lg text-center mx-auto mb-8 text-3xl font-bold">
      Theme: {{ theme === null ? 'Loading theme...' : theme.name }}
    </h1>
    <div v-if="theme" class="grid md:grid-cols-2 gap-4 container mx-auto">
      <t-card
        v-for="({ classes, variants }, componentName) in theme.settings"
        :key="componentName"
        variant="preview"
        :header="componentName"
        class="mt-4"
      >
        <theme-configurator-preview :component-name="componentName" :classes="classes" />

        <div v-if="variants">
          <div v-for="(variant, variantName) in variants" :key="variantName" class="border bg-gray-200 p-3">
            <p class="uppercase text-xs font-bold text-gray-700">
              Variant: {{ variantName }}
            </p>
            <theme-configurator-preview
              :component-name="componentName"
              :classes="classes"
              :variant="variantName"
              :variants="buildVariants(variant, variantName)"
            />
          </div>
        </div>
      </t-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ThemeConfiguratorPreview from '@/components/ThemeConfiguratorPreview.vue'
export default Vue.extend({
  components: {
    ThemeConfiguratorPreview
  },
  data () {
    return {
      theme: null
    }
  },
  created () {
    // @ts-ignore
    this.$axios.get(`/themes/${this.$route.params.slug}`)
    // @ts-ignore
      .then(({ data }) => {
        this.theme = data
      // @ts-ignore
      }).catch((error) => {
        // @ts-ignore
        this.$handleException(error)
      })
  },
  methods: {
    buildVariants (variant: any, variantName: any) {
      const variants = {}
      // @ts-ignore
      variants[variantName] = variant
      return variants
    }
  }
})
</script>
