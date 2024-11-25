FROM node:22-alpine AS builder
WORKDIR /deployments

COPY package.json yarn.lock ./
COPY . .

RUN yarn install
RUN yarn build

FROM node:22-alpine

USER root
COPY --chown=1001:root --from=builder /deployments/ /deployments/

WORKDIR /deployments

ENV NODE_ENV=test
ENV PORT=4000
ENV NEXT_TELEMETRY_DISABLED=1

EXPOSE 4000
CMD ["yarn", "start"]
