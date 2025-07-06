import express from 'express';
import IncidentController from '../controllers/incidentController.js';

/**
 * @swagger
 * tags:
 *   name: Incidents
 *   description: Geré les incidents
 */

const router = express.Router();

/**
 * @swagger
 * /incidents:
 *   get:
 *     summary: Liste tout les incidents
 *     tags: [Incidents]
 *     responses:
 *       200:
 *         description: Liste des incidents
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Incidents'
 */

// route pour la liste des incidents
router.get('/', (req, res) => new IncidentController(req, res).getAllIncident())

/**
 * @swagger
 * /incidents/{id}:
 *   get:
 *     summary: Liste incident
 *     tags: [Incidents]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Liste incident par id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Incident'
 */
// route pour la liste d'un incident
router.get('/:id', (req, res) => new IncidentController(req, res).getIncidentById())

/**
 * @swagger
 * /incidents:
 *   post:
 *     summary: créer un incident
 *     tags: [Incidents]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/IncidentInput'
 *     responses:
 *       200:
 *         description: Création d'un incident
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Incidents'
 */
// route pour la création d'incident
router.post('/', (req, res) => new IncidentController(req, res).createIncident())

/**
 * @swagger
 * /incidents/{id}:
 *   patch:
 *     summary: modifier un incident
 *     tags: [Incidents]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/IncidentModification'
 *     responses:
 *       200:
 *         description: Modification d'un incident
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Message'
 */

// route pour la modification d'incident
router.patch('/:id', (req, res) => new IncidentController(req, res).updateIncident())

/**
 * @swagger
 * /incidents/{id}:
 *   delete:
 *     summary: Supprimer incident
 *     tags: [Incidents]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Supprimer un incident
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Message'
 */

// route pour la suppresion d'incidents
router.delete('/:id', (req, res) => new IncidentController(req, res).deleteIncident())

/**
 * @swagger
 * /incidents/zone/{zoneId}:
 *   get:
 *     summary: Liste incident par zone
 *     tags: [Incidents]
 *     parameters:
 *       - in: path
 *         name: zoneId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Liste incident filtrer par zone
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/Incidents'
 */

// route pour la liste des incidents par zone
router.get('/zone/:zoneId', (req, res) => new IncidentController(req, res).getIncidentByZone())

/**
 * @swagger
 * /incidents/type/{type}:
 *   get:
 *     summary: Liste incident par type
 *     tags: [Incidents]
 *     parameters:
 *       - in: path
 *         name: type
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Liste incident filtrer par type
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/Incidents'
 */

// route pour la liste des incidents par type
router.get('/type/:type', (req, res) => new IncidentController(req, res).getIncidentByType())

/**
 * @swagger
 * /incidents/emergencyLevel/{emergencyLevel}:
 *   get:
 *     summary: Liste incident par urgence
 *     tags: [Incidents]
 *     parameters:
 *       - in: path
 *         name: emergencyLevel
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Liste incident filtrer par urgence
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/Incidents'
 */

// route pour la liste des incidents par urgence
router.get('/emergencyLevel/:emergencyLevel', (req, res) => new IncidentController(req, res).getIncidentByUrgency())

export default router;

