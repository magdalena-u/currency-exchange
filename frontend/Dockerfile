FROM node:latest

WORKDIR /frontend

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn

COPY . .