FROM node:latest
ENV NODE_ENV=production
 
WORKDIR /app
 
COPY package.json .
COPY ./src ./src
RUN npm install
 
COPY . .
 
CMD ["npm", "run", "start"]