<template>
  <preview>
    <t-card
      variant="demo"
      :fixed-classes="{}"
      header="Title of the card"
    >
      Content of the card.

      <template v-slot:footer>
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
