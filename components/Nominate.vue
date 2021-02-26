<template>
  <div class="fixed bottom-0 right-0 z-50 max-w-lg m-4">
    <t-alert :show="show" @hidden="onHidden">
      <p class="text-sm">
        🎖🎖 Is this project useful to you? Consider nominating me (@alfonsobries) to the Github star show. It will mean a lot to me.
      </p>

      <p class="flex flex-col items-start mt-2 space-y-2 text-sm md:flex-row md:justify-between md:space-y-0">
        <a target="_blank" href="https://stars.github.com/nominate/" class="font-semibold text-blue-500 underline white whitespace-nowrap">Sure! Take me to the nomination page →</a>

        <button type="button" class="font-semibold text-blue-500 underline white whitespace-nowrap" @click="hide">
          Nah
        </button>
      </p>
    </t-alert>
  </div>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      show: false
    }
  },

  mounted () {
    this.show = localStorage.getItem('hideNomination') === null
  },

  methods: {
    hide () {
      this.show = false

      this.onHidden()
    },
    onHidden () {
      localStorage.setItem('hideNomination', 1)
    }
  }
})
</script>
