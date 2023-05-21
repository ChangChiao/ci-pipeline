<script setup lang="ts">
import { onMounted } from "vue";
import { worker } from "./mocks/browser";
onMounted(() => {
  worker.start();
});
console.log("test");
</script>

<template>
  app
  <!-- <router-view /> -->
</template>

<style>
:global(body) {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
