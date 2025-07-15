export default function (social: string): string {
    switch (social) {
        case 'twitter': return 'Twitter / X';
        case 'bluesky': return 'BlueSky';
        case 'youtube': return 'YouTube';
        case 'twitch': return 'Twitch'
        case 'website': return 'Website'
        default: return social;
    }
}