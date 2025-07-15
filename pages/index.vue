<template>
    <main class="w-full py-8">
        <Title>Home</Title>

        <h2 class="text-center text-5xl pb-3 font-semibold">Member</h2>
        
        <div class="py-3">
            <h3 class="text-center text-4xl pb-3 text-[#FF4848]">
                <span class="material-symbols-outlined">circle</span> Currently Live
            </h3>
            <MembersSection v-if="status !== 'pending'">
                <template v-for="id in members.filter(a => (live ?? []).includes(a.id)).map(a => a.id)" :key="id">
                    <MemberCard :id="id" :live="true"></MemberCard>
                </template>
            </MembersSection>
        </div>
        <div class="py-3">
            <h3 class="text-center text-4xl pb-3">
                <span class="material-symbols-outlined">bedtime</span> Currently Offline
            </h3>
            <MembersSection v-if="status !== 'pending'">
                <template v-for="id in members.filter(a => !(live ?? []).includes(a.id)).map(a => a.id)" :key="id">
                    <MemberCard :id="id"></MemberCard>
                </template>
            </MembersSection>
        </div>
    </main>
</template>

<script setup lang="ts">
import MemberCard from "~/components/members/MemberCard.vue";

import membersData from '~/assets/members.json';

definePageMeta({
    name: 'Home'
});

const members = ref(membersData.filter(a => a.faction != 'unity_team'))
const { status, data: check_live } = await useLazyFetch('/api/check_live')
const live = ref(check_live)

watch(check_live, (newLive) => {
  live.value = newLive
})
</script>