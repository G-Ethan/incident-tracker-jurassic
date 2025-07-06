import express from 'express';
import ZoneControllers from "../controllers/zoneControllers.js";

/**
 * @swagger
 * tags:
 *   name: Zones
 *   description: Geré les zones
 */

const router = express.Router();

/**
 * @swagger
 * /zones:
 *   get:
 *     summary: Liste toute les zones
 *     tags: [Zones]
 *     responses:
 *       200:
 *         description: Liste des zones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Zone'
 */

// route pour la liste des zones
router.get('/', (req, res) => new ZoneControllers(req, res).getAllZone())

/**
 * @swagger
 * /zones/{id}:
 *   get:
 *     summary: Liste zone
 *     tags: [Zones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Liste zone par id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Zone'
 */

// route pour la liste des zones
router.get('/:id', (req, res) => new ZoneControllers(req, res).getZoneById())

/**
 * @swagger
 * /zones:
 *   post:
 *     summary: créer une zone
 *     tags: [Zones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ZoneInput'
 *     responses:
 *       200:
 *         description: Création d'une zone
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Zone'
 */

// route pour la création des zones
router.post('/', (req, res) => new ZoneControllers(req, res).createZone())

/**
 * @swagger
 * /zones/{id}:
 *   patch:
 *     summary: modifier une zone
 *     tags: [Zones]
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
 *             $ref: '#/components/schemas/ZoneInput'
 *     responses:
 *       200:
 *         description: Modification d'une zone
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Message'
 */


// route pour la modification des zones
router.patch('/:id', (req, res) => new ZoneControllers(req, res).updateZone())

/**
 * @swagger
 * /zones/{id}:
 *   delete:
 *     summary: Supprimer une zone
 *     tags: [Zones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Supprimer une zone
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Message'
 */

// route pour la suppresion des zones
router.delete('/:id', (req, res) => new ZoneControllers(req, res).deleteZone())

export default router;

