<template>
  <div class="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
    <t-dropdown variant="searchBox" :show="showResults" @hidden="clear">
      <template slot="trigger" slot-scope="{ hideIfFocusOutside}">
        <label for="search" class="sr-only">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
            </svg>
          </div>
          <input
            id="search"
            ref="search"
            v-model="query"
            autocomplete="off"
            class="block w-full pl-10 pr-3 py-2 border border-transparent focus:outline-none focus:bg-gray-300 focus:text-gray-900 rounded-md leading-5 sm:text-sm transition duration-150 ease-in-out bg-gray-200 text-gray-700 placeholder-gray-600"
            :class="{
              'lg:bg-white lg:placeholder-gray-500 ': transparent
            }"
            placeholder="Search the docs (Press &quot;/&quot; to focus)"
            type="search"
            @blur="hideIfFocusOutside"
          >
        </div>
      </template>
      <template slot-scope="{ blurHandler }">
        <ul v-if="articles.length">
          <li v-for="article of articles" :key="article.slug">
            <a
              class="px-3 py-2 block w-full hover:bg-orange-100 focus:bg-orange-100"
              href="#"
              @click="openArticle(article)"
              @blur="blurHandler"
            >
              {{ article.title }}
            </a>
          </li>
        </ul>
      </template>
    </t-dropdown>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    transparent: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      query: '',
      articles: []
    }
  },
  computed: {
    showResults () {
      return this.articles.length > 0
    }
  },
  watch: {
    async query (query) {
      if (!query) {
        this.articles = []
        return
      }

      this.articles = await this.$content()
        // .only(['title', 'slug'])
        // .sortBy('createdAt', 'asc')
        .limit(12)
        .search(query)
        .fetch()
    }
  },
  mounted () {
    window.addEventListener('keyup', this.focusWithKey)
  },
  beforeDestroy () {
    window.removeEventListener('keyup', this.focusWithKey)
  },
  created () {
    this.$root.$on('routeChanged', () => {
      this.query = ''
    })
  },
  methods: {
    async focusWithKey (event) {
      // "/"
      if (event.keyCode === 55) {
        await this.$nextTick()
        this.$refs.search.focus()
      }
    },
    openArticle (article) {
      this.$router.push(`/docs/${article.slug}`)
    },
    async clear () {
      await this.$nextTick()
      this.query = ''
    }
  }
})
</script>
