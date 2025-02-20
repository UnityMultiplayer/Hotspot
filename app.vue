<template>
  <div>
      <Navbar />
      <NuxtPage />
  </div>
</template>

<style lang="css">
    .dark-mode body {
        background: rgb(32, 32, 32);
    }

    body {
        background: rgb(236, 236, 236);
    }
</style>

<script setup lang="ts">
    const route = useRoute();

    useHead({
        titleTemplate: '%s - Unity Multiplayer'
    });
</script>