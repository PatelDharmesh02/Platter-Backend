FROM node:20-alpine

WORKDIR /platter-backend

COPY package*.json /platter-backend/

RUN npm install

COPY . /platter-backend/

EXPOSE 5000

CMD ["npm", "start"]