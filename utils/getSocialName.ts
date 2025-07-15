export default function (social: string): string {
    switch (social) {
        case 'twitter': return 'Twitter / X';
        case 'bluesky': return 'BlueSky';
        case 'youtube': return 'YouTube';
        case 'twitch': return 'Twitch'
        case 'website': return 'Website'
        case 'github': return 'GitHub'
        case 'instagram': return 'Instagram'
        default: return social;
    }
}