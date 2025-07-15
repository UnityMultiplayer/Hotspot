<template>
  <div :class="`w-2/3 md:w-1/3 lg:w-1/4 2xl:w-1/5 p-4 flex unity-button rounded-2xl border-[1px] ${live ? 'saturate-100' : 'saturate-[25%]'} ${live ? 'brightness-100' : 'brightness-[80%]'} transition-all hover:saturate-100 hover:brightness-[110%]`" :style="borderStyle" :title="member.id">
    <img class="rounded-full h-12" :src="`/img/creators/${member.id}.webp`" :alt="member.name">
    <div class="px-4">
      <span :style="`color: ${faction.color}`" class="font-medium">{{ member.name }}</span>
      &nbsp;
      <span class="font-light text-sm">{{ member.pronouns.toLowerCase() }}</span>
      <br>
      <span class="text-sm">{{ member.role }}</span>

      <div class="flex pt-2">
        <template v-for="social in Object.keys(member.socials)" :key="social">
          <a :href="handleSocial(member, social)" v-if="member.socials[social as SocialsString] != ''" class="hover:brightness-125" :title="getSocialName(social)">
            <img :src="`/img/icons/${social}.svg`" :alt="social" class="h-5 px-1">
          </a>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  import type { Member } from "~/types/Member";
  import type { Factions } from "~/types/Factions";
  import type { SocialsString } from "~/types/Socials";

  import members from '~/assets/members.json';
  import factions from '~/assets/factions.json';

  const props = defineProps({
    id: String,
    live: Boolean,
  })

  const member = ref((members as Array<Member>).find(member => member.id == props.id)!);
  const faction = ref((factions as Factions)[member.value.faction])

  //borderStyle: !!this.live ? `background: linear-gradient(var(--text-buttons), var(--text-buttons)) padding-box, linear-gradient(to right, var(--bg-live) 0%, ${faction.color} 70%) border-box; border-width: 1px; border-style: solid; border-color: transparent;` : `border-color: ${faction.color}`
  const borderStyle = ref(`border-color: ${faction.value.color};`)

</script>