FROM node:17-alpine

RUN apk update && apk upgrade
RUN apk add chromium 

RUN mkdir /app
WORKDIR /app
COPY package.json yarn.lock /app/


RUN yarn

EXPOSE 3000

COPY . .
ENTRYPOINT ["yarn", "start"]