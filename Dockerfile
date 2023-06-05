FROM node:14.17.6

WORKDIR /uprodit-challenge

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

