FROM node:17-alpine

RUN apk update && apk upgrade
RUN apk add chromium 

RUN mkdir /app
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn

COPY . .
ENTRYPOINT ["yarn", "start"]

ARG PORT=8080
ARG SITE
ARG REPORT_HOST
ARG FLAG=ICED{SVGed_1s_4w3s0m3}
