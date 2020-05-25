<template>
  <div>
    <div class="bg-gray-300 py-6 shadow-lg">
      <div class="container mx-auto">
        <h3 class="text-3xl font-semibold">
          Hi Adam!,
        </h3>

        <p>
          My name is Alfonso Bribiesca, I am a full stack software developer from Mexico City and that is hoping to join to the Tailwind team, in order to be considered I do my best to make time to made this small project:
        </p>

        <ol class="p-4 list-disc">
          <li class="my-2">
            First: I made from scratch a new version of an old open source package called VueTailwind based in my experience working every single project with Tailwind and
          </li>
          <li class="my-2">
            Second: I made this website where the user can interactively <a href="#build" class="underline">create his own themes</a> of the components the library has.
          </li>
        </ol>

        <p>My vision is</p>

        <p>
          I have all the skills you mention an a good amount of projects made with Tailwind and different techs, if you want I prepare this <a class="underline">Small resume</a>

        <!-- <p>This is me, (im more handsome in person according - according to my mom)</p>

        <img class="rounded-lg" src="https://www.alfonsobribiesca.com/photo.png"> -->
        </p>
      </div>
    </div>

    <div class="bg-gray-100 py-6">
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
  }
})
</script>
