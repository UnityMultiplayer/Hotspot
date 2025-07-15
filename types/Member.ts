import type {Socials} from "~/types/Socials";

export type Member = {
    id: string,
    name: string,
    platform: 'twitch' | 'youtube',
    faction: 'emberhold' | 'suncrest' | 'fernfall' | 'unity_team',
    region?: string,
    pronouns: string,
    socials: Socials,
    role?: string,
}