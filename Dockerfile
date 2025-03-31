FROM node:lts as base
WORKDIR /base
ENV NODE_ENV=production
COPY --chown=node:node ./package.json ./package-lock.json .
RUN npm ci
####
FROM node:lts-slim
WORKDIR /app
ARG UID=1001
ARG GID=1001
RUN addgroup --gid $GID nodeappgroup && adduser --uid $UID --ingroup nodeappgroup --system nodeappuser
COPY --from=base /base/node_modules /node_modules
COPY --chown=nodeappuser:nodeappgroup ./package.json ./package-lock.json .
COPY --chown=nodeappuser:nodeappgroup src src
####
ENV PORT=8080
EXPOSE 8080
####
ENTRYPOINT ["npm", "run", "start"]