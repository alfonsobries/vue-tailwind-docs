<template>
  <div class="flex items-center">
    <span class="h-6 w-6 mr-2 flex-shrink-0 bg-gray-200 rounded-full flex items-center justify-center">
      <icon class="text-gray-600 h-4 w-4">
        <path id="Combined-Shape-Copy" d="M10,20 C15.5228475,20 20,15.5228475 20,10 C20,4.4771525 15.5228475,0 10,0 C4.4771525,0 0,4.4771525 0,10 C0,15.5228475 4.4771525,20 10,20 Z M10,18 C14.418278,18 18,14.418278 18,10 C18,5.581722 14.418278,2 10,2 C5.581722,2 2,5.581722 2,10 C2,14.418278 5.581722,18 10,18 Z M15,9 L15,11 L5,11 L5,9 L15,9 Z" />
      </icon>
    </span>

    <span>
      <slot />
    </span>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
  components: {
    Icon
  }
}
</script>
