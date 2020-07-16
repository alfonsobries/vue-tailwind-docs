<template>
  <preview>
    <t-rich-select
      v-model="selected"
      :options="options"
    >
      <template
        slot="dropdownDown"
        slot-scope="{ query, selectedOption, options }"
      >
        <div
          v-if="query"
          class="text-center"
        >
          <button
            type="button"
            class="block p-3 w-full border bg-blue-500 hover:bg-blue-600 text-white"
            @click="createOption(query)"
          >
            Create {{ query }}
          </button>
        </div>
      </template>
    </t-rich-select>
  </preview>
</template>

<script>
export default {
  data () {
    return {
      selected: null,
      options: ['Option 1', 'Option 2']
    }
  },
  methods: {
    createOption (text) {
      this.options.push(text)
      this.selected = text
    }
  }
}
</script>
