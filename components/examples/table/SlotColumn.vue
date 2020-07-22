<template>
  <preview>
    <t-table
      :headers="['name', 'email']"
      :data="[
        {
          name: 'Alfonso Bribiesca',
          email: 'alfonso@vexilo.com',
        },
        {
          name: 'Saida Redondo',
          email: 'saida@gmail.com',
        },
      ]"
    >
      <template slot="column" slot-scope="props">
        <td :class="[props.tdClass, 'bg-yellow-100 text-sm text-center']">
          <strong>{{ props.text }}</strong>
        </td>
      </template>
    </t-table>
  </preview>
</template>

<script>
export default {
}
</script>
