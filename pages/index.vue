<template>
    <main class="w-full py-8">
        <Title>Home</Title>

        <h2 class="text-center text-5xl pb-3 font-semibold">Members</h2>
        
        <div class="py-3">
            <h3 class="text-center text-4xl pb-3 text-[#FF4848]">
                <span class="material-symbols-outlined">circle</span> Currently Live
            </h3>
            <div class="gap-1 flex flex-wrap justify-center 2xl:w-5/6 px-4 mx-auto text-left" v-if="renderLive">
                <template v-for="id in members.filter(a => (live ?? []).includes(a.id)).map(a => a.id)" :key="id">
                    <MemberCard :id="id" live="true"></MemberCard>
                </template>
            </div>
        </div>
        <div class="py-3">
            <h3 class="text-center text-4xl pb-3">
                <span class="material-symbols-outlined">bedtime</span> Currently Offline
            </h3>
            <div class="gap-1 flex flex-wrap justify-center 2xl:w-5/6 px-4 mx-auto text-left" v-if="renderLive">
                <template v-for="id in members.filter(a => !(live ?? []).includes(a.id)).map(a => a.id)" :key="id">
                    <MemberCard :id="id"></MemberCard>
                </template>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
    import membersData from '~/assets/members.json';

    export default {
        async mounted() {
            this.live = [];
            //@ts-ignore
            this.live = (await $fetch('/api/check_live')) ?? [];
            this.renderLive = false;
            await this.$nextTick();
            this.renderLive = true;

            //@ts-ignore
            this.timer = setInterval(async () => {
                this.live = (await $fetch('/api/check_live')) ?? [];
                this.renderLive = false;
                await this.$nextTick();
                this.renderLive = true;
            }, 1 * 60 * 1000);
        },
        unmounted() {
            //@ts-ignore
            clearInterval(this.timer);
        },
        data() {
            return {
                members: membersData.filter(a => a.faction != 'unity_team'),
                live: [''],
                renderLive: false,
                timer: null
            };
        }
    }
</script>

<script setup lang="ts">
definePageMeta({
    name: 'Home'
});
</script>