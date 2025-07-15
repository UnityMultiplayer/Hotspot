export default function (member: Record<string, any>, social: string): string {
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
        case 'github':
            return `https://github.com/${socialHandle}`;
        case 'instagram':
            return `https://instagram.com/${socialHandle}`;
        default:
            return socialHandle;
    }
}