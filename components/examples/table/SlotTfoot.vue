<template>
  <preview>
    <t-table
      :headers="['Name', 'Email', 'Age', 'Sales']"
      :footer-data="['', '', 29, '$10,123']"
      :data="[
        ['Alfonso Bribiesca', 'alfonso@vexilo.com', '31', '$9,999.00'],
        ['Saida Redondo', 'saida@gmail.com', 27, '$124.00'],
      ]"
    >
      <template slot="tfoot" slot-scope="props">
        <tfoot :class="props.tfootClass">
          <tr :class="[props.trClass, 'bg-gray-200']">
            <td colspan="3" :class="[props.tdClass, 'text-right']">
              <strong>Total:</strong>
            </td>
            <td>
              <strong class="text-lg">{{ props.data[3].text }}</strong>
            </td>
          </tr>
        </tfoot>
      </template>
    </t-table>
  </preview>
</template>

<script>
export default {
}
</script>
