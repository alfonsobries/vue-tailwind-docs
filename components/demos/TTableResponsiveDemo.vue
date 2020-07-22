<template>
  <div class="p-4">
    <t-table
      :headers="['Name', 'E-mail', 'Status', '']"
      :data="[
        {
          id: 1,
          name: 'Alfonso Bribiesca',
          email: 'alfonso@vexilo.com',
          is_approved: true,
        },
        {
          id: 2,
          name: 'Saida Redondo',
          email: 'saida@gmail.com',
          is_approved: false,
        },
      ]"
      :responsive="true"
      :responsive-breakpoint="520"
    >
      <template slot="tbody" slot-scope="{ tbodyClass, trClass, tdClass, thClass, renderResponsive, data }">
        <template v-if="renderResponsive">
          <tbody
            v-for="(row, rowIndex) in data"
            :key="rowIndex"
            :class="[tbodyClass, rowIndex % 2 === 0 ? 'bg-gray-100' : '']"
          >
            <tr :class="trClass">
              <th class="uppercase text-gray-600 text-sm font-semibold">
                Name
              </th>
              <td :class="[tdClass, 'relative']">
                <t-dropdown class="absolute right-0 top-0">
                  <template slot="button">
                    <svg version="1.1" viewBox="0 0 16 16" class="fill-current text-gray-600 svg-icon svg-fill" heigth="20" style="width: 20px;"><path pid="0" d="M13 7a2 2 0 1 1 .001 3.999A2 2 0 0 1 13 7zM8 7a2 2 0 1 1 .001 3.999A2 2 0 0 1 8 7zM3 7a2 2 0 1 1 .001 3.999A2 2 0 0 1 3 7z" /></svg>
                  </template>
                  <button
                    class="block hover:text-white text-gray-800 px-4 py-2 hover:bg-blue-500 w-full text-left"
                  >
                    Edit
                  </button>
                  <button
                    class="block hover:text-white text-gray-800 px-4 py-2 hover:bg-blue-500 w-full text-left"
                  >
                    Delete
                  </button>
                </t-dropdown>
                {{ row.name }}
              </td>
            </tr>
            <tr :class="trClass">
              <th class="uppercase text-gray-600 text-sm font-semibold">
                Email
              </th>
              <td :class="[tdClass, 'td-overflow']">
                <a
                  :href="`mailto: ${row.email}`"
                  class="text-gray-600 hover:underline"
                >{{ row.email }}</a>
              </td>
            </tr>
            <tr :class="trClass">
              <th class="uppercase text-gray-600 text-sm font-semibold">
                Status
              </th>
              <td :class="[tdClass]">
                <span
                  v-if="row.is_approved"
                  class="d-flex py-1 px-5 bg-green-200 text-green-900 text-sm rounded-full font-bold"
                >
                  Active
                </span>
                <span
                  v-else
                  class="d-flex py-1 px-5 bg-gray-200 text-gray-900 text-sm rounded-full font-bold"
                >
                  Inactive
                </span>
              </td>
            </tr>
          </tbody>
        </template>
      </template>
      <template slot="row" slot-scope="{ trClass, tdClass, rowIndex, row }">
        <tr :class="[trClass, rowIndex % 2 === 0 ? 'bg-gray-100' : '']">
          <td :class="[tdClass, 'w-full']">
            {{ row.name }}
          </td>
          <td :class="tdClass">
            <a
              :href="`mailto: ${row.email}`"
              class="text-gray-600 hover:underline"
            >{{ row.email }}</a>
          </td>
          <td :class="[tdClass, 'text-center']">
            <span
              v-if="row.is_approved"
              class="d-flex py-2 px-5 bg-green-200 text-green-900 text-sm rounded-full font-bold"
            >
              Active
            </span>
            <span
              v-else
              class="d-flex py-2 px-5 bg-gray-200 text-gray-900 text-sm rounded-full font-bold"
            >
              Inactive
            </span>
          </td>
          <td :class="[tdClass, 'text-right']">
            <t-dropdown>
              <template slot="button">
                <svg version="1.1" viewBox="0 0 16 16" class="fill-current text-gray-600 svg-icon svg-fill" heigth="20" style="width: 20px;"><path pid="0" d="M13 7a2 2 0 1 1 .001 3.999A2 2 0 0 1 13 7zM8 7a2 2 0 1 1 .001 3.999A2 2 0 0 1 8 7zM3 7a2 2 0 1 1 .001 3.999A2 2 0 0 1 3 7z" /></svg>
              </template>
              <button
                class="block hover:text-white text-gray-800 px-4 py-2 hover:bg-blue-500 w-full text-left"
              >
                Edit
              </button>
              <button
                class="block hover:text-white text-gray-800 px-4 py-2 hover:bg-blue-500 w-full text-left"
              >
                Delete
              </button>
            </t-dropdown>
          </td>
        </tr>
      </template>
      <template slot="tfoot" slot-scope="{ tfootClass, trClass, tdClass, renderResponsive }">
        <tfoot :class="tfootClass">
          <tr :class="trClass">
            <td
              :class="tdClass"
              :colspan="renderResponsive ? 2 : 4"
            >
              <t-pagination
                :hide-prev-next-controls="renderResponsive"
                :total-items="100"
                :per-page="renderResponsive ? 3 : 5"
                :class="{'ml-auto': !renderResponsive, 'mx-auto': renderResponsive}"
              />
            </td>
          </tr>
        </tfoot>
      </template>
    </t-table>
  </div>
</template>

<script>
import ComponentDemo from './ComponentDemo'

export default ComponentDemo.extend({

})
</script>
