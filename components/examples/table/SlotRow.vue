<template>
  <preview>
    <t-table
      :headers="['Name', 'Email', 'Sales', 'Actions']"
      :data="[
        {
          name: 'Alfonso Bribiesca',
          email: 'alfonso@vexilo.com',
          sales: 9999,
        },
        {
          name: 'Saida Redondo',
          email: 'saida@gmail.com',
          sales: 1500
        },
        {
          name: 'Regina Bribiesca',
          email: 'regina@gmail.com',
          sales: -200.50
        },
        {
          name: 'Ricardo Martinez',
          email: 'rickyrickky@gmail.com',
          sales: 0.0
        },
      ]"
    >
      <template slot="row" slot-scope="props">
        <tr :class="[props.trClass, props.rowIndex % 2 === 0 ? 'bg-gray-100' : '']">
          <td :class="props.tdClass">
            {{ props.row.name }}
          </td>
          <td :class="props.tdClass">
            <a :href="`mailto: ${props.row.email}`">{{ props.row.email }}</a>
          </td>
          <td :class="props.tdClass">
            <span :class="{'text-green-500': props.row.sales >= 0, 'text-red-500': props.row.sales < 0 }">
              ${{ props.row.sales.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }}
            </span>
          </td>
          <td :class="props.tdClass">
            <t-button size="sm" variant="secondary">
              Edit
            </t-button>
          </td>
        </tr>
      </template>
    </t-table>
  </preview>
</template>

<script>
export default {
}
</script>
