<template>
  <div class="w-full h-16 text-center text-xl">
    <div class="font-light text-center py-2">
      <NuxtLink to="https://github.com/UnityMultiplayer/Hotspot" class="hover:underline hover:brightness-125">Unity Hotspot</NuxtLink>
      <a>&nbsp;&nbsp;|&nbsp;&nbsp;</a>
      <a>A Unity Production</a>
    </div>

    <div class="mx-auto flex py-2">
      <div class="flex mx-auto">
        <SocialGlyph social="twitter" handle="unprodprojects" />
        <SocialGlyph social="tiktok" handle="unitymultiplayer" />
        <SocialGlyph social="bluesky" handle="unitymulti.bsky.social" />
        <SocialGlyph social="discord" handle="https://discord.gg/ECGejX4WFA" />
        <SocialGlyph social="github" handle="UnityMultiplayer" />
        <SocialGlyph social="devOS Status" handle="https://status.devos.one/" icon="https://raw.githubusercontent.com/upptime/upptime/master/assets/upptime-icon.svg" />
      </div>
    </div>

    <div class="font-light text-sm py-2">
      Unity Multiplayer is not an official Minecraft service and is not affiliated, associated with, or approved by Mojang Studios or Microsoft.
    </div>
  </div>
</template>

<script setup lang="ts">
  import SocialGlyph from "~/components/members/SocialGlyph.vue";
</script>