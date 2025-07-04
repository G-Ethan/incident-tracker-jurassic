import ZoneModel from "../models/zoneModel.js";
class ZoneService {

    // méthode de création
    async create(data) {
        const newZone = new ZoneModel(data);
        return await newZone.save();
    }

    // méthode de list
    async getAll() {
        return await ZoneModel.findAll();
    }

    // méthode de list en fonction de l'id
    async getById(id) {
        return await ZoneModel.findByPk(id);
    }

    // méthode de modification
    async update(id, data) {
        const zone = await ZoneModel.findByPk(id);
        if (!zone) return null;
        await zone.update(data);
        return zone;
    }

    // méthode de suppression
    async delete(id) {
        const zone = await ZoneModel.findByPk(id);
        if (!zone) return null;
        await zone.destroy();
        return zone;
    }
}

export default new ZoneService();