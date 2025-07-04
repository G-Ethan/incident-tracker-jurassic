import express from 'express';
import IncidentController from '../controllers/incidentController.js';
const router = express.Router();

// route pour la liste des incidents
router.get('/', (req, res) => new IncidentController(req, res).getAllIncident());

// route pour la liste d'un incident
router.get('/:id', (req, res) => new IncidentController(req, res).getIncidentById());

// route pour la création d'incident
router.post('/', (req, res) => new IncidentController(req, res).createIncident());

// route pour la modification d'incident
router.patch('/:id', (req, res) => new IncidentController(req, res).updateIncident());

// route pour la suppresion d'incidents
router.delete('/:id', (req, res) => new IncidentController(req, res).deleteIncident());

// route pour la liste des incidents par zone
router.get('/zone/:zoneId', (req, res) => new IncidentController(req, res).getIncidentByZone());

// route pour la liste des incidents par type
router.get('/type/:type', (req, res) => new IncidentController(req, res).getIncidentByType());

// route pour la liste des incidents par urgence
router.get('/emergencyLevel/:emergencyLevel', (req, res) => new IncidentController(req, res).getIncidentByUrgency());

export default router;

