<template>
  <div
    class="table-wrapper h-full w-full overflow-x-auto bg-white px-2 py-2 rounded-[5px]"
  >
    <table class="table-auto w-full bg-white rounded-[5px] border-collapse">
      <thead>
        <tr class="bg-black text-white rounded-[5px]">
          <th
            class="py-3 px-3 text-left"
            v-for="(column, index) in columns"
            :key="column.key"
            :style="{ width: column.width + 'px !important' }"
            :class="[
              {
                'rounded-l-lg': index === 0,
                'rounded-r-lg': index === columns.length - 1,
                'cursor-pointer': column.sortable,
              },
            ]"
          >
            <p>
              <slot :name="'header-' + column.key">
                {{ column.label }}
              </slot>
            </p>
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-if="tableData.length">
          <tr
            v-for="data in tableData"
            :key="data.id"
            class="border-t border-b border-gray-300 odd:bg-white even:bg-[#F1F0F3]"
          >
            <td class="py-4 px-3" v-for="column in columns" :key="column.key">
              <template v-if="column.slotName">
                <slot :name="column.slotName" v-bind="data">
                  {{ data[column.key] }}
                </slot>
              </template>
              <template v-else>
                {{ data[column.key] }}
              </template>
            </td>
          </tr>
        </template>
        <template v-else>
          <tr>
            <td colspan="6" class="text-center py-4">No data available</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const columns = [
  {
    key: "name",
    label: "Name",
    sortable: true,
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "phone",
    label: "Phone",
  },
  {
    key: "address",
    label: "Address",
  },
  {
    key: "status",
    label: "Status",
  },
  {
    key: "action",
    label: "Action",
  },
];
const tableData = [
  {
    id: 1,
    name: "Ezra",
    email: "ezra@gmail.com",
    phone: "1234567890",
    address: "123 Main Street",
    status: "Active",
    action: "Edit",
  },
  {
    id: 2,
    name: "Ezra",
    email: "ezra@gmail.com",
    phone: "1234567890",
    address: "123 Main Street",
    status: "Active",
    action: "Edit",
  },
  {
    id: 3,
    name: "Ezra",
    email: "ezra@gmail.com",
    phone: "1234567890",
    address: "123 Main Street",
    status: "Active",
    action: "Edit",
  },
  {
    id: 4,
    name: "Ezra",
    email: "ezra@gmail.com",
    phone: "1234567890",
    address: "123 Main Street",
    status: "Active",
    action: "Edit",
  },
  {
    id: 5,
    name: "Ezra",
    email: "ezra@gmail.com",
    phone: "1234567890",
    address: "123 Main Street",
    status: "Active",
    action: "Edit",
  },
];
</script>

<style></style>
