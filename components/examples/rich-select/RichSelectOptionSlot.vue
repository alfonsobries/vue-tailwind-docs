<template>
  <preview>
    <t-rich-select
      :fetch-options="fetchOptions"
      placeholder="Search for a repository"
      value-attribute="full_name"
      text-attribute="full_name"
      :minimum-input-length="1"
      class="max-w-sm mx-auto"
    >
      <template
        slot="option"
        slot-scope="{ index, isHighlighted, isSelected, className, option, query }"
      >
        <div :class="className">
          <span class="flex-shrink-0">
            <img
              class="w-10 h-10 rounded-full"
              :src="option.raw.owner.avatar_url"
            >
          </span>
          <div class="ml-2 flex flex-col text-gray-800">
            <strong>
              {{ option.raw.full_name }}
              <span v-if="isSelected">(Selected)</span>
            </strong>
            <span class="text-sm text-gray-700 leading-tight">{{ option.raw.description }}</span>
          </div>
        </div>
      </template>
    </t-rich-select>
  </preview>
</template>

<script>
export default {
  name: 'RichSelectOptionSlot',
  methods: {
    fetchOptions (q) {
      return fetch(`https://api.github.com/search/repositories?q=${q}&type=public`)
        .then(response => response.json())
        .then(data => ({ results: data.items }))
    }
  }
}
</script>
