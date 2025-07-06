# ---- Development Stage ----
FROM node:22.14.0 AS dev

WORKDIR /app

# Script wait-for-it pour la base de données
ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/81b1373f17855a4dc21156cfe1694c31d7d1792e/wait-for-it.sh /usr/bin/wait-for-it
RUN chmod +x /usr/bin/wait-for-it

# ✅ Copie le package.json + lock depuis le vrai dossier API
COPY ../../api/package*.json ./

RUN npm install

# ✅ Copie tout le code backend
COPY ../../api/ ./

ENV PORT=3000
ENV NODE_ENV=development

EXPOSE ${PORT}

CMD ["wait-for-it", "database:3306", "--", "npm", "run", "start"]


# ---- Production Stage ----
FROM node:22.14.0 AS prod

WORKDIR /app

COPY --from=dev /usr/bin/w
