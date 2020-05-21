<template>
  <svg class="fill-current" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g :id="`Page-${_uid}`" stroke="none" stroke-width="1" fill="currentColor" fill-rule="evenodd">
      <g id="icon-shape">
        <slot />
      </g>
    </g>
  </svg>
</template>

<script>
export default {

}
</script>
