<template>
  <div class="bg-white">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 pb-10">
      <div class="flex lg:-mx-6 relative">
        <side-navigation
          class="hidden lg:block lg:flex-shrink-0 lg:px-6 lg:pt-10 lg:w-1/5 xl:w-1/6 flex-grow flex-shrink-0"
        />

        <nuxt-content class="pt-10 max-w-full mx-auto" :document="page" />

        <content-navigation
          v-if="page.toc"
          class="hidden relative lg:text-sm lg:block lg:px-6 lg:pt-10 lg:w-1/5 xl:w-1/6 flex-grow  flex-shrink-0"
          :toc="page.toc"
        />
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
