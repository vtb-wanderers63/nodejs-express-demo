FROM cgr.dev/chainguard/node:latest
ENV NODE_ENV=production

WORKDIR /app

COPY package.json .
RUN npm install --ignore-scripts
COPY ./src ./src


CMD ["npm", "run", "start"]
