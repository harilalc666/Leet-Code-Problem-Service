FROM node

WORKDIR /developer/nodejs/leet-code-app

COPY . .

RUN npm ci

CMD ["npm", "run", "dev"];