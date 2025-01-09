FROM cgr.dev/chainguard/node:latest-dev
ENV NODE_ENV=production

WORKDIR /app

COPY --chown=node:node package.json .
ADD ./src ./src
RUN npm install --ignore-scripts


ENTRYPOINT ["npm","run", "start"]
