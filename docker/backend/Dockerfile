# Dockerfile pour backend Node.js
FROM node:20-alpine

WORKDIR /app

# Copie package.json ET package-lock.json pour que npm ci fonctionne
COPY package*.json ./

# Installation clean des deps de prod
RUN npm ci --omit=dev

# Copie du reste du code
COPY . .

# Port exposé
EXPOSE 3000

# Commande de lancement
CMD ["node", "src/index.js"]
