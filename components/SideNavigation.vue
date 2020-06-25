<template>
  <nav class="lg:flex-shrink-0 lg:w-56 lg:px-5 lg:pt-10">
    <div class="lg:sticky top-20 lg:max-h-screen lg:overflow-y-auto lg:scrolling-touch">
      <nuxt-link
        to="/docs"
        class="px-3 py-1 mb-2 transition duration-200 ease-in-out relative hover:text-gray-900 text-gray-600 rounded flex items-center text-sm"
        active-class="text-gray-900"
      >
        <icon class="w-4 h-4 text-gray-400">
          <path id="Combined-Shape" d="M2,1.99079514 C2,0.891309342 2.89706013,0 4.00585866,0 L14.9931545,0 C15.5492199,0 16,0.443864822 16,1 L16,2 L5.00247329,2 C4.44882258,2 4,2.44386482 4,3 C4,3.55228475 4.44994876,4 5.00684547,4 L16.9931545,4 C17.5492199,4 18,4.44463086 18,5.00087166 L18,18.0059397 C18,19.1072288 17.1054862,20 16.0059397,20 L3.99406028,20 C2.8927712,20 2,19.1017876 2,18.0092049 L2,1.99079514 Z M6,4 L10,4 L10,12 L8,10 L6,12 L6,4 Z" />
        </icon>
        <span class="ml-2">Documentation</span>
      </nuxt-link>
      <nuxt-link
        to="/themes-builder"
        class="px-3 py-1 mb-2 transition duration-200 ease-in-out relative hover:text-gray-900 text-gray-600 rounded flex items-center text-sm"
        active-class="text-gray-900"
      >
        <icon class="w-4 h-4 text-gray-400">
          <path id="Combined-Shape" d="M9,20 L18.0092049,20 C19.1017876,20 20,19.1054196 20,18.0018986 L20,13.9981014 C20,12.8867064 19.1086907,12 18.0092049,12 L15.0710678,12 L9.01026535,18.0608025 C9.00998975,18.139716 9.00652788,18.217877 9,18.2951708 L9,20 Z M9,16.6568542 L16.7344309,8.92242337 C17.5070036,8.14985069 17.5095717,6.88215473 16.7292646,6.10184761 L13.8981524,3.27073539 C13.1122774,2.48486045 11.8550305,2.48811526 11.0775766,3.26556912 L9,5.34314575 L9,16.6568542 Z M0,1.99079514 C0,0.891309342 0.886706352,0 1.99810135,0 L6.00189865,0 C7.10541955,0 8,0.898212381 8,1.99079514 L8,18.0092049 C8,19.1086907 7.11329365,20 6.00189865,20 L1.99810135,20 C0.894580447,20 0,19.1017876 0,18.0092049 L0,1.99079514 Z M4,17 C4.55228475,17 5,16.5522847 5,16 C5,15.4477153 4.55228475,15 4,15 C3.44771525,15 3,15.4477153 3,16 C3,16.5522847 3.44771525,17 4,17 Z" />
        </icon>
        <span class="ml-2">Theme Builder</span>
      </nuxt-link>
      <nuxt-link
        to="/community"
        class="px-3 py-1 mb-2 transition duration-200 ease-in-out relative hover:text-gray-900 text-gray-600 rounded flex items-center text-sm"
        active-class="text-gray-900"
      >
        <icon class="w-4 h-4 text-gray-400">
          <path id="Combined-Shape" d="M7,8 C9.209139,8 11,6.209139 11,4 C11,1.790861 9.209139,0 7,0 C4.790861,0 3,1.790861 3,4 C3,6.209139 4.790861,8 7,8 Z M7,9 C4.852,9 2.801,9.396 0.891,10.086 L2,16 L3.25,16 L4,20 L10,20 L10.75,16 L12,16 L13.109,10.086 C11.199,9.396 9.148,9 7,9 Z M15.315,9.171 L13.66,18 L12.41,18 L12.035,20 L16,20 L16.75,16 L18,16 L19.109,10.086 C17.899,9.648 16.627,9.346 15.315,9.171 Z M13,0 C12.532,0 12.089,0.096 11.671,0.243 C12.501,1.272 13,2.578 13,4 C13,5.422 12.501,6.728 11.671,7.757 C12.089,7.904 12.531,8 13,8 C15.209,8 17,6.209 17,4 C17,1.791 15.209,0 13,0 Z" />
        </icon>
        <span class="ml-2">Community themes</span>
      </nuxt-link>
      <nuxt-link
        to="/contribute"
        class="px-3 py-1 mb-2 transition duration-200 ease-in-out relative hover:text-gray-900 text-gray-600 rounded flex items-center text-sm"
        active-class="text-gray-900"
      >
        <icon class="w-4 h-4 text-gray-400">
          <path id="Fill-97" d="M11.0010436,0 C9.89589787,0 9.00000024,0.886706352 9.0000002,1.99810135 L9,8 L1.9973917,8 C0.894262725,8 0,8.88772964 0,10 L0,12 L2.29663334,18.1243554 C2.68509206,19.1602453 3.90195042,20 5.00853025,20 L12.9914698,20 C14.1007504,20 15,19.1125667 15,18.000385 L15,10 L12,3 L12,0 L11.0010436,0 L11.0010436,0 Z M17,10 L20,10 L20,20 L17,20 L17,10 L17,10 Z" />
        </icon>
        <span class="ml-2">Contribute</span>
      </nuxt-link>

      <div v-for="(group, groupIndex) in docsMenu" :key="group.id" class="my-5">
        <h5 class="mb-3 text-gray-500 uppercase tracking-wide font-bold text-xs px-3">
          {{ group.text }}
        </h5>
        <ul>
          <li v-for="(item, index) in group.items" :key="index">
            <nuxt-link
              :to="item.to"
              class="px-3 py-1 transition duration-200 ease-in-out relative hover:text-gray-900 text-gray-600 rounded flex items-center text-sm"
              :class="{ 'bg-orange-100 text-orange-500': index===1 && groupIndex === 0 }"
            >
              {{ item.text }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import Icon from '@/components/Icon'
export default Vue.extend({
  components: {
    Icon
  },
  computed: mapGetters({
    docsMenu: 'nav/docs'
  })
})
</script>
