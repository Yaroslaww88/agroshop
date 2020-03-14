FROM node:12.16-alpine3.10

WORKDIR /frontend

COPY package.json /frontend/package.json

RUN npm install

COPY . /frontend

EXPOSE 3000

CMD [ "npm", "run", "build" ]
