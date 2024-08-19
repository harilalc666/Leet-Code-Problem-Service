FROM node

WORKDIR /developer/nodejs/leet-code-app

COPY . .

RUN npm ci

CMD ["npm", "run", "dev"];

# docker buld -t leet-code  .  --> to create and build a docker image with name leet-code
# docker run -it --init -p <project-port>:<container-port> -v "${pwd}":/developer/nodejs/leet-code-app leet-code