<template>
  <main class="w-full py-8 text-center">
    <Title>About</Title>

    <img :src="UnityLogo" alt="Unity Multiplayer banner" class="w-1/4 mx-auto py-2">
    <p class="text-center text-xl w-2/3 mx-auto py-4">
      Unity Multiplayer is a multilingual factions Minecraft server first established in July 2023 with the goal of bringing creators from all corners of the Minecraft community together.
      After its initial three‑month run, now known as “The Pilot Season” or “Season 0,” the team went on hiatus to make improvements and prepare for Season 1.
      <br><br>
      Season 1 launched on January 7th on an entirely custom map called The Archipelago, this time featuring three large islands instead of villages.
      After six successful months, Season 1 concluded, with only a week before the start of Season 2.
      <br><br>
      Season 2 began in June 2024 on another custom map, The Promontory, with a fully overhauled mod lineup.
      In September 2024, the <a href="https://modrinth.com/mod/unitytranslate" class="underline hover:brightness-125">UnityTranslate</a> mod was announced and released,
      gaining significant attention as the first free and open‑source real‑time voice translation mod.
      <br><br>
      Unity’s final season, Season 3, launched on March 29th, 2025, on the Sundial Islands.
      It introduced a larger island, new creators, and a range of updated systems, including a custom economy, an improved flag system, and a new version of UnityTranslate.
      <br><br>
      On July 14th, the team went on another hiatus to work on updates for Season 3 and bring a fresh feel to the server for its final months.
    </p>
  </main>
</template>

<script setup lang="ts">
import UnityLogo from '~/public/Unity Multiplayer.svg'

definePageMeta({
  name: 'About',
});
</script>