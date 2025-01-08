FROM cgr.dev/chainguard/node:latest
ENV NODE_ENV=production

WORKDIR /app

COPY package.json .
COPY ./src ./src
RUN npm install

CMD ["npm", "run", "start"]
