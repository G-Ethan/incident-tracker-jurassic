FROM node:22.14.0

WORKDIR /app
COPY ./api/package*.json ./
RUN npm install
COPY ./api/ ./
EXPOSE 3000
CMD ["node", "src/index.js"]
