FROM node:lts
ENV NODE_ENV=production
 
WORKDIR /app
 
COPY package.json .
RUN npm install --ignore-scripts
COPY ./src ./src

 
COPY . .
 
CMD ["npm", "run", "start"]