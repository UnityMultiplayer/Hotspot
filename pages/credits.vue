<template>
  <main class="w-full py-8 text-center">
    <Title>Credits</Title>

    <div>
      <h3 class="text-4xl font-semibold py-4">Project Leads</h3>
      <MembersSection>
        <MemberCard id="theoclouds" :is-live="true" />
        <MemberCard id="cypherag" :is-live="true" />
        <MemberCard id="adri4ns_" :is-live="true" />
      </MembersSection>
    </div>
    <div>
      <h3 class="text-4xl font-semibold py-4">Development Branch</h3>
      <MembersSection>
        <MemberCard id="bluspring" :is-live="true" />
        <MemberCard id="thefox580" :is-live="true" />
        <memberCard id="cephaloncosmic" :is-live="true" />
      </MembersSection>
    </div>
    <div>
      <h3 class="text-4xl font-semibold py-4">Creative Branch</h3>
      <MembersSection>
        <MemberCard id="zanjoe" :is-live="true" />
        <MemberCard id="falcaograve" :is-live="true" />
        <MemberCard id="rats_yknow" :is-live="true" />
        <MemberCard id="skylarexe" :is-live="true" />
        <MemberCard id="connerhawk" :is-live="true" />
        <MemberCard id="alychemist" :is-live="true" />
        <MemberCard id="skribbleshark" :is-live="true" />
      </MembersSection>
    </div>
    <div>
      <h3 class="text-4xl font-semibold py-4">Acting Branch</h3>
      <MembersSection>
        <MemberCard id="songly" :is-live="true" />
        <MemberCard id="harson_ist" :is-live="true" />
        <MemberCard id="cher0p" :is-live="true" />
        <MemberCard id="swaggyleilany" :is-live="true" />
        <MemberCard id="insaneorbitzz" :is-live="true" />
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

definePageMeta({
    name: 'Credits'
});
</script>