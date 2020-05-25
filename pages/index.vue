<template>
  <div>
    <div class="bg-orange-100 py-16 shadow-lg">
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
          A little more about me:
        </p>

        <ol class="px-4 list-disc">
          <li class="mt-4">
            I am an expert in VueJS and Laravel together with his ecosystem(is my default stack). However, I know different technologies needed for this team like React and Next.js; my experience in both is not as extensive as VueJs. Still, I'm ready to create any project with both techs or different ones.
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
            I am a big fan of TailwindCSS, and his philosophy, and as a small proof, every single link that you can find in this page is for something built with TailwindCSS. Also, I buy and take both of your courses (Test-Driven Laravel & Refactoring to Collections) and read the Refactoring UI book that you write together with Steve Schoger.
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
