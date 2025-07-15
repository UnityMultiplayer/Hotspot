<template>
  <main class="w-full py-8 text-center">
    <Title>Credits</Title>

    <div>
      <h3 class="text-4xl font-semibold py-4">Project Managers</h3>
      <MembersSection>
        <MemberCard id="theoclouds" />
        <MemberCard id="adri4ns_" />
        <MemberCard id="cypherag" />
      </MembersSection>
    </div>
    <div>
      <h3 class="text-4xl font-semibold py-4">Actors</h3>
      <MembersSection>
        <MemberCard id="cher0p" />
        <MemberCard id="harson_ist" />
        <MemberCard id="songly" />
        <MemberCard id="swaggyleilany" />
      </MembersSection>
    </div>
    <div>
      <h3 class="text-4xl font-semibold py-4">Developers</h3>
      <MembersSection>
        <MemberCard id="bluspring" />
        <MemberCard id="thefox580" />
        <memberCard id="cephaloncosmic" />
      </MembersSection>
    </div>
    <div>
      <h3 class="text-4xl font-semibold py-4">Media</h3>
      <MembersSection>
        <MemberCard id="zanjoe" />
        <MemberCard id="falcaograve" />
        <MemberCard id="alychemist" />
        <MemberCard id="skribbleshark" />
        <MemberCard id="rats_yknow"/>
        <MemberCard id="connerhawk" />
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
        Unity Hotspot hosted on <a href="https://devos.one">devOS</a>, with help from <a href="https://storm.artrinix.xyz">CephalonCosmic</a>.
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