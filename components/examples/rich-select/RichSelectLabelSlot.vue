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
        slot="label"
        slot-scope="{ className, option, query }"
      >
        <div class="flex">
          <span class="flex-shrink-0">
            <img
              class="w-10 h-10 rounded-full"
              :src="option.raw.owner.avatar_url"
            >
          </span>
          <div class="flex flex-col ml-2 text-gray-800">
            <strong>{{ option.raw.full_name }}</strong>
            <span class="text-sm leading-tight text-gray-700">{{ option.raw.description }}</span>
          </div>
        </div>
      </template>
    </t-rich-select>
  </preview>
</template>

<script>
export default {
  name: 'RichSelectLabelSlot',
  methods: {
    fetchOptions (q) {
      return fetch(`https://api.github.com/search/repositories?q=${q}&type=public`)
        .then(response => response.json())
        .then(data => ({ results: data.items }))
    }
  }
}
</script>
