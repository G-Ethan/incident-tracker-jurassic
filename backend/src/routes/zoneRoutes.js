import express from 'express';
import ZoneControllers from '../controllers/zoneControllers.js';
const router = express.Router();

// route pour la liste des zones
router.get('/', (req, res) => new ZoneControllers(req, res).getAllZone());

// route pour la liste des zones
router.get('/:id', (req, res) => new ZoneControllers(req, res).getZoneById());

// route pour la création des zones
router.post('/', (req, res) => new ZoneControllers(req, res).createZone());

// route pour la modification des zones
router.patch('/:id', (req, res) => new ZoneControllers(req, res).updateZone());

// route pour la suppresion des zones
router.delete('/:id', (req, res) => new ZoneControllers(req, res).deleteZone());

export default router;

