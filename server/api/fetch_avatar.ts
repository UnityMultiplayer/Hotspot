import TwitchAuth from "~/server/utils/TwitchAuth";
import TwitchRest from "~/server/utils/TwitchRest";

const auth = new TwitchAuth()

export default defineEventHandler(async event => {
    const query = getQuery(event)

    if (query['id'] == null) {
        event.node.res.statusCode = 400
        return "Invalid ID"
    }

    const url = `https://api.twitch.tv/helix/users?login=${query.id}`
    const response = await TwitchRest.get(url);

    if (!!response) {
        if (response.data.length == 0) {
            event.node.res.statusCode = 400
            return `Twitch did not return anything for "${query.id}"`
        }

        event.node.res.statusCode = 200
        return response.data[0].profile_image_url
    }
})
