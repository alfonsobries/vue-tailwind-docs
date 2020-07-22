<template>
  <preview>
    <t-table
      :headers="['Name', 'Email', 'Sales']"
      :data="[]"
    >
      <template v-if="![].length" v-slot:tbody="props">
        <tbody :class="props.tbodyClass">
          <tr :class="[props.trClass, 'text-center']">
            <td :class="props.tdClass" colspan="3">
              <t-alert show :dismissible="false" variant="error">
                No data was found! <button class="underline">
                  Create your first item
                </button>
              </t-alert>
            </td>
          </tr>
        </tbody>
      </template>
    </t-table>
  </preview>
</template>

<script>
export default {
}
</script>
