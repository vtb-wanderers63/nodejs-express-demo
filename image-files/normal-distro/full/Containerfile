FROM node:lts
ENV NODE_ENV=production
 
WORKDIR /app
 
COPY package.json .
RUN npm install --ignore-scripts
COPY ./src ./src

# Create group

ARG UID=1001
ARG GID=1001

# Create group and add GID
RUN addgroup --gid $GID nodeappgroup

# Create user and add UID, link group, and assign shell
RUN adduser --uid $UID --ingroup nodeappgroup --system nodeappuser

# Change ownership of source directory.
RUN chown -R nodeappuser:nodeappgroup ./src
 
CMD ["npm", "run", "start"]