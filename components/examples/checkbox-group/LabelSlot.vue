<template>
  <preview>
    I am:
    <t-checkbox-group :options="['Angry', 'Happy', 'Cool']" name="label-examle">
      <template slot-scope="props">
        <template v-if="props.isChecked">
          <span v-if="props.label === 'Angry'">
            😡
          </span>
          <span v-else-if="props.label === 'Happy'">
            😃
          </span>
          <span v-else-if="props.label === 'Cool'">
            😎
          </span>
        </template>
        <template v-else>
          {{ props.label }}
        </template>
      </template>
    </t-checkbox-group>
  </preview>
</template>

<script>
export default {

}
</script>
