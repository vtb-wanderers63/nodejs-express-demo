FROM node:lts as base
ENV NODE_ENV=development
 
WORKDIR /dev-app
 
COPY package.json .

RUN npm install

COPY ./src ./src

# lint and test
FROM base as lint-and-test

RUN npm run lint

RUN npm run test

# build
# FROM test as build
# RUN npm run build

# prod package installations
FROM base as prod-dependency-installations
ENV NODE_ENV=production
WORKDIR /prod-app

COPY package.json .

RUN npm install --ignore-scripts

FROM node:lts-slim
WORKDIR /app

# copy dist directory
# COPY --from=build /dev-app/dist ./

COPY --from=prod-dependency-installations /prod-app/node_modules ./node_modules

COPY ./src ./src

COPY package.json .
 
# Create group

ARG UID=1001
ARG GID=1001

# Create group and add GID
RUN addgroup --gid $GID nodeappgroup && adduser --uid $UID --ingroup nodeappgroup --system nodeappuser && chown -R nodeappuser:nodeappgroup ./src

CMD ["npm", "run", "start"]