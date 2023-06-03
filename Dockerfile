FROM node:14

WORKDIR /uprodit-challenge

COPY package.json .

RUN nom install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

