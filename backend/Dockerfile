FROM node:12.16-alpine3.10

WORKDIR /backend

COPY package.json /backend

RUN npm install

COPY . /backend

EXPOSE 8000

CMD [ "node", "App.js" ]
