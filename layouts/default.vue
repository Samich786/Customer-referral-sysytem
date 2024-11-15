<template>
  <div class="flex h-screen">
    <Sidebar />
    <div>
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
