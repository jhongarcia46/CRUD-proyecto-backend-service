import { Router } from "express";
import {
  getAllMoto,
  getMotoById,
  createMoto,
  updatemoto,
  deleteMoto,
} from "../controllers/motoControllers";

const motoRoutes = Router();

/**
 * @swagger
 * tags:
 *   plate: moto
 *   description: CRUD relacionado con moto
 */

/**
 * @swagger
 * /api/moto:
 *   get:
 *     summary: Obtener todas las motos
 *     tags: [moto]
 *     responses:
 *       200:
 *         description: Lista de motos
 */
motoRoutes.get("/", getAllMoto);

/**
 * @swagger
 * /api/moto/{id}:
 *   get:
 *     summary: Obtener una moto por placa
 *     tags: [moto]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: placa de moto
 *     responses:
 *       200:
 *         description: Detalles de la mot
 *       404:
 *         description: moto no encontrada
 */
motoRoutes.get("/:moto", getMotoById);

/**
 * @swagger
 * /api/moto:
 *   post:
 *     summary: subir una nueva moto
 *     tags: [moto]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - chassis
 *               - plate
 *               - motor
 *               - color
 *               - model
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: moto subida
 *       500:
 *         description: Error en el servidor
 */
motoRoutes.post("/", createMoto);

/**
 * @swagger
 * /api/moto/{id}:
 *   put:
 *     summary: Actualizar moto existente
 *     tags: [moto]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: placa de moto
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               plate:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: moto actualizada
 *       404:
 *         description: moto no encontrada
 *       500:
 *         description: Error en el servidor
 */
motoRoutes.put("/:moto", updatemoto);

/**
 * @swagger
 * /api/moto/{plate}:
 *   delete:
 *     summary: Eliminar moto
 *     tags: [moto]
 *     parameters:
 *       - in: path
 *         moto: plate
 *         required: true
 *         schema:
 *           type: integer
 *         description: paca de moto
 *     responses:
 *       200:
 *         description: moto eliminada
 *       404:
 *         description: moto no encontrada
 *       500:
 *         description: Error en el servidor
 */
motoRoutes.delete("/:plate", deleteMoto);

export default motoRoutes;