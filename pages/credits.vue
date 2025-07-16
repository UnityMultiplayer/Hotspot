<template>
  <main class="w-full py-8 text-center">
    <Title>Credits</Title>

    <div>
      <h3 class="text-4xl font-semibold py-4">Project Leads</h3>
      <MembersSection>
        <template v-for="id in members.filter(m => m.faction.endsWith('lead')).map(m => m.id).sort(nameSort).reverse()" :key="id">
          <MemberCard :id="id" :is-live="true" />
        </template>
      </MembersSection>
    </div>
    <div>
      <h3 class="text-4xl font-semibold py-4">Development Branch</h3>
      <MembersSection>
        <template v-for="id in members.filter(m => m.faction.endsWith('development')).map(m => m.id).sort(alphabeticalSort)" :key="id">
          <MemberCard :id="id" :is-live="true" />
        </template>
      </MembersSection>
    </div>
    <div>
      <h3 class="text-4xl font-semibold py-4">Creative Branch</h3>
      <MembersSection>
        <template v-for="id in members.filter(m => m.faction.endsWith('creative')).map(m => m.id).sort(alphabeticalSort)" :key="id">
          <MemberCard :id="id" :is-live="true" />
        </template>
      </MembersSection>
    </div>
    <div>
      <h3 class="text-4xl font-semibold py-4">Acting Branch</h3>
      <MembersSection>
        <template v-for="id in members.filter(m => m.faction.endsWith('acting')).map(m => m.id).sort(alphabeticalSort)" :key="id">
          <MemberCard :id="id" :is-live="true" />
        </template>
      </MembersSection>
    </div>
    <div>
      <h3 class="text-4xl font-semibold py-4">Additional Credits</h3>
      <p class="text-lg">
        Unity S2 and S3 logos created by <a href="https://twitter.com/tiptoxxx">tiptox</a>, vectorized by <a href="https://twitter.com/Zuite_">Zuite</a>.
        <br>
        SMP Unity S1 and S2 logos created by <a href="https://twitter.com/DamienPixelated">DamienPixelated</a>.
        <br>
        Additional textures created by <a href="https://twitter.com/RPorotos">RPorotos</a>.
        <br>
        Unity Multiplayer & Hotspot is hosted on <a href="https://devos.one">devOS</a> <3.
      </p>
    </div>
    </main>
</template>
<style scoped>
a {
    text-decoration: underline;
}

a:hover {
    filter: brightness(125%);
}
</style>

<script setup lang="ts">
import MembersSection from "~/components/members/MembersSection.vue";
import MemberCard from "~/components/members/MemberCard.vue";

import membersData from '~/assets/members.json';
import alphabeticalSort from "~/utils/alphabeticalSort";

const members = ref(membersData.filter(m => m.faction.startsWith('unity_team')))

definePageMeta({
    name: 'Credits'
});
</script>