import axios from 'axios';
import fs from 'fs';
import { clearInterval } from 'timers';

export interface TokenData {
    accessToken: string;
    expiresOn: number;
}

export default class TwitchAuth {
    public static validationInterval: NodeJS.Timeout | null = null;
    public static lastValidation: number = 0;

    public static tokenData: TokenData | null = fs.existsSync(`token.json`) ? JSON.parse(fs.readFileSync('token.json').toString()) : null;
    public static clientId: string = process.env.TWITCH_CLIENT_ID!;

    async getToken(): Promise<string> {
        if (!TwitchAuth.tokenData || !(await this.validateToken())) {
            return (await this.retrieveToken());
        }

        return TwitchAuth.tokenData.accessToken;
    }

    async validateToken(force: boolean = false): Promise<boolean> {
        if ((TwitchAuth.lastValidation + (60 * 60 * 1000) < Date.now()) || force) {
            const url = `https://id.twitch.tv/oauth2/validate`;

            try {
                const response = await axios.get(url, { 
                    headers: {
                        Authorization: `OAuth ${TwitchAuth.tokenData!.accessToken}`
                    } 
                });

                TwitchAuth.lastValidation = Date.now();
                
                return response.status == 200;
            } catch (e) {
                console.error('An error occurred while validating token:', e);

                return false;
            }
        }

        if (TwitchAuth.tokenData && TwitchAuth.tokenData.expiresOn > Date.now()) {
            return true;
        }

        return false;
    }

    async retrieveToken(): Promise<string> {
        console.info('Retrieving token...');

        const url = `https://id.twitch.tv/oauth2/token`;

        const body = new URLSearchParams();
        body.append('client_id', process.env.TWITCH_CLIENT_ID!);
        body.append('client_secret', process.env.TWITCH_CLIENT_SECRET!);
        body.append('grant_type', 'client_credentials');

        const response = await axios.post(url, body);
        const data = response.data;

        TwitchAuth.tokenData = {
            accessToken: data.access_token,
            expiresOn: Date.now() + (data.expires_in * 1000)
        };

        fs.writeFileSync(`token.json`, JSON.stringify(TwitchAuth.tokenData, null, 4));

        // Need to do this to make sure the token is valid
        if (!(await this.validateToken(true))) {
            console.warn('Token is invalid, retrieving new token...');

            return await this.retrieveToken();
        }

        console.info('Token retrieved.');

        if (!!TwitchAuth.validationInterval) {
            clearInterval(TwitchAuth.validationInterval!);
        }

        TwitchAuth.validationInterval = setInterval(async () => {
            await this.validateToken();
        }, 60 * 60 * 1000);

        return TwitchAuth.tokenData.accessToken;
    }
}