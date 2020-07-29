<template>
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 pb-10 py-10">
    <div class="max-w-xl mx-auto">
      <h1 class="mb-10 leading-none text-gray-900 font-medium text-3xl tracking-tight">
        Contribute to this project
      </h1>
      <h3 class="text-xl font-semibold">
        <span class="text-5xl">👨‍💻</span> Hey! Alfonso here
      </h3>

      <p class="mt-4">
        I spend hundreds of hours in this project to challenge myself to make the greatest and more flexible library of UI components for CSS utility-first frameworks like TailwindCSS.
      </p>

      <p class="mt-4">
        As you may imagine, this project represents a lot of work and different associated costs.
      </p>

      <p class="mt-4">
        Is this project is helpful for you can help in different ways:
      </p>

      <ol class="px-4 list-decimal">
        <li class="mt-4 flex">
          <span class="block -ml-5 mr-4 text-3xl">⭐️</span>
          <span>The easiest way to help is by giving me a start in Github <a class="underline border-orange-300 hover:text-orange-600 text-orange-500" href="https://github.com/alfonsobries/vue-tailwind" target="_blank">https://github.com/alfonsobries/vue-tailwind</a></span>
        </li>
        <li class="mt-4 flex">
          <span class="block -ml-5 mr-4 text-3xl">🔧</span>
          <span>You can help to add new features or fixing bugs in Github <a class="underline border-orange-300 hover:text-orange-600 text-orange-500" href="https://github.com/alfonsobries/vue-tailwind" target="_blank">https://github.com/alfonsobries/vue-tailwind</a></span>
        </li>
        <li class="mt-4 flex">
          <span class="block -ml-5 mr-4 text-3xl">📝</span>
          <span>Improve the documentation by fixing missing or wrong information, typos, or grammar errors (I'm not a native English speaker). Check the source code here: <a class="underline border-orange-300 hover:text-orange-600 text-orange-500" target="_blank" href="https://github.com/alfonsobries/vue-tailwind-themes">https://github.com/alfonsobries/vue-tailwind-themes</a></span>
        </li>
        <li class="mt-4 flex">
          <span class="block -ml-5 mr-4 text-3xl">💵</span>
          <span>One of the best ways to help me is by sponsoring me in GitHub <a class="underline border-orange-300 hover:text-orange-600 text-orange-500" target="_blank" href="https://github.com/sponsors/alfonsobries">https://github.com/sponsors/alfonsobries</a> so I can spend more time in this project and still pay the bills.</span>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  head () {
    return {
      title: 'Community themes - VueTailwind',
      meta: [
        { hid: 'description', name: 'description', content: 'VueTailwind themes created and shared for the community' }
      ]
    }
  }
})
</script>
