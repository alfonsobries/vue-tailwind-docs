<template>
  <preview class="flex flex-col items-center p-4 bg-gray-100 border rounded shadow-inner">
    <t-datepicker
      v-model="date"
      multiple
      inline
    />

    <span>
      {{ date }}
    </span>
  </preview>
</template>

<script>
export default {
  data () {
    return {
      date: []
    }
  }
}
</script>
