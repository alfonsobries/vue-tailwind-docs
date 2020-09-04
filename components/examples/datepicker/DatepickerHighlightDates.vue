<template>
  <preview class="flex flex-col items-center p-4 bg-gray-100 border rounded shadow-inner">
    <t-datepicker
      v-model="date"
      inline
      :highlight-dates="highlightDates"
    />
  </preview>
</template>

<script>
export default {
  data () {
    return {
      date: '1987-03-18',
      highlightDates: [
        // A formatted date
        '1987-03-19',
        // A date object ('1987-03-25',)
        new Date(1987, 4, 25),
        // Disable mondays
        function (date) {
          return date.getDay() === 1
        }
      ]
    }
  }

}
</script>
