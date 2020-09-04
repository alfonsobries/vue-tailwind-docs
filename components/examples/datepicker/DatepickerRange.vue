<template>
  <preview class="flex flex-col items-center p-4 bg-gray-100 border rounded shadow-inner">
    <t-datepicker
      v-model="date"
      range
      multiple
      inline
    />

    <span>
      {{ from }} to {{ to }}
    </span>
  </preview>
</template>

<script>
export default {
  data () {
    return {
      date: null
    }
  },
  computed: {
    from () {
      return this.date && this.date.length >= 1 ? this.date[0] : '--'
    },
    to () {
      return this.date && this.date.length >= 2 ? this.date[1] : '--'
    }
  }

}
</script>
