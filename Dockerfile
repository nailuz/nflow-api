FROM node:13.12.0-alpine

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install && npm cache clean --force

COPY . .

EXPOSE 3000
