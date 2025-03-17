<template>
    <div class="table-cell text-center align-middle font-light">
        <NuxtLink :to="to" class="text-center hover:text-[#2f7694]">
            <slot></slot>
        </NuxtLink>
    </div>
</template>
<script lang="ts">
    export default {
        props: ['to']
    }
</script>