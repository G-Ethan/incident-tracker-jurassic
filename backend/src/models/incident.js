const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Incident = sequelize.define('Incident', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  type: { type: DataTypes.ENUM('Evasion', 'Panne', 'Blessure'), allowNull: false },
  zone: { type: DataTypes.STRING, allowNull: false },
  urgency: { type: DataTypes.ENUM('Basse', 'Moyenne', 'Haute'), allowNull: false },
  status: { type: DataTypes.ENUM('En cours', 'Résolu'), defaultValue: 'En cours' },
});

module.exports = Incident;
