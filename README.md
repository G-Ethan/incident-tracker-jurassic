
> Projet de rattrapage — 3ème année - incident tracker jurassic

---

Objectif

Développer, conteneuriser, déployer et documenter une application web complète pour gérer les incidents techniques et de sécurité.

---

#Contenu du projet

Le projet est organisé en plusieurs blocs livrables :

root/
├── API/ # Backend/API 
├── frontend/ # Interface utilisateur statique (HTML/CSS/JS)
├── docker/ # Dockerfiles, .dockerignore, README_DOCKER.md
├── k8s/ # Manifestes Kubernetes (YAML)
├── .github/
├── README_K8S.md # Instructions de déploiement Kubernetes
├── .env
├── .env.example
├── .gitignore
├── compose.yaml
├── README.md # Ce fichier


#Technologies utilisées

- Backend : Node.js 20 (Express), ORM (Sequelize), MySQL
- Frontend : HTML, CSS, JS, framework CSS autorisé
- Conteneurisation : Docker (multi-stage pour frontend)
- Orchestration : Kubernetes (déploiement, services, PVC, secrets)
- CI/CD : GitHub Actions ou GitLab CI
- Cloud : AWS (architecture théorique documentée)

---

    Cloner le dépôt :
git clone https://github.com/G-Ethan/incident-tracker-jurassic/


    Backend
Image construite à partir de node:20-alpine

Fichiers ignorés via .dockerignore

Secrets récupérés depuis Kubernetes Secrets

    Frontend
Build en multi-stage : Node.js(Nginx)

Voir docker/README_DOCKER.md pour les commandes docker build & docker push.

     Déploiement Kubernetes
Tout est dans le dossier k8s/.

kubectl apply -f k8s/

MySQL déployé avec PVC ≥ 5GiB + Secret

README_K8S.md contient tous les détails d’accès

    Accès à l’application
Frontend voir en local avec l'api


    CI/CD
Pipelines configurés pour :

Validation du code (lint, test)

Build & push des images Docker

Scan de sécurité des images

Fichiers .github/workflows

Tests unitaires

SwaggerUI pour la doc de l’API

Comments et .gitignore fournis

Variables d’env via .env + .env.example

👥 Auteurs
ID étudiant : [102250 et 109255]

Nom : [Geoffrey Riviere ET Godard Ethan]

