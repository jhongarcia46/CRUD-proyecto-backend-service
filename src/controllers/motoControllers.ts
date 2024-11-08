import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { moto } from "../entities/moto";

const productRepository = AppDataSource.getRepository(moto);

// GET - Obtener Todos los Productos
export const getAllProducts = async(red: Request, res: Response) => {
  try {
    const moto = await productRepository.find();
    res.json(moto);
  } catch(error) {
    res.status(500).json({ message: "Error al obtener moto." });
  }
};

// GET by ID - Obetener Producto por ID
export const getMotoById = async(req: Request, res: Response) => {
  try {
    const moto = await motoRepository.findOneBy({
      id: parseInt(req.params.id),
    });

    if(moto) {
      res.json(moto);
    } else {
      res.status(404).json({ message: "moto no encontrado" });
    }
  } catch(error) {
    res.status(500).json({ message: "Error al obtener moto." });
  }
};

// POST - Crear una nueva moto
export const createMoto = async(req: Request, res: Response) => {
  try {
    const { name, description, price } = req.body;
    const product = new moto();
    moto.name = name;
    moto.description = description;
    moto.price = price;

    await motoRepository.save(moto);
    res.status(201).json(product);
  } catch(error) {
    res.status(500).json({ message: "Error al crear moto." });
  }
};

// PUT - Actualizar moto existente
export const updateMoto = async(req: Request, res: Response) => {
  try {
    const { name, description, price } = req.body;
    const moto = await productRepository.findOneBy({
      id: parseInt(req.params.id),
    });

    if(moto) {
      moto.name = name ?? moto.name;
      moto.description = description ?? moto.description;
      moto.price = price ?? moto.price;

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
    const product = await motoRepository.findOneBy({
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