FROM node:16.18.0 as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

#second stage

FROM nginx:1.17.1-alpine

COPY --from=build-step /app/dist/repaso usr/share/nginx/html
