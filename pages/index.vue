<template>
  <div>
    <div class="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
      <div class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
        <div class="text-center">
          <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
            Vue<span class="text-orange-500 font-bold">Tailwind</span>
          </h2>
          <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Set of Lightview and fully customizable Vue Components optimized for TailwindCss
          </p>
          <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
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

    <div class="bg-orange-100 py-16 shadow-lg px-4">
      <div class="container mx-auto max-w-2xl">
        <h3 class="text-3xl font-semibold">
          👋 Hi Adam!,
        </h3>

        <p class="mt-4">
          My name is <a href="https://alfonsobribiesca.com/" target="_blank" class="border-b-4 border-orange-300 hover:text-orange-600 text-orange-500">👨‍💻 Alfonso Bribiesca</a> I am a full-stack software developer from Mexico City with about 12 years of experience, and I want to join to the TailwindCSS team:
        </p>

        <p class="mt-4">
          To be considered and as the job description asks for, I developed this project that I hope can serve as a useful reference for my work. I build this project in 2 parts:
        </p>

        <ol class="px-4 list-decimal">
          <li class="mt-4">
            I re-think and re-build from scratch in Typescript, a new, improved version of an old package that I create a year ago called VueTailwind that is a set of common components that are meant to be configured to have personalized CSS classes.
            You can see the <a href="https://v1.vue-tailwind.com/" target="_blank" class="border-b-4 border-orange-300 hover:text-orange-600 text-orange-500">new docs here</a> and the <a href="https://github.com/alfonsobries/vue-tailwind" target="_blank" class="border-b-4 border-orange-300 hover:text-orange-600 text-orange-500">source code here</a>
          </li>
          <li class="mt-4">
            For that new package, I create a new Theme builder that allows the users to create and preview his theme using an autocomplete input that gets TailwindCSS classes fetched from a Laravel API. You can <a href="#theme-builder" class="border-b-4 border-dotted border-orange-300 hover:text-orange-600 text-orange-500" @click.prevent="smoothScrolToThemeBuilder">test it below ↓↓</a>.
          </li>
        </ol>

        <p class="mt-4 font-semibold">
          What I expect from this job and my vision for TailwindCSS
        </p>

        <p class="mt-4">
          I will like to create tools that help developers to create beautiful, fast, and customized applications with TailwindCSS-related libraries. I can easily picture TailwindCSS as the most import CSS framework in the near future, and I want to be part of it.
        </p>

        <p class="mt-4 font-semibold">
          A little more about me:
        </p>

        <ol class="px-4 list-disc">
          <li class="mt-4">
            I am an expert in VueJS and Laravel together with his ecosystem(is my default stack). However, I know different technologies needed for this team like React and Next.js; my experience in both is not as extensive as VueJs. Still, I'm ready to create any project with both techs or different ones. (You can learn more about my knowledge in <a class="border-b-4 border-orange-300 hover:text-orange-600 text-orange-500" target="_blank" href="https://alfonsobribiesca.com/">my resume</a>)
          </li>
          <li class="mt-4">
            I have been independently making web applications for 12 years on behalf of my company called <a href="https://www.vexilo.com/en" target="_blank" class="border-b-4 border-orange-300 hover:text-orange-600 text-orange-500">Vexilo</a>. (Quick note: even though it sells as a "Company" is a one-person company (me) that means all the portfolio is mine).
          </li>
          <li class="mt-4">
            I am self-motivated, used to work independently, and a person who is making an effort to learn new stuff regularly.
          </li>
          <li class="mt-4">
            For the last two years, "my day" job has been for a US company called Surg.io. I'm used to working together with an English-speaking team (As you may imagine, my native language is Spanish).
          </li>
          <li class="mt-4">
            I am a big fan of TailwindCSS, and his philosophy, and as a small proof, every single link that you can find in this page is for something built with TailwindCSS. Also, I have been a follower of your work for a couple of years now; I buy and take both of your courses (Test-Driven Laravel & Refactoring to Collections) and, of course, read the Refactoring UI book that you write together with Steve Schoger.
          </li>
          <li class="mt-4">
            PD: I love Canada 🇨🇦
          </li>
        </ol>
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ThemeBuilder from '~/components/ThemeBuilder.vue'
export default Vue.extend({
  components: {
    ThemeBuilder
  },
  methods: {
    smoothScrolToThemeBuilder () {
      document.getElementById('theme-builder-section')!.scrollIntoView({ behavior: 'smooth' })
    }
  }
})
</script>
