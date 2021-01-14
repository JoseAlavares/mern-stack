FROM node:12.16.1

LABEL maintainer="Jose Francisco Alvarez Valdez<alvaresvaldes89@outoolook.es>"

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

USER root

RUN npm install -g pm2

EXPOSE 3001

CMD ["pm2-runtime", "index.js"]