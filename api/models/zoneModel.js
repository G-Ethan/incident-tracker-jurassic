import sequelize from "./sequelize.js";
import { DataTypes } from "sequelize";

export const Zone = sequelize.define("Zone", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }},
{
    timestamps: false,
    }
);

export default Zone;
