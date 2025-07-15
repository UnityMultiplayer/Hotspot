const description = 'Unity Multiplayer is a multilingual factions Minecraft server for creators, which also features the first free and public live translation mod UnityTranslate.';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: false },
    modules: ['@nuxtjs/tailwindcss'],
    css: [
    ],
    app: {
        head: {
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0' },
                { rel: 'icon', href: '/icon.svg' }
            ],
            meta: [
                { name: 'description', content: description },
                { name: 'og:type', content: 'website' },
                { name: 'og:description', content: description },
                { name: 'og:url', content: 'https://unitymultiplayer.online' },
                { name: 'og:image', content: 'https://unitymultiplayer.online/icon.svg' },
                { name: 'twitter:description', content: description },
                { name: 'twitter:url', content: 'https://unitymultiplayer.online' },
                { name: 'twitter:card', content: 'summary' },
                { name: 'twitter:image', content: 'https://unitymultiplayer.online/icon.svg' },
            ]
        },
    },
});
