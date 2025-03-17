<template>
    <main class="w-full py-8 text-center">
        <Title>Credits</Title>

        <div>
            <h3 class="text-4xl font-semibold py-4">Project Managers</h3>
            <div class="gap-1 flex flex-wrap justify-center 2xl:w-3/4 px-4 mx-auto text-left">
                <MemberCard id="theoclouds" live="false" />
                <MemberCard id="adri4ns_" live="false" />
                <MemberCard id="cypherag" live="false" />
            </div>
        </div>
        <div>
            <h3 class="text-4xl font-semibold py-4">Actors</h3>
            <div class="gap-1 flex flex-wrap justify-center 2xl:w-3/4 px-4 mx-auto text-left">
                <MemberCard id="adri4ns_" live="false" />
                <MemberCard id="cypherag" live="false" />
                <MemberCard id="cher0p" live="false" />
                <MemberCard id="harson_ist" live="false" />
                <MemberCard id="songly" live="false" />
                <MemberCard id="swaggyleilany" live="false" />
            </div>
        </div>
        <div>
            <h3 class="text-4xl font-semibold py-4">Developers</h3>
            <div class="gap-1 flex flex-wrap justify-center 2xl:w-3/4 px-4 mx-auto text-left">
                <MemberCard id="bluspring" live="false" />
                <MemberCard id="thefox580" live="false" />
            </div>
        </div>
        <div>
            <h3 class="text-4xl font-semibold py-4">Media</h3>
            <div class="gap-1 flex flex-wrap justify-center 2xl:w-3/4 px-4 mx-auto text-left">
                <MemberCard id="zanjoe" live="false" />
                <MemberCard id="falcaograve" live="false" />
                <MemberCard id="alychemist" live="false" />
                <MemberCard id="skribbleshark" live="false" />
                <MemberCard id="rats_yknow" live="false" />
                <MemberCard id="connerhawk" live="false" />
            </div>
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
definePageMeta({
    name: 'Credits'
});
</script>