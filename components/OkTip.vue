<template>
  <div class="flex items-center p-2 leading-tight text-green-800 rounded-lg">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="flex-shrink-0 w-6 h-6 mr-2"><circle cx="12" cy="12" r="10" class="text-green-200 fill-current" /><path d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z" class="text-green-600 fill-current" /></svg>
    <span>
      <slot />
    </span>
  </div>
</template>

<script>
export default {
}
</script>
