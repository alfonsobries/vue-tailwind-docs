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
            class="relative flex items-center px-3 py-1 text-sm text-gray-600 transition duration-200 ease-in-out rounded hover:text-gray-900 hover:bg-orange-100"
          >
            <span :class="item.depth > 2 ? `pl-${item.depth}` : undefined">{{ item.text }}</span>
          </a>
        </li>
      </ul>

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
          <icon class="w-4 h-4 mr-2 text-orange-200">
            <path id="Fill-97" d="M11.0010436,0 C9.89589787,0 9.00000024,0.886706352 9.0000002,1.99810135 L9,8 L1.9973917,8 C0.894262725,8 0,8.88772964 0,10 L0,12 L2.29663334,18.1243554 C2.68509206,19.1602453 3.90195042,20 5.00853025,20 L12.9914698,20 C14.1007504,20 15,19.1125667 15,18.000385 L15,10 L12,3 L12,0 L11.0010436,0 L11.0010436,0 Z M17,10 L20,10 L20,20 L17,20 L17,10 L17,10 Z" />
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
