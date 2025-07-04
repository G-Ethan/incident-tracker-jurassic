import ZoneService from '../services/zoneService.js';
class ZoneController {
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }

    async createZone() {
        try {
            const data = this.req.body;
            const zone = await ZoneService.create(data);
            return this.res.status(200).json(zone);
        } catch (err) {
            return this.res.status(500).json({ message: err.message });
        }
    }

    async getAllZone() {
        try {
            const zones = await ZoneService.getAll();
            return this.res.status(200).json(zones);
        } catch (err) {
            return this.res.status(500).json( {message: err.message} );
        }
    }

    async getZoneById() {
        try {
            const { id } = this.req.params;
            const zone = await ZoneService.getById(id);
            if (!zone) return this.res.status(404).json({message: 'Zone inéxistant'});
            return this.res.status(200).json(zone);
        } catch (err) {
            return this.res.status(500).json({message: err.message});
        }
    }

    async updateZone() {
        try {
            const { id } = this.req.params;
            const updateZone = await ZoneService.update(id, this.req.body);
            if (!updateZone) return this.res.status(404).json({message: 'Zone inéxistant'});
            return this.res.status(200).json({message: 'Zone modifier avec succès'});
        } catch (err) {
            return this.res.status(500).json({message: err.message});
        }
    }

    async deleteZone() {
        try {
            const { id } = this.req.params;
            const deleteZone = await ZoneService.delete(id);
            if (!deleteZone) return this.res.status(404).json({message: 'Zone inéxistant'});
            return this.res.status(200).json({message: 'Zone supprimer avec succès'});
        } catch (err) {
            return this.res.status(500).json({message: err.message});
        }
    }

}
export default ZoneController;