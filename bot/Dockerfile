FROM node:17-alpine

RUN apk update && apk upgrade
RUN apk add chromium 

RUN mkdir /app
WORKDIR /app
COPY package.json yarn.lock /app/


ARG PORT=10000

ARG SITE=ctf1.onrender.com

ARG REPORT_HOST=ctf1.onrender.com
ARG FLAG=ICED{SVGed™}

RUN yarn

COPY . .
ENTRYPOINT ["yarn", "start"]