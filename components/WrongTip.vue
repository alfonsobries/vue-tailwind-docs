<template>
  <div class="flex items-center p-2 leading-tight text-red-800 rounded-lg">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="flex-shrink-0 w-6 h-6 mr-2"><circle cx="12" cy="12" r="10" fill="#fed7d7" /><path fill="#f56565" d="M13.41 12l2.83 2.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 1 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12z" /></svg>
    <span>
      <slot />
    </span>
  </div>
</template>

<script>
export default {
}
</script>
