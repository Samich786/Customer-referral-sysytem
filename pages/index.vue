<template></template>

<script setup>
import { onMounted } from "vue";
const router = useRouter();

onMounted(() => {
  router.push("/dashboard");
});
</script>

<style></style>
