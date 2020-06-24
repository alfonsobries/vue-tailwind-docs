<template>
  <div class="bg-white">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 pb-10">
      <div class="flex -mx-5 relative">
        <nav class="flex-shrink-0 w-56 px-5">
          <div class="sticky top-0 py-5 max-h-screen overflow-y-auto scrolling-touch">
            <div v-for="(group, groupIndex) in navigation" :key="group.id" class="my-5">
              <h5 class="mb-3 text-gray-500 uppercase tracking-wide font-bold text-xs px-3">
                {{ group.text }}
              </h5>
              <ul>
                <li v-for="(item, index) in group.items" :key="index">
                  <nuxt-link
                    :to="item.to"
                    class="px-3 py-1 transition duration-200 ease-in-out relative hover:text-gray-900 text-gray-600 rounded flex items-center"
                    :class="{ 'bg-orange-100 text-orange-500': index===1 && groupIndex === 0 }"
                  >
                    {{ item.text }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <nuxt-content
          class="px-6 xl:px-12 w-full max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:w-3/4 pt-10"
          :document="page"
        />

        <nav class="hidden lg:text-sm lg:block lg:w-1/3 xl:w-1/4 lg:px-6 relative">
          <div class="sticky top-0 max-h-screen overflow-y-auto scrolling-touch py-10">
            <h5 class="text-gray-500 uppercase tracking-wide font-bold text-xs px-3">
              On this page
            </h5>
            <ul>
              <li v-for="item in page.toc" :key="item.id">
                <a
                  :href="`#${item.id}`"
                  class="px-3 py-1 transition duration-200 ease-in-out relative hover:text-gray-900 hover:bg-orange-100 text-gray-600 rounded flex items-center text-sm"
                >
                  <span :class="item.depth > 2 ? `pl-${item.depth}` : undefined">{{ item.text }}</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  async asyncData ({ $content }) {
    const page = await $content('home').fetch()

    return {
      page
    }
  },

  data () {
    return {
      navigation: [
        {
          id: 'form-elements',
          text: 'Form elements',
          items: [
            {
              to: '/',
              text: 'Text Input'
            },
            {
              to: '/',
              text: 'Textarea'
            },
            {
              to: '/',
              text: 'Select'
            },
            {
              to: '/',
              text: 'Radio'
            },
            {
              to: '/',
              text: 'Button'
            },
            {
              to: '/',
              text: 'Checkbox'
            }
          ]
        },
        {
          id: 'form-components',
          text: 'Form Components',
          items: [
            {
              to: '/',
              text: 'Rich Select'
            },
            {
              to: '/',
              text: 'Datepicker'
            },
            {
              to: '/',
              text: 'Checkbox group'
            },
            {
              to: '/',
              text: 'Radio group'
            },
            {
              to: '/',
              text: 'Input group'
            }
          ]
        },
        {
          id: 'components',
          text: 'Components',
          items: [
            {
              to: '/',
              text: 'Tag'
            },
            {
              to: '/',
              text: 'Alert'
            },
            {
              to: '/',
              text: 'Table'
            },
            {
              to: '/',
              text: 'Modal'
            },
            {
              to: '/',
              text: 'Pagination'
            },
            {
              to: '/',
              text: 'Card'
            },
            {
              to: '/',
              text: 'Dropdown'
            }
          ]
        }
      ]
    }
  }
})
</script>
