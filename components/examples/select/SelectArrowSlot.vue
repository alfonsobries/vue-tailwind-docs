<template>
  <preview>
    <t-select wrapped :options="[1,2,3]" variant="wrappedDemo">
      <template slot="arrow" slot-scope="{ className, variant, value }">
        <span v-if="variant==='error'" :class="className">😡</span>
        <span v-else-if="value>2" :class="className">🥔</span>
        <span v-else :class="className">🤯</span>
      </template>
    </t-select>
  </preview>
</template>

<script>
export default {

}
</script>
