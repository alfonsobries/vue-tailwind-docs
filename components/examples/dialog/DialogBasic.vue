<template>
  <preview>
    <t-dialog
      variant="demo"
      :fixed-classes="{}"
      :value="true"
      :focus-on-open="false"
      :disable-body-scroll="false"
      :esc-to-close="false"
      :click-to-close="false"
      type="confirm"
      name="named-dialog"
      icon="question"
      title="Delete user?"
    >
      <p>This action cannot be undone.</p>
    </t-dialog>
  </preview>
</template>
