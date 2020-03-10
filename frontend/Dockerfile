FROM node:latest

WORKDIR /frontend

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn

COPY . .