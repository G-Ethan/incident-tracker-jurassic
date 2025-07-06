import { Sequelize } from 'sequelize';
import dotenv from "dotenv";

dotenv.config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
});

// Vérifier la bonne connexion
sequelize.authenticate()
    .then(() => console.log('Connexion Base de donnée Réussi'))
    .catch(err => console.error('Erreur de connexion a la nbase de donnée', err));

export default sequelize