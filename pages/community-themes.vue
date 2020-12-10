<template>
  <div class="bg-gray-100">
    <div class="max-w-screen-xl px-4 py-10 pb-10 mx-auto sm:px-6">
      <h1 class="mb-10 text-3xl font-medium leading-none tracking-tight text-gray-900">
        Community themes
      </h1>

      <p>This section is not ready yet, but the idea is to have a place with themes created and shared by the community, the first version of this feature is almost ready and will be released soon.</p>

      <p class="mt-4">
        Follow me on twitter to be informed about this feature <a class="text-blue-500 underline" target="_blank" href="https://twitter.com/alfonsobries">@alfonsobries</a>.
      </p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  head () {
    return {
      title: 'Community themes - VueTailwind',
      meta: [
        { hid: 'description', name: 'description', content: 'VueTailwind themes created and shared for the community' }
      ]
    }
  }
})
</script>
