import type {Socials} from "~/types/Socials";

export type Member = {
    id: string,
    name: string,
    platform: 'twitch' | 'youtube',
    faction: 'emberhold' | 'suncrest' | 'fernfall' | 'unity_team:lead'| 'unity_team:development'| 'unity_team:creative'| 'unity_team:acting',
    region?: string,
    pronouns: string,
    socials: Socials,
    role?: string,
}