import IncidentService from '../services/IncidentService.js';

class IncidentController {
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }

    async createIncident() {
        try {
            const data = this.req.body;
            const incident = await IncidentService.create(data);
            return this.res.status(200).json(incident);
        } catch (err) {
            return this.res.status(500).json({ message: err.message });
        }
    }

    async getAllIncident() {
        try {
            const incidents = await IncidentService.getAll();
            return this.res.status(200).json(incidents);
        } catch (err) {
            return this.res.status(500).json( {message: err.message} );
        }
    }

    async getIncidentById() {
        try {
            const { id } = this.req.params;
            const incident = await IncidentService.getById(id);
            if (!incident) return this.res.status(404).json({message: 'Incident inéxistant'});
            return this.res.status(200).json(incident);
        } catch (err) {
            return this.res.status(500).json({message: err.message});
        }
    }

    async updateIncident() {
        try {
            const { id } = this.req.params;
            const updateIncident = await IncidentService.update(id, this.req.body);
            if (!updateIncident) return this.res.status(404).json({message: 'Incident inéxistant'});
            return this.res.status(200).json({message: 'Incident modifier avec succès'});
        } catch (err) {
            return this.res.status(500).json({message: err.message});
        }
    }

    async deleteIncident() {
        try {
            const { id } = this.req.params;
            const deleteIncident = await IncidentService.delete(id);
            if (!deleteIncident) return this.res.status(404).json({message: 'Incident inéxistant'});
            return this.res.status(200).json({message: 'Incident supprimer avec succès'});
        } catch (err) {
            return this.res.status(500).json({message: err.message});
        }
    }

    async getIncidentByZone() {
        try {
            const { zoneId } = this.req.params;
            const incidents = await IncidentService.getByZone(zoneId);
            return this.res.status(200).json(incidents);
        } catch (err) {
            return this.res.status(500).json({message: err.message});
        }
    }

    async getIncidentByType() {
        try {
            const { type } = this.req.params;
            const incidents = await IncidentService.getByType(type);
            return this.res.status(200).json(incidents);
        } catch (err) {
            return this.res.status(500).json({message: err.message});
        }
    }

    async getIncidentByUrgency() {
        try {
            const { emergencyLevel } = this.req.params;
            const incidents = await IncidentService.getByUrgency(emergencyLevel);
            return this.res.status(200).json(incidents);
        } catch (err) {
            return this.res.status(500).json({message: err.message});
        }
    }
}
export default IncidentController;