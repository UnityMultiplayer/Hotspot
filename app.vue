<template>
    <div class="h-screen">
        <Navbar />
        <NuxtPage />
        <FooterComp />
        <!--<div class="bg2 h-screen w-screen fixed top-0 left-0 -z-50"></div>-->
    </div>
</template>

<style lang="css">
  /* I don't like this. ~Storm */
  @import url('https://gists.rawgit.com/mfd/f3d96ec7f0e8f034cc22ea73b3797b59/raw/856f1dbb8d807aabceb80b6d4f94b464df461b3e/gotham.css');

  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  body {
    -webkit-user-select: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    overflow-y: auto;
    overflow-x: hidden;

    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
  }

  main {
    overflow-y: auto;
    font-family: GothamPro, 'Segoe UI', sans-serif;
  }

  img {
    -webkit-user-select: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
  }

  *::-webkit-scrollbar {
    width: 4px;
  }

  *::-webkit-scrollbar-track {
    background-color: #292929;
    border-radius: 25px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #7a7a7a;
    border-radius: 100px;
  }

  .hidden {
    display: none !important;
  }

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

  body {
    /*background: rgb(236, 236, 236);*/
    /*background-image: linear-gradient(45deg, var(--bg-checker-color1) 25%, var(--bg-checker-color2) 25%),
        linear-gradient(-45deg, var(--bg-checker-color1) 25%, var(--bg-checker-color2) 25%),
        linear-gradient(45deg, var(--bg-checker-color2) 75%, var(--bg-checker-color1) 75%),
        linear-gradient(-45deg, var(--bg-checker-color2) 75%, var(--bg-checker-color1) 75%);*/
    background: 50% / 50px 50px;
    background-image: repeating-conic-gradient(var(--bg-checker-color1) 0% 25%, var(--bg-checker-color2) 0% 50%);
    color: var(--text-main);
    font-family: GothamPro, Roboto, 'Segoe UI', sans-serif;
  }
</style>

<style scoped>
    .bg2 {
        background-image: linear-gradient(45deg, var(--bg-gradient-color1), var(--bg-gradient-color2));
    }
</style>

<script setup lang="ts">
  import Navbar from "~/components/navbar/Navbar.vue";

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