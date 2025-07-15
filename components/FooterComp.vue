<template>
    <div class="w-full h-16 text-center text-xl">
        <div class="font-light text-center py-2">
            <a href="https://github.com/UnityMultiplayer/Hotspot" class="hover:underline hover:brightness-125">Unity Hotspot</a>
            <a>&nbsp;&nbsp;|&nbsp;&nbsp;</a>
            <a>A Unity Production</a>
        </div>
        
        <div class="mx-auto flex py-2">
            <div class="flex mx-auto">
                <a href="https://twitter.com/unprodprojects" class="hover:brightness-125" title="Twitter">
                    <img :src="Twitter" alt="Twitter" class="h-5 px-1">
                </a>
                <a href="https://www.tiktok.com/@unitymultiplayer" class="hover:brightness-125" title="TikTok">
                    <img :src="TikTok" alt="TikTok" class="h-5 px-1">
                </a>
                <a href="https://bsky.app/profile/unitymulti.bsky.social" class="hover:brightness-125" title="BlueSky">
                    <img :src="BlueSky" alt="BlueSky" class="h-5 px-1">
                </a>
                <a href="https://discord.gg/ECGejX4WFA" class="hover:brightness-125" title="Discord">
                    <img :src="Discord" alt="Discord" class="h-5 px-1">
                </a>
                <a href="https://github.com/UnityMultiplayer" class="hover:brightness-125" title="GitHub">
                    <img :src="GitHub" alt="GitHub" class="h-5 px-1">
                </a>
            </div>
        </div>

        <div class="font-light text-sm py-2">
            Unity Multiplayer is not an official Minecraft service and is not affiliated, associated with, or approved by Mojang Studios or Microsoft.
        </div>
    </div>
</template>

<script setup lang="ts">
import Twitter from '~/public/img/icons/official/twitter.svg'
import TikTok from '~/public/img/icons/official/tiktok.svg'
import BlueSky from '~/public/img/icons/official/bluesky.svg'
import Discord from '~/public/img/icons/official/discord.svg'
import GitHub from '~/public/img/icons/official/github.svg'
</script>