<template>
  <div class="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6">
    <div class="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
      <div class="text-left">
        <h2 class="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
          Vue<span class="font-bold text-blue-500">Tailwind</span>
          <span class="text-xl font-semibold rounded-full text-blueGray-500">2.0</span>
        </h2>
        <p class="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Set of Lightview and fully customizable Vue Components optimized for TailwindCss
        </p>
        <div class="mt-5 sm:flex md:mt-8 ">
          <div class="rounded-md shadow">
            <nuxt-link to="/docs/installation" class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10">
              Getting started
            </nuxt-link>
          </div>
          <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <nuxt-link to="/contribute" class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-blue-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10">
              Contribute
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
      <div class="relative z-30 w-full p-3 bg-gray-400 bg-opacity-25 rounded shadow-inner md:p-8">
        <hero-demo />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import HeroDemo from '~/components/HeroDemo.vue'

export default Vue.extend({
  components: {
    HeroDemo
  }
})
</script>
