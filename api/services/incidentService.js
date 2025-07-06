import Incident from "../models/incidentModel.js";
import ZoneModel from "../models/zoneModel.js";
class IncidentService {

    // méthode de création
    async create(data) {
        const newIncident = new Incident(data);
        return await newIncident.save();
    }

    // méthode de list
    async getAll() {
        return await Incident.findAll();
    }

    // méthode de list en fonction de l'id
    async getById(id) {
        return await Incident.findByPk(id, {
            include: [{
                model: ZoneModel,
                attributes: ["id", "name"]
            }]
        });
    }

    // méthode de modification
    async update(id, data) {
        const incident = await Incident.findByPk(id);
        if (!incident) return null;
        await incident.update(data);
        return incident;
    }

    // méthode de suppression
    async delete(id) {
        const incident = await Incident.findByPk(id);
        if (!incident) return null;
        await incident.destroy();
        return incident;
    }

    // méthode de list par zone
    async getByZone(zoneId) {
        return await Incident.findAll({ where: { zoneId } });
    }

    // méthode de list par type
    async getByType(type) {
        return await Incident.findAll({ where: { type } });
    }

    // méthode de list par urgence
    async getByUrgency(emergencyLevel) {
        return await Incident.findAll({ where: { emergencyLevel } });
    }

}

export default new IncidentService();