# This image contains the graphql server
# built for the fuel-explorer
FROM node:20-slim as build
RUN corepack enable

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

WORKDIR /app
COPY . /app

RUN pnpm install --frozen-lockfile
RUN pnpm turbo:run build --filter=graphql

FROM node:20-slim as main

RUN npm i -g pm2
COPY --from=build /app/packages/graphql/dist /app

CMD ["pm2", "start", "/app/index.js", "--no-daemon"]
