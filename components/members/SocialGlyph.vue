<script setup lang="ts">
  defineProps<{ social: string, handle?: string, icon?: string }>();

  function formatSocialHandle(social: string, handle: string): string {
    switch (social) {
      case 'twitter':
        return `https://twitter.com/${handle}`;
      case 'bluesky':
        return `https://bsky.app/profile/${handle}`;
      case 'youtube':
        return `https://youtube.com/${handle}`;
      case 'twitch':
        return `https://twitch.tv/${handle}`;
      case 'github':
        return `https://github.com/${handle}`;
      case 'instagram':
        return `https://instagram.com/${handle}`;
      case 'tiktok':
        return `https://tiktok.com/@${handle}`;
      default:
        return handle;
    }
  }

  function getSocialName(social: string): string {
    switch (social) {
      case 'twitter': return 'Twitter / X';
      case 'bluesky': return 'BlueSky';
      case 'youtube': return 'YouTube';
      case 'twitch': return 'Twitch'
      case 'website': return 'Website'
      case 'github': return 'GitHub'
      case 'instagram': return 'Instagram'
      case 'tiktok': return 'TikTok'
      case 'discord': return 'Discord'
      default: return social;
    }
  }
</script>

<template>
  <NuxtLink :to="handle ? formatSocialHandle(social, handle) : `/`" v-if="handle != ''" class="hover:brightness-125" :title="getSocialName(social)">
    <img :src="icon ? icon : `/img/icons/${social}.svg`" :alt="social" class="h-5 px-1">
  </NuxtLink>
</template>