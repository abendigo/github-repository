FROM node:16-alpine AS build

WORKDIR /src

copy package*.json .

RUN npm ci

COPY . .

# Bundle app source
RUN npm run build

# get rid of any development dependencies as they are no longer needed past this point.
RUN npm prune --production

# Thats it for the build side. Now, the deployable parts

FROM node:16-alpine
RUN apk add git

ENV PORT=3000
EXPOSE $PORT

WORKDIR /usr/src/service

COPY --from=build /src/node_modules .
COPY --from=build /src/start.js .
COPY --from=build /src/static .
COPY --from=build /src/build .

USER node
CMD ["node", "start.js"]
