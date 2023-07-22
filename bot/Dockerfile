FROM node:17-alpine

RUN apk update && apk upgrade
RUN apk add chromium 

RUN mkdir /app
WORKDIR /app
COPY package.json yarn.lock /app/


ENV PORT=10000

ENV SITE=https://ctf1.onrender.com

ENV REPORT_HOST=ctf1.onrender.com
ENV FLAG=ICED{SVGed™}

RUN yarn

COPY . .
ENTRYPOINT ["yarn", "start"]