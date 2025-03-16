FROM node:22-alpine AS build
COPY . /app
WORKDIR /app

RUN npm install
RUN npm run build

FROM gcr.io/distroless/nodejs22-debian12
COPY --from=build /app/.output /app
WORKDIR /app

ENV TWITCH_CLIENT_ID = ""
ENV TWITCH_CLIENT_SECRET = ""

EXPOSE 3000

CMD ["server/index.mjs"]