<template>
  <preview>
    <t-button @click.prevent="$dialog.confirm('Delete user?', 'This action cannot be undone.', 'info')">
      Open confirmation dialog
    </t-button>
  </preview>
</template>
