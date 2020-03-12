FROM node:latest

WORKDIR /backend

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn

COPY . .