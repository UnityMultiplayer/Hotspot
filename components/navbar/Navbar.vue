<template>
    <div class="w-full mx-auto py-1 text-2xl unity-title lg:text-3xl px-4 font-semibold table table-fixed md:rounded-b-2xl unity-button">
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/about">About</NavbarLink>
        <NavbarLink to="/" class="text-center hover:brightness-125 align-middle"><img class="mx-auto h-12" :src="UnityIcon" alt="Unity Multiplayer"></NavbarLink>
        <NavbarLink to="https://unitymulti.fandom.com/wiki/UnityMultiplayer">Wiki</NavbarLink>
        <NavbarLink to="/credits">Credits</NavbarLink>
    </div>
</template>

<script setup lang="ts">
import UnityIcon from '~/public/icon.svg'
</script>