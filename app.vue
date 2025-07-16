<template>
    <div class="h-screen">
        <Navbar />
        <NuxtPage />
        <FooterBar />
        <!--<div class="bg2 h-screen w-screen fixed top-0 left-0 -z-50"></div>-->
    </div>
</template>

<style lang="scss">
  /* I don't like this. ~Storm */
  @import url('https://gists.rawgit.com/mfd/f3d96ec7f0e8f034cc22ea73b3797b59/raw/856f1dbb8d807aabceb80b6d4f94b464df461b3e/gotham.css');
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');

  @theme {
    --font-sans: Manrope, GothamPro, Roboto, 'Segoe UI', sans-serif;
  }

  body {
    //text-shadow: 1px 1px 1px var(--text-shadow);

    background-color: var(--bg-main);
    color: var(--text-main);
    //font-family: GothamPro, Roboto, 'Segoe UI', sans-serif;
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
    --bg-checker-color1: #f7f6f2;
    --bg-checker-color2: #e8eaeb;

    --bg-main: #ecf9fb;
    --bg-gradient-color1: #0059FF7F;
    --bg-gradient-color2: #00CCFF7F;

    --text-title: #24292f;
    --text-main: #6e7781;
    --text-buttons: #e3e8f0;
    --text-live: #FF4848;
  }

  /* Dark mode */
  @media (prefers-color-scheme: dark) {
    :root {
      --bg-checker-color1: #181a1f;
      --bg-checker-color2: #16181c;

      --bg-main: #16181c;
      --bg-gradient-color1: #0059FF7F;
      --bg-gradient-color2: #00CCFF7F;

      --text-title: #ecf9fb;
      --text-main: #b0bac5;
      --text-buttons: #26292f;
    }
  }

  .unity-title {
    color: var(--text-title);
  }

  .unity-bg {
    background-color: var(--bg-main);
  }

  .unity-button {
    background-color: var(--text-buttons);
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