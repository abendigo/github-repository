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

RUN mkdir repos && chown 1000:1000 repos

COPY --from=build /src/node_modules node_modules
COPY --from=build /src/static static
COPY --from=build /src/build build

COPY --from=build /src/package.json .
COPY --from=build /src/start.js .

COPY --from=build /src/wait-for.sh repos

USER node
CMD ["node", "start.js"]
# CMD ["node", "build"]
