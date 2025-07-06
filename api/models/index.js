import sequelize from "./sequelize.js";
import Incident from "./incidentModel.js";
import Zone from "./zoneModel.js";

// association des tables
Incident.belongsTo(Zone, {foreignKey: "zoneId"});
Zone.hasMany(Incident, {foreignKey: "zoneId"});

export {sequelize, Incident, Zone};
