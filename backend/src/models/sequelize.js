import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('jurassic-park', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});

// Vérifier la bonne connexion
sequelize.authenticate()
    .then(() => console.log('Connexion Base de donnée Réussi'))
    .catch(err => console.error('Erreur de connexion a la nbase de donnée', err));

export default sequelize;