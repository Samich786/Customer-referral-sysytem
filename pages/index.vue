<template></template>

<script setup>
const route = useRoute();
const router = useRouter();
import { onMounted } from "vue";
onMounted(() => {
  router.push("/dashboard");
});
</script>

<style></style>
