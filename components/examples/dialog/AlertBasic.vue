<template>
  <preview>
    <t-button @click.prevent="$dialog.alert('Server overheating', 'Please add an ice or something', 'warning')">
      Open confirmation dialog
    </t-button>
  </preview>
</template>
