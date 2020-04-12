FROM node:12.16.2-alpine as build

WORKDIR /usr/src
COPY ./package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:12.16.2-alpine as deploy

ENV HOST=0.0.0.0 NODE_ENV=production

WORKDIR /usr/src

COPY --from=build /usr/src/package*.json ./
RUN npm install --production

COPY --from=build /usr/src/build ./

EXPOSE 80

CMD [ "node", "index.js" ]