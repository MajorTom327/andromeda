FROM geoffreybooth/meteor-base as base
ENV METEOR_ALLOW_SUPERUSER 1
WORKDIR /service

ARG user=meteor
ARG group=meteor
ARG uid=1000
ARG gid=1000

RUN groupadd -g ${gid} ${group}
RUN useradd -u ${uid} -g ${group} -s /bin/sh -m ${user}

USER ${uid}:${gid}

COPY . .

# Packages
FROM base AS packages
USER ${uid}:${gid}
WORKDIR /service

RUN meteor npm install

# Build
FROM base AS build
WORKDIR /service
USER ${uid}:${gid}

COPY --from=packages /service/node_modules ./node_modules

RUN meteor build --architecture os.linux.x86_64 --directory /build

# Production
FROM node:latest AS production
USER ${uid}:${gid}
WORKDIR /service

COPY --from=build /build .
RUN npm install --only=production

ENV ROOT_URL=http://localhost:3000
ENV MONGO_URL=mongodb://localhost:27017/andromeda
ENV METEOR_SETTINGS={"user":{"username":"majortom327","email":"me@valentin-thomas.com","password":"password"}}

ENTRYPOINT ["node", "index.js"]