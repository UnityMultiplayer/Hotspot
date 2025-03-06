<template>
    <main class="w-full py-8">
        <Title>Home</Title>

        <h2 class="text-center text-5xl pb-3 font-semibold">Members</h2>
        
        <div class="py-3">
            <h3 class="text-center text-4xl pb-3 text-[#FF4848]">● Currently Live</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 w-5/6 lg:grid-cols-4 xl:grid-cols-5 gap-1 2xl:w-3/4 px-4 mx-auto" v-if="renderLive">
                <template v-for="id in members.filter(a => (live ?? []).includes(a.id)).map(a => a.id)" :key="id">
                    <MemberCard :id="id" live="true"></MemberCard>
                </template>
            </div>
        </div>
        <div class="py-3">
            <div class="text-center text-4xl pb-3 mx-auto flex">
                <div class="flex mx-auto">
                    <img src="/img/icons/zzz.svg" class="h-12">&nbsp;&nbsp;Currently Offline
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 w-5/6 lg:grid-cols-4 xl:grid-cols-5 gap-1 2xl:w-3/4 px-4 mx-auto" v-if="renderLive">
                <template v-for="id in members.map(a => a.id)" :key="id">
                    <MemberCard :id="id"></MemberCard>
                </template>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
    import members from '~/assets/members.json';

    export default {
        async mounted() {
            this.live = [];
            //@ts-ignore
            this.live = (await useFetch('/api/check_live')).data ?? [];
            this.renderLive = true;

            //@ts-ignore
            this.timer = setInterval(async () => {
                //@ts-ignore
                this.live = (await useFetch('/api/check_live')).data ?? [];
                this.renderLive = false;
                await this.$nextTick();
                this.renderLive = true;
            }, 3 * 60 * 1000);
        },
        unmounted() {
            //@ts-ignore
            clearInterval(this.timer);
        },
        data() {
            return {
                members: members.filter(a => a.faction != 'unity_team'),
                live: [''],
                renderLive: false,
                timer: null
            };
        }
    }
</script>