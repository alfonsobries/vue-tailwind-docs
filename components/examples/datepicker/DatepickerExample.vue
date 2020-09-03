<template>
  <preview class="flex flex-col items-center">
    <div class="flex items-center">
      <t-datepicker
        v-model="date"
        placeholder="Select a date"
        date-format="Y-m-d"
        user-format="m/d/Y"
      />

      <span class="px-3 py-1 ml-2 text-sm text-orange-700 bg-orange-100 rounded-full">Value: {{ date || '---' }}</span>
    </div>

    <div class="block w-full my-32 " />
  </preview>
</template>

<script>
export default {
  data () {
    return {
      date: '1987-02-18'
    }
  }
}
</script>
