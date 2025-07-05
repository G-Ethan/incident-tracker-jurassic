# Utilise une image Node légère
FROM node:20-alpine

# Crée le dossier de travail
WORKDIR /app

# Copie les fichiers de dépendances
COPY package*.json ./

# Installe toutes les dépendances (production + dev)
RUN npm install

# Copie le reste du projet
COPY . .

# Expose le port du backend
EXPOSE 3000

# Commande de démarrage
CMD ["node", "src/app.js"]
