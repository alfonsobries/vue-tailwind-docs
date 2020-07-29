<template>
  <preview class="text-center">
    <t-dropdown
      variant="tooltip"
      toggle-on-hover
    >
      <span
        slot="trigger"
        class="text-blue-500 border-b border-dashed"
      >
        hey!, hover me
      </span>

      <template>
        Yes you can use the dropdown as tooltip
      </template>
    </t-dropdown>
  </preview>
</template>

<script>
export default {
}
</script>
