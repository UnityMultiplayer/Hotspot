<template>
    <div class="h-screen">
        <Navbar />
        <NuxtPage />
        <FooterComp />
        <!--<div class="bg2 h-screen w-screen fixed top-0 left-0 -z-50"></div>-->
    </div>
</template>

<style lang="css">
    
</style>

<style scoped>
    .bg2 {
        background-image: linear-gradient(45deg, var(--bg-gradient-color1), var(--bg-gradient-color2));
    }
</style>

<script setup lang="ts">
    const route = useRoute();

    useHead({
        titleTemplate: '%s - Unity Multiplayer'
    });
</script>