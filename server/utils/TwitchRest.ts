import axios from 'axios';
import TwitchAuth from "./TwitchAuth";

const sleep = (ms: number) => { return new Promise(resolve => setTimeout(resolve, ms)); }

export interface RateLimitInfo {
    remaining: number;
    limit: number;
    reset: number;
}

export default class TwitchRest {
    private static auth = new TwitchAuth();

    /**
     * @type {{
     *  remaining: number,
     *  limit: number,
     *  reset: number
     * }}
     */
    static rateLimit: RateLimitInfo | null = null;

    static async handleRateLimit() {
        if (TwitchRest.rateLimit && TwitchRest.rateLimit.remaining <= 0 && TwitchRest.rateLimit.reset > Date.now()) {
            await sleep(TwitchRest.rateLimit.reset - Date.now());
        }

        return true;
    }

    static async get(url: string) {
        await TwitchRest.handleRateLimit();

        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${await TwitchRest.auth.getToken()}`,
                'Client-Id': TwitchAuth.clientId
            }
        });

        const data = response.data;

        TwitchRest.rateLimit = {
            remaining: response.headers['ratelimit-remaining'],
            limit: response.headers['ratelimit-limit'],
            reset: response.headers['ratelimit-reset']
        };
        
        return data;
    }

    static async post(url: string, body: any) {
        await TwitchRest.handleRateLimit();

        const response = await axios.post(url, body, {
            headers: {
                Authorization: `Bearer ${await TwitchRest.auth.getToken()}`,
                'Client-Id': TwitchAuth.clientId
            }
        });

        const data = response.data;

        TwitchRest.rateLimit = {
            remaining: response.headers['ratelimit-remaining'],
            limit: response.headers['ratelimit-limit'],
            reset: response.headers['ratelimit-reset']
        };

        return data;
    }
}