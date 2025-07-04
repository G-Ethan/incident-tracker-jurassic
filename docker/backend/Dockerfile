FROM node:20-alpine

WORKDIR /app

# Copier package.json ET package-lock.json
COPY package*.json ./

# Installe les dépendances de prod
RUN npm ci --omit=dev

# Copier le reste du code
COPY . .

EXPOSE 3000

CMD ["node", "src/app.js"]
