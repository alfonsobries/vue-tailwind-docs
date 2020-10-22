<template>
  <preview>
    <t-button @click.prevent="$dialog.prompt('New password', 'Include one number and one special character.', 'question')">
      Open prompt dialog
    </t-button>
  </preview>
</template>
