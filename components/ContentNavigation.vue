<template>
  <nav>
    <div class="sticky max-h-screen overflow-y-auto scrolling-touch top-20">
      <h5 class="px-3 text-xs font-bold tracking-wide text-gray-500 uppercase">
        On this page
      </h5>
      <ul>
        <li v-for="item in toc" :key="item.id">
          <a
            :href="`#${item.id}`"
            class="relative flex items-center px-3 py-1 text-sm text-gray-600 transition duration-200 ease-in-out rounded hover:text-gray-900 hover:bg-blue-100"
          >
            <span :class="item.depth > 2 ? `pl-${item.depth}` : undefined">{{ item.text }}</span>
          </a>
        </li>
      </ul>

      <div id="add-1" class="mt-10">
        <nuxt-link to="/contribute" class="flex items-center justify-center w-full h-24 mt-3 bg-gray-100 border-2 border-gray-300 border-dashed text-gray-60">
          Your logo here
        </nuxt-link>
        <div class="mt-2">
          <nuxt-link to="/contribute" class="text-sm font-medium text-gray-800 hover:underline">
            Learn more →
          </nuxt-link>
        </div>
      </div>

      <div id="add-2" class="mt-10">
        <a target="_blank" href="https://www.vexilo.com/en/?utm_source=vuetailwind&amp;utm_medium=sidebar-widget" class="block mt-3">
          <img src="@/assets/img/vexilo-add.png" alt="Nearshore software development company">
        </a>
        <p class="mt-4 text-gray-700">
          <a target="_blank" href="https://www.vexilo.com/en/?utm_source=vuetailwind&amp;utm_medium=sidebar-widget" class="text-gray-700">
            Nearshore software development company
          </a>
        </p>
        <div class="mt-2">
          <a target="_blank" href="https://www.vexilo.com/en/?utm_source=vuetailwind&amp;utm_medium=sidebar-widget" class="text-sm font-medium text-gray-800 hover:underline">
            Learn more →
          </a>
        </div>
      </div>

      <div id="add-3" class="mt-10 text-center">
        <t-button to="/contribute" class="flex items-center">
          <icon class="w-4 h-4 mr-2 text-blue-200">
            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
          </icon>
          Support us
        </t-button>
      </div>
    </div>
  </nav>
</template>
<script>
import Vue from 'vue'
import Icon from '@/components/Icon'
export default Vue.extend({
  components: {
    Icon
  },
  props: {
    toc: {
      type: Array,
      required: true
    }
  }
})
</script>
