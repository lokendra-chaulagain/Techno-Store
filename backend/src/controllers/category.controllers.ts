import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { Category } from "../entities/Category";

export const getCategories = async (req: Request, res: Response) => {
  try {
    const results = await AppDataSource.getRepository(Category).find();
    return res.status(200).json(results);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCategory = async (req: Request, res: Response) => {
  const id: any = req.query.id;
  try {
    const result = await AppDataSource.getRepository(Category).findOneBy(id);
    return res.status(200).json(result);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCategory = async (req: Request, res: Response) => {
  try {
    const newCategory = AppDataSource.getRepository(Category).create(req.body);
    const results = await AppDataSource.getRepository(Category).save(newCategory);
    return res.status(201).json(results);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  const id: any = req.query.id;
  try {
    const updatedCategory: any = await AppDataSource.getRepository(Category).findOneBy(id);
    AppDataSource.getRepository(Category).merge(updatedCategory, req.body);
    const result = await AppDataSource.getRepository(Category).save(updatedCategory);
    return res.status(201).json(result);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const deletedCategory = await AppDataSource.getRepository(Category).delete(req.params.id);
    return res.status(200).json(deletedCategory);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
