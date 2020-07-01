<template>
  <div class="p-4">
    <t-input
      v-model="currentValue"
      :classes="params.classes"
      :variant="params.variant"
      :variants="variants"
    />

    <p class="mt-4">
      <span class="text-gray-500 text-sm">Current value: </span>
      <span class="ml-2 bg-gray-200 font-mono px-3 py-1 rounded text-gray-900  text-sm">{{ currentValue }}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    params: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      currentValue: 'I love vuejs 😎'
    }
  },
  computed: {
    variants () {
      if (this.params.variants) {
        return JSON.parse(this.params.variants)
      }

      return undefined
    }

  }

}
</script>
