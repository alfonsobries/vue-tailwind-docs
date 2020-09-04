<template>
  <preview class="flex flex-col items-center p-4 bg-gray-100 border rounded shadow-inner">
    <t-datepicker
      inline
      value="1987-02-18"
      :locale="locale"
    />
  </preview>
</template>

<script>
export default {
  data () {
    return {
      locale: {
        weekdays: { shorthand: ['S😴', 'M😭', 'T😑', 'W😶', 'T😔', 'F😎', 'S😵'] }
      },
      date: '1987-03-18'
    }
  }
}
</script>
