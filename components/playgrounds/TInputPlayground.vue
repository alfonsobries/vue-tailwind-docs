<template>
  <div class="p-4">
    <t-input v-model="currentValue" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentValue: 'I love vuejs 😎'
    }
  }
}
</script>
