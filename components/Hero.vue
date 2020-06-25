<template>
  <div class="relative flex flex-col md:flex-row items-center mx-auto max-w-screen-xl px-4 sm:px-6">
    <div class="md:w-1/2 flex items-center py-5 md:pb-20 md:pt-10 md:pr-10">
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

    <div class="md:w-1/2 flex items-center py-5 md:pb-20 md:pt-10 md:pl-10">
      <div class="bg-opacity-25 bg-gray-400 md:p-8 p-3 rounded shadow-inner w-full">
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
