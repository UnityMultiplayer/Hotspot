import fs from 'fs';
import TwitchAuth from '../utils/TwitchAuth';
import TwitchRest from '../utils/TwitchRest';

const auth = new TwitchAuth();

let live: string[] = [];
let lastCheck = -1;

async function check() {
    const members = JSON.parse(fs.readFileSync('assets/members.json').toString());

    if (Date.now() - lastCheck < 1000 * 60 * 2)
        return; // Ratelimit this

    try {
        // @ts-ignore
        const url = `https://api.twitch.tv/helix/streams?user_login=${members.filter(c => !!c.socials.twitch).map(c => c.socials.twitch).join('&user_login=')}`;
        const data = await TwitchRest.get(url);

        let livePeople: string[] = [];

        if (!!data) {
            // @ts-ignore
            const currentLive = data.data.filter(d => d.type == 'live');
            
            if (currentLive.length > 0) {
                for (const stream of currentLive) {
                    // @ts-ignore
                    const member = members.find(m => m.socials.twitch == stream.user_login);

                    if (!!member && !live.includes(member.id)) {
                        live.push(member.id);
                        livePeople.push(member.id);
                    } else if (!!member && live.includes(member.id)) {
                        livePeople.push(member.id);
                    }
                }
            }

            live = live.filter(a => livePeople.includes(a));
            lastCheck = Date.now();
        }
    } catch (e) {
        console.error(`Failed to get check live information!`, e);
    }
}

check();
setInterval(check, 1000 * 60 * 5);

export default defineEventHandler((event) => {
    return live;
});