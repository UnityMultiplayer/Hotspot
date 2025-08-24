<template>
    <div class="h-screen">
        <Navbar />
        <NuxtPage />
        <FooterBar />
        <!--<div class="bg2 h-screen w-screen fixed top-0 left-0 -z-50"></div>-->
    </div>
</template>

<style lang="scss">
  body {
    background-color: var(--bg-main);
    color: var(--text-main);
  }

  main {
    overflow-y: auto;
  }

  img {
    -webkit-user-select: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
  }

  *::-webkit-scrollbar {
    width: 0.6rem;
  }

  *::-webkit-scrollbar-track {
    background-color: var(--text-buttons);
    border-radius: 25px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--text-title);
    border-radius: 25px 0 0 25px;
  }

  /* Light mode */
  :root {
    --bg-main: var(-color-zinc-50);

    --text-title: var(--color-zinc-950);
    --text-shadow: rgba(255, 255, 255, 0.5);
    --text-main: var(--color-zinc-900);
    --button-background: var(--color-zinc-100);
    --text-live: var(--color-rose-500);
  }

  /* Dark mode */
  @media (prefers-color-scheme: dark) {
    :root {
      --bg-main: var(--color-zinc-900);

      --text-title: var(--color-zinc-50);
      --text-shadow: rgba(0, 0, 0, 0.8);
      --text-main: var(--color-zinc-100);
      --button-background: var(--color-zinc-950);
      --text-live: var(--color-rose-400);
    }
  }

  .unity-title {
    color: var(--text-title);
  }

  .unity-bg {
    background-color: var(--bg-main);
  }

  .unity-button {
    background-color: var(--button-background);
  }
</style>

<script setup lang="ts">
  import Navbar from "~/components/navbar/Navbar.vue";
  import FooterBar from "~/components/FooterBar.vue";

  import '~/assets/fonts/Montserrat-Italic.ttf'
  import '~/assets/fonts/Montserrat.ttf'
  import '~/assets/fonts/Oswald.ttf'

  const route = useRoute();

  useHead({
    titleTemplate: '%s - Unity Multiplayer',
    meta: [
      {
        property: 'og:title',
        content: `${route.meta.name} - Unity Multiplayer`
      },
      {
        property: 'twitter:title',
        content: `${route.meta.name} - Unity Multiplayer`
      },
      {
        property: 'title',
        content: `${route.meta.name} - Unity Multiplayer`
      }
    ]
  });
</script>