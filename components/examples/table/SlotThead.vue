<template>
  <preview>
    <t-table
      :headers="['Name', 'Email', 'Age', 'Sales']"
      :data="[
        ['Alfonso Bribiesca', 'alfonso@vexilo.com', '31', '$9,999.00'],
        ['Saida Redondo', 'saida@gmail.com', 27, '$124.00'],
      ]"
    >
      <template v-slot:thead="props">
        <thead :class="props.theadClass">
          <tr :class="props.trClass">
            <th
              v-for="(item, index) in props.data"
              :key="index"
              :class="[props.thClass, `bg-yellow-${index+1}00`]"
            >
              {{ item.text }}
            </th>
          </tr>
        </thead>
      </template>
    </t-table>
  </preview>
</template>

<script>
export default {
}
</script>
