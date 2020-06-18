<template>
  <div>
    <div class="relative flex flex-col md:flex-row items-center container mx-auto">
      <div class="md:w-1/2 px-6 flex items-center py-5 md:py-20">
        <div class="">
          <div class="text-left">
            <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
              Vue<span class="text-orange-500 font-bold">Tailwind</span>
            </h2>
            <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Set of Lightview and fully customizable Vue Components optimized for TailwindCss
            </p>
            <div class="mt-5 sm:flex md:mt-8 ">
              <div class="rounded-md shadow">
                <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-500 hover:bg-orange-500 focus:outline-none focus:shadow-outline-orange transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                  GitHub
                </a>
              </div>
              <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-orange-500 bg-white hover:text-orange-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                  Docs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="md:w-1/2 px-6 flex items-center py-5 md:py-20">
        <div class="bg-gray-100 border-2 border-dashed md:p-8 p-3 rounded shadow-inner w-full">
          <hero-demo />
        </div>
      </div>
    </div>

    <div id="theme-builder-section" class="bg-gray-100 py-16">
      <header>
        <div class="container mx-auto md:px-0">
          <h2 id="build" class="text-3xl text-center font-semibold text-gray-900 mb-4">
            Build your own theme
          </h2>
        </div>
      </header>

      <div class="container mx-auto">
        <theme-builder />
      </div>
    </div>

    <div v-if="latestThemes.length > 0" class="bg-orange-100 py-16">
      <div class="container mx-auto">
        <h2 id="build" class="text-3xl text-center font-semibold text-gray-900 mb-4">
          Latest community Themes
        </h2>
        <div class="grid md:grid-cols-3 gap-4">
          <t-card
            v-for="theme in latestThemes"
            :key="theme.id"
            header="Bootstrap"
            variant="theme"
          >
            <p>{{ theme.description }}</p>
            <template v-slot:header>
              <span class="px-3">{{ theme.name }}</span>
              <t-button variant="link" :to="`/themes/${theme.slug}`">
                Preview →
              </t-button>
            </template>
          </t-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ThemeBuilder from '~/components/ThemeBuilder.vue'
import HeroDemo from '~/components/HeroDemo.vue'
export default Vue.extend({
  components: {
    ThemeBuilder,
    HeroDemo
  },
  data () {
    return {
      latestThemes: []
    }
  },
  created () {
    // @ts-ignore
    this.$axios.get('/themes')
      // @ts-ignore
      .then(({ data }) => {
        this.latestThemes = data.data
      })
  },
  methods: {
    smoothScrolToThemeBuilder () {
      document.getElementById('theme-builder-section')!.scrollIntoView({ behavior: 'smooth' })
    }
  }
})
</script>
