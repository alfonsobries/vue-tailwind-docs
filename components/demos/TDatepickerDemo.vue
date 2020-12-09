<template>
  <div class="p-4">
    <t-datepicker
      v-model="currentValue"
      :clearable="settings.clearable"
      :inline="settings.inline"
      :range="settings.range"
      :multiple="settings.multiple"
      :months-per-view="settings.monthsPerView"
      :week-start="settings.weekStart"
      :user-format="settings.userFormat"
    />

    <p class="mt-4">
      <span class="text-sm text-gray-500">Current value:</span>
      <span class="px-3 py-1 ml-2 font-mono text-sm text-gray-900 bg-gray-200 rounded">{{ currentValue || '-' }}</span>
    </p>
  </div>
</template>

<script>
import ComponentDemo from './ComponentDemo'

export default ComponentDemo.extend({
  data () {
    const d = new Date()
    return {
      currentValue: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
    }
  },
  methods: {
    addDays (date, days) {
      const result = new Date(date)
      result.setDate(result.getDate() + days)
      return result
    }
  },
  watch: {
    async 'settings.userFormat' () {
      const currentValue = this.currentValue
      this.currentValue = null
      await this.$nextTick()
      this.currentValue = currentValue
    },
    'settings.range' (range) {
      if (range) {
        this.currentValue = [new Date(), this.addDays(new Date(), 4)]
      } else {
        this.currentValue = null
      }
    },
    'settings.multiple' (multiple) {
      if (multiple && this.range) {
        return
      }

      if (multiple) {
        this.currentValue = [new Date(), this.addDays(new Date(), 3), this.addDays(new Date(), 7)]
      } else {
        this.currentValue = null
      }
    }
  }
})
</script>
