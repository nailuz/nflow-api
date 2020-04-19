FROM node:12.16.2-alpine

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install && npm cache clean --force

COPY . .

EXPOSE 3000
