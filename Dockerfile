FROM node

WORKDIR /blogapp

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "server.js"]