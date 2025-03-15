<template>
    <div :class="`w-2/3 md:w-1/3 lg:w-1/4 2xl:w-1/5 p-4 flex unity-button rounded-2xl border-[1px] ${!!live ? 'saturate-100' : 'saturate-[25%]'} ${!!live ? 'brightness-100' : 'brightness-[80%]'} transition-all hover:saturate-100 hover:brightness-[110%]`" :style="borderStyle" :title="member.id">
        <img class="rounded-full h-12" :src="`/img/creators/${member.id}.png`">
        <p class="px-4">
            <span :style="'color: ' + faction.color" class="font-medium">{{ member.name }}</span>
            &nbsp;
            <span class="font-light text-sm">{{ member.pronouns }}</span>
            <br>
            <span class="text-sm">{{ member.role }}</span>

            <div class="flex pt-2">
                <!-- @vue-ignore -->
                <template v-for="social in Object.keys(member.socials)" :key="social">
                    <!-- @vue-ignore -->
                    <a :href="handleSocial(social)" v-if="member.socials[social] != ''" class="hover:brightness-125" :title="getSocialName(social)"><img :src="`/img/icons/${social}.svg`" :alt="social" class="h-5 px-1"></a>
                </template>
            </div>
        </p>
    </div>
</template>

<script lang="ts">
    import members from '~/assets/members.json';
    import factions from '~/assets/factions.json';

    export default {
        props: [
            'id',
            'live'
        ],
        data() {
            const member = members.find(a => a.id == this.id)!;
            // @ts-ignore
            const faction = factions[member.faction]!;

            return {
                member,
                faction,
                handleSocial(social: string): string {
                    //@ts-ignore
                    const socialHandle: string = member.socials[social];

                    switch (social) {
                        case 'twitter': 
                            return `https://twitter.com/${socialHandle}`;
                        case 'bluesky':
                            return `https://bsky.app/profile/${socialHandle}`;
                        case 'youtube':
                            return `https://youtube.com/${socialHandle}`;
                        case 'twitch':
                            return `https://twitch.tv/${socialHandle}`;
                        default:
                            return socialHandle;
                    }
                },
                getSocialName(social: string): string {
                    switch (social) {
                        case 'twitter': return 'Twitter / X';
                        case 'bluesky': return 'BlueSky';
                        case 'youtube': return 'YouTube';
                        case 'twitch': return 'Twitch'
                        case 'website': return 'Website'
                        default: return social;
                    }
                },
                //borderStyle: !!this.live ? `background: linear-gradient(var(--text-buttons), var(--text-buttons)) padding-box, linear-gradient(to right, var(--bg-live) 0%, ${faction.color} 70%) border-box; border-width: 1px; border-style: solid; border-color: transparent;` : `border-color: ${faction.color}`
                borderStyle: `border-color: ${faction.color};`
            };
        }
    }
</script>

<style scoped>

</style>