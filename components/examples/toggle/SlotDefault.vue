<template>
  <preview>
    <t-toggle>
      <template
        slot="default"
        slot-scope="{ isChecked }"
      >
        <span
          class="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
          :class="{
            'opacity-100 ease-in duration-200': !isChecked,
            'opacity-0 ease-out duration-100': isChecked,
          }"
        >
          👎
        </span>
        <span
          class=" absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
          :class="{
            'opacity-100 ease-in duration-200': isChecked,
            'opacity-0 ease-out duration-100': !isChecked,
          }"
        >
          👍
        </span>
      </template>
    </t-toggle>
  </preview>
</template>

<script>
export default {
}
</script>
