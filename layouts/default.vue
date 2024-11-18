<template>
  <div class="flex h-screen">
    <Sidebar />
    <div class="max-w-[calc(100%-240px)] h-full w-full bg-[#EBEAEF]">
      <Header />
      <main>
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

<script setup>
import Header from "~/components/layouts/Header.vue";
import Sidebar from "~/components/layouts/Sidebar.vue";
</script>

<style></style>
