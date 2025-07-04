Jurassic Park – Incident Tracker API
Bienvenue sur le Backend API du projet Incident Tracker Jurassic Park.
Cette application permet de gérer les incidents techniques et de sécurité sur le parc grâce à une API RESTful construite avec Node.js, Express et Sequelize.

✅ Fonctionnalités principales
🔐 Authentification simulée avec token

⚙️ CRUD incidents : création, consultation, mise à jour, suppression

🗃️ Stockage MySQL (via Sequelize ORM)

🧩 Respect des principes SOLID et SOC

🚦 Gestion des erreurs centralisée

📚 Documentation Swagger

🧪 Tests unitaires (≥70% de couverture)

📁 Structure du projet
plaintext
Copier
Modifier
backend/
├── src/
│   ├── config/          # Connexion DB & paramètres
│   ├── controllers/     # Logique des routes (classes POO)
│   ├── routes/          # Définition des endpoints REST
│   ├── models/          # Schémas Sequelize
│   ├── services/        # Logique métier
│   ├── middlewares/     # Auth & gestion erreurs
│   ├── docs/            # Fichier Swagger YAML
│   └── index.js         # Point d’entrée serveur
├── tests/               # Tests unitaires Jest
├── .env.example         # Modèle de variables d'environnement
├── .gitignore
├── package.json
└── README.md
⚙️ Prérequis
Node.js v20+

npm

MySQL (local ou distant)

Docker (pour conteneurisation – Bloc 3)

🔑 Variables d’environnement
Copiez .env.example et renommez-le .env :

dotenv
Copier
Modifier
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
<!-- DB_PASSWORD= -->
DB_NAME=incident_tracker

PORT=3000
JWT_SECRET=passwordJWT
🏁 Installation
Clonez le repo ou copiez le dossier backend/ :

bash
Copier
Modifier
git clone <your-repo>
cd backend
Installez les dépendances :

bash
Copier
Modifier
npm install
Vérifiez votre connexion MySQL et créez la base de données incident_tracker si besoin.

🚀 Lancement du serveur
🔄 Mode développement (auto-reload) :
bash
Copier
Modifier
npm run dev
🟢 Mode production :
bash
Copier
Modifier
npm start
🗃️ Migrations Sequelize
La synchronisation est automatique grâce à sequelize.sync(). Pour une gestion avancée, vous pouvez utiliser sequelize-cli.

📚 Documentation Swagger
Une documentation interactive est disponible ici :

bash
Copier
Modifier
http://localhost:3000/api-docs
🔒 Authentification simulée
Toutes les routes de l’API sont protégées. Ajoutez l’en-tête Authorization :

makefile
Copier
Modifier
Authorization: Bearer <JWT_SECRET>
Exemple :

makefile
Copier
Modifier
Authorization: Bearer unSecretPourSimuler
🧪 Tests unitaires
Lancez les tests :

bash
Copier
Modifier
npm test
Rapport de couverture généré dans coverage/.

🐳 Conteneurisation
Voir dossier /docker/ :

Construire l’image backend :

bash
Copier
Modifier
docker build -t incident-backend:latest -f docker/backend/Dockerfile .
Pousser l’image vers votre registry avant de déployer sur Kubernetes.

🚦 Principes de développement
✅ Architecture claire : routeur, contrôleur, service, modèle, middleware
✅ Respect SOLID/SOC
✅ Gestion des erreurs globalisée
✅ Sécurité simulée pour démontrer le flux auth
✅ Exemple .env inclus

🗃️ Fichiers ignorés
.gitignore :

bash
Copier
Modifier
node_modules/
.env
coverage/
logs/
📝 Auteur
👤 Nom : [Ton Nom]

👥 Groupe : [Liste de ton groupe avec noms et ID]

📅 Rattrapage 3ème année

