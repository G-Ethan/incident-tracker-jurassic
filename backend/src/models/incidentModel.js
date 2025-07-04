import sequelize from './sequelize.js';
import { DataTypes } from 'sequelize';
import zoneModel from './zoneModel.js';

export const Incident = sequelize.define('Incident', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zoneId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: zoneModel,
                key: 'id',
            }
        },
        emergencyLevel: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }},
    {
        timestamps: false,
    }
);

export default Incident;
