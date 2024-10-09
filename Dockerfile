FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm i -g @nestjs/cli

RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "start:prod"]
