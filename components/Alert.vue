<template>
  <div
    class="rounded-md  p-4 mb-4"
    :class="{
      'bg-green-100': type === 'success',
      'bg-red-100': type === 'error',
    }"
  >
    <div class="flex">
      <div class="flex-shrink-0">
        <icon v-if="type === 'success'" class="h-5 w-5 text-green-400">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </icon>
        <icon v-if="type === 'error'" class="h-5 w-5 text-red-400">
          <path id="Combined-Shape" d="M2.92893219,17.0710678 C6.83417511,20.9763107 13.1658249,20.9763107 17.0710678,17.0710678 C20.9763107,13.1658249 20.9763107,6.83417511 17.0710678,2.92893219 C13.1658249,-0.976310729 6.83417511,-0.976310729 2.92893219,2.92893219 C-0.976310729,6.83417511 -0.976310729,13.1658249 2.92893219,17.0710678 Z M9,5 L11,5 L11,11 L9,11 L9,5 Z M9,13 L11,13 L11,15 L9,15 L9,13 Z" />
        </icon>
      </div>
      <div class="ml-3">
        <p
          class="text-sm leading-5 font-medium "
          :class="{
            'text-green-800': type === 'success',
            'text-red-800': type === 'error',
          }"
        >
          <slot />
        </p>
      </div>
      <div class="ml-auto pl-3">
        <div class="-mx-1.5 -my-1.5">
          <button
            class="inline-flex rounded-md p-1.5 focus:outline-none focus:bg-green-100 transition ease-in-out duration-150"
            :class="{
              'text-green-500 hover:bg-green-100': type === 'success',
              'text-red-500 hover:bg-red-100': type === 'error',
            }"
            @click="$emit('close')"
          >
            <icon class="h-4 w-4">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </icon>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  components: {
    Icon
  },
  props: {
    type: {
      type: String,
      default: 'success'
    }
  }
}
</script>
