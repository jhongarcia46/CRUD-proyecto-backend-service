import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Moto } from "../entities/Moto";

const motoRepository = AppDataSource.getRepository(Moto);

// GET - Obtener Todas las motos
export const getAllMoto = async(red: Request, res: Response) => {
  try {
    const moto = await motoRepository.find();
    res.json(moto);
  } catch(error) {
    res.status(500).json({ message: "Error al encontrar moto." });
  }
};

// GET by PLATE - Obetener moto por placa
export const getMotoById = async(req: Request, res: Response) => {
  try {
    const moto = await motoRepository.findOneBy({
      id: parseInt(req.params.plate),
    });

    if(moto) {
      res.json(moto);
    } else {
      res.status(404).json({ message: "moto no encontrado" });
    }
  } catch(error) {
    res.status(500).json({ message: "Error al encontrar moto." });
  }
};

// POST - Crear una nueva moto
export const createMoto = async(req: Request, res: Response) => {
  try {
    const { chassis, color, plate, motor, model, imgUrl } = req.body;
    const moto = new Moto();
    moto.chassis = chassis;
    moto.plate = plate;
    moto.color = color;
    moto.motor = motor;
    moto.model = model;
    moto.imgUrl = imgUrl;

    await motoRepository.save(moto);
    res.status(201).json(moto);
  } catch(error) {
    res.status(500).json({ message: "Error al crear moto." });
  }
};

// PUT - Actualizar moto existente
export const updateMoto = async(req: Request, res: Response) => {
  try {
    const { chassis, plate, color, motor, model, imgUrl } = req.body;
    const moto = await motoRepository.findOneBy({
      id: parseInt(req.params.id),
    });

    if(moto) {
      moto.chassis = chassis ?? moto.chassis;
      moto.plate = plate ?? moto.plate;
      moto.color = color ?? moto.color;
      moto.motor = motor ?? moto.motor,
      moto.model = model ?? moto.model;
      moto.imgUrl = imgUrl ?? moto.imgUrl;

      await motoRepository.save(moto);
      res.json(moto);
    } else {
      res.status(404).json({ message: "moto no encontrada" });
    }
  } catch(error) {
    res.status(500).json({ message: "Error al actualizar moto." });
  }
};

// DELETE - Borrar una moto
export const deleteMoto = async(req: Request, res: Response) => {
  try {
    const moto = await motoRepository.findOneBy({
      id: parseInt(req.params.id),
    });

    if (moto) {
      await motoRepository.remove(moto);
      res.json({ message: "la moto fue eliminada." });
    } else {
      res.status(404).json({ message: "moto no encontrada." });
    }
  } catch(error) {
    res.status(500).json({ message: "Error al eliminar moto." });
  }
};