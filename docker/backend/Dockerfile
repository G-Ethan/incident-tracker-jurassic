FROM node:22.14.0 AS prod

WORKDIR /app

# ✅ Corrigé : copie wait-for-it depuis dev
COPY --from=dev /usr/bin/wait-for-it /usr/bin/wait-for-it

COPY ../../api/package*.json ./

RUN npm ci --omit=dev

COPY ../../api/ ./

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE ${PORT}

CMD ["wait-for-it", "database:3306", "--", "npm", "run", "start"]

