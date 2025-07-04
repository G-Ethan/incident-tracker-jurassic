# ---- Étape 1 : Build ----
FROM node:20-alpine AS build

# Dossier de travail pour le build frontend (ex. React, Vite, etc.)
WORKDIR /app

# Copier package.json + lock et installer les deps
COPY package*.json ./

RUN npm install

# Copier le reste du code et construire la version statique
COPY . .

# Si tu as un script "build" : l'exécuter
RUN npm run build

# ---- Étape 2 : Serveur Nginx ----
FROM nginx:alpine

# Copier les fichiers statiques buildés vers le répertoire Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copier une conf custom Nginx si besoin (optionnel)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

# Démarrage de Nginx (par défaut)
