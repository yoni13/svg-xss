FROM node:17-alpine
RUN echo "https://mirror.twds.com.tw/alpine/v3.10/main" > /etc/apk/repositories ; \
    echo "https://mirror.twds.com.tw/alpine/v3.10/community" >> /etc/apk/repositories ;
    
RUN apk update && apk upgrade
RUN apk add chromium 

RUN mkdir /app
WORKDIR /app
COPY package.json yarn.lock /app/


RUN yarn

EXPOSE 3000

COPY . .
ENTRYPOINT ["yarn", "start"]
