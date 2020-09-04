<template>
  <preview class="flex flex-col items-center p-4 bg-gray-100 border rounded shadow-inner">
    <t-datepicker
      :months-per-view="3"
      show
      inline
      :variants="{
        vertical: {
          viewGroup: 'bg-white border flex-wrap',
        }
      }"
      variant="vertical"
    />
  </preview>
</template>

<script>
export default {
}
</script>
