<template>
  <preview>
    <t-card
      :fixed-classes="{}"
      header="Title of the card"
    >
      Content of the card.

      <template #footer>
        <div class="flex justify-between">
          <t-button type="button" @click="showModalFull ? $refs.modal.hide() : undefined">
            Cancel
          </t-button>
          <t-button type="button" @click="showModalFull ? $refs.modal.hide() : undefined">
            Ok
          </t-button>
        </div>
      </template>
    </t-card>
  </preview>
</template>

<script>
export default {

}
</script>
