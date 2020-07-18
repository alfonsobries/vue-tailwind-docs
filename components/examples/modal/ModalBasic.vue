<template>
  <preview>
    <t-modal
      variant="demo"
      :value="true"
      :focus-on-open="false"
      :disable-body-scroll="false"
      :esc-to-close="false"
      :click-to-close="false"
      header="Title of the modal"
    >
      Content of the modal.

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
    </t-modal>
  </preview>
</template>

<script>
export default {

}
</script>
