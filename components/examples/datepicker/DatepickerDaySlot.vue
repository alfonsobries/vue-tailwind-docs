<template>
  <preview class="flex flex-col items-center p-4 bg-gray-100 border rounded shadow-inner">
    <t-datepicker
      v-model="date"
      inline
    >
      <template
        slot="day"
        slot-scope="{ day, dayFormatted }"
      >
        <span v-if="['12', '20'].includes(dayFormatted) && day.getMonth() === 2">
          🎂
        </span>
        <span v-else-if="day.getDay() === 2">
          🌮
        </span>
        <span v-else>
          {{ dayFormatted }}
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
