<template>
  <div class="relative">
    <label
      for="firstName"
      class="absolute -top-2.5 left-2 bg-[#EBEAEF] px-1 text-gray-500 text-sm"
    >
      First Name
    </label>
    <input
      id="firstName"
      :type="type"
      :maxlength="maxlength"
      :value="value"
      class="w-full bg-[#EBEAEF] border border-[#BCBFD2] rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
</template>

<script setup></script>

<style></style>
