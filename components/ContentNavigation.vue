<template>
  <nav>
    <div class="sticky top-20 max-h-screen overflow-y-auto scrolling-touch">
      <h5 class="text-gray-500 uppercase tracking-wide font-bold text-xs px-3">
        On this page
      </h5>
      <ul>
        <li v-for="item in toc" :key="item.id">
          <a
            :href="`#${item.id}`"
            class="px-3 py-1 transition duration-200 ease-in-out relative hover:text-gray-900 hover:bg-orange-100 text-gray-600 rounded flex items-center text-sm"
          >
            <span :class="item.depth > 2 ? `pl-${item.depth}` : undefined">{{ item.text }}</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
    toc: {
      type: Array,
      required: true
    }
  }
})
</script>
