<template>
  <div class="bg-white">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 pb-10">
      <div class="flex -mx-5 relative">
        <side-navigation />

        <nuxt-content
          class="px-6 xl:px-12 w-full max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:w-3/4 pt-10"
          :document="page"
        />

        <content-navigation :toc="page.toc" />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import SideNavigation from '@/components/SideNavigation.vue'
import ContentNavigation from '@/components/ContentNavigation.vue'

export default Vue.extend({
  components: { SideNavigation, ContentNavigation },
  props: {
    page: {
      type: Object,
      required: true
    }
  }
})
</script>
