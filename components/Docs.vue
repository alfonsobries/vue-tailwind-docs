<template>
  <div class="bg-white">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6">
      <div class="flex lg:-mx-6 relative">
        <side-navigation
          class="hidden lg:block lg:px-6 lg:w-1/5 lg:-mt-16"
        />

        <div class="lg:px-6 pt-10 lg:w-3/5 w-full mb-10">
          <nuxt-content :document="page" />
        </div>

        <content-navigation
          v-if="page.toc"
          class="hidden relative lg:text-sm lg:block lg:px-6 lg:pt-10 lg:w-1/5"
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
