# -------------------
# ---- Stage: DEV ----
# -------------------
FROM node:22.14.0 AS dev

WORKDIR /app

ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/81b1373f17855a4dc21156cfe1694c31d7d1792e/wait-for-it.sh /usr/bin/wait-for-it
RUN chmod +x /usr/bin/wait-for-it

COPY ../../api/package*.json ./

RUN npm install

COPY ../../api/ ./

ENV PORT=3000
ENV NODE_ENV=development

EXPOSE ${PORT}

CMD ["wait-for-it", "database:3306", "--", "npm", "run", "start"]

# ---------------------
# ---- Stage: PROD ----
# ---------------------
FROM node:22.14.0 AS prod

WORKDIR /app

# ✅ Ici on copie depuis le STAGE `dev` défini plus haut
COPY --from=dev /usr/bin/wait-for-it /usr/bin/wait-for-it

COPY ../../api/package*.json ./

RUN npm ci --omit=dev

COPY ../../api/ ./

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE ${PORT}

CMD ["wait-for-it", "database:3306", "--", "npm", "run", "start"]
