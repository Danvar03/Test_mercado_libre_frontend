FROM node:22-alpine AS builder
WORKDIR /deployments

COPY package.json yarn.lock ./
COPY . .

RUN yarn install

FROM node:22-alpine

USER root
COPY --chown=1001:root --from=builder /deployments/ /deployments/

WORKDIR /deployments

ENV NODE_ENV=test
ENV PORT=5000
ENV NEXT_TELEMETRY_DISABLED=1

EXPOSE 5000
CMD ["yarn", "start"]
