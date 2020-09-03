<template>
  <div class="bg-gray-100">
    <div class="max-w-screen-xl px-4 py-10 pb-10 mx-auto sm:px-6">
      <div class="max-w-xl mx-auto">
        <h1 class="mb-10 text-3xl font-medium leading-none tracking-tight text-center text-gray-900">
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
          <li class="flex mt-4">
            <span class="block mr-4 -ml-5 text-3xl">⭐️</span>
            <span>The easiest way to help is by giving me a start in Github <a class="text-orange-500 underline border-orange-300 hover:text-orange-600" href="https://github.com/alfonsobries/vue-tailwind" target="_blank">https://github.com/alfonsobries/vue-tailwind</a></span>
          </li>
          <li class="flex mt-4">
            <span class="block mr-4 -ml-5 text-3xl">🔧</span>
            <span>You can help to add new features or fixing bugs in Github <a class="text-orange-500 underline border-orange-300 hover:text-orange-600" href="https://github.com/alfonsobries/vue-tailwind" target="_blank">https://github.com/alfonsobries/vue-tailwind</a></span>
          </li>
          <li class="flex mt-4">
            <span class="block mr-4 -ml-5 text-3xl">📝</span>
            <span>Improve the documentation by fixing missing or wrong information, typos, or grammar errors (I'm not a native English speaker). Check the source code here: <a class="text-orange-500 underline border-orange-300 hover:text-orange-600" target="_blank" href="https://github.com/alfonsobries/vue-tailwind-themes">https://github.com/alfonsobries/vue-tailwind-themes</a></span>
          </li>
          <li class="flex mt-4">
            <span class="block mr-4 -ml-5 text-3xl">💵</span>
            <span>One of the best ways to help me is by sponsoring me in GitHub <a class="text-orange-500 underline border-orange-300 hover:text-orange-600" target="_blank" href="https://github.com/sponsors/alfonsobries">https://github.com/sponsors/alfonsobries</a> so I can spend more time in this project and still pay the bills.</span>
          </li>
        </ol>

        <h2 class="mt-8 text-xl font-semibold">
          Interested in a Gold Sponsorship?
        </h2>
        <p class="mt-4">
          Are you a company or organization that benefits from this project and is interested in sponsoring it. We can put your logo in a special section of this site and even talk about some premium support.
        </p>

        <p class="mt-4">
          You can contact me through <a class="text-orange-500 underline border-orange-300 hover:text-orange-600" target="_blank" href="https://twitter.com/alfonsobries">twitter</a> or send me an email: <span class="font-mono text-sm bg-gray-200 nowrap">alfonso[at]vexilo.com</span>.</a>
        </p>
      </div>
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
