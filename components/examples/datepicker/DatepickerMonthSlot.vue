<template>
  <preview class="flex flex-col items-center p-4 bg-gray-100 border rounded shadow-inner">
    <t-datepicker
      v-model="date"
      initial-view="month"
      inline
    >
      <template
        slot="month"
        slot-scope="{ month, monthFormatted }"
      >
        <span v-if="month.getMonth() === 9">
          🎃
        </span>
        <span v-else>
          {{ monthFormatted }}
        </span>
      </template>
    </t-datepicker>
  </preview>
</template>

<script>
export default {
  data () {
    return {
      date: '1987-03-18'
    }
  }
}
</script>
