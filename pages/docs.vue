<template>
  <div class="bg-white">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 py-10">
      <div class="flex -mx-5">
        <nav class="flex-shrink-0 w-56 px-5">
          <div v-for="(group, groupIndex) in navigation" :key="group.id" class="mb-6">
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
        </nav>

        <nuxt-content
          class="px-5"
          :document="page"
        />
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
