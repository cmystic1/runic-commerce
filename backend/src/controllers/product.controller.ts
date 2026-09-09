import type { Request, Response } from 'express';
import { getAllProducts } from '../services/product.service.js';

export async function getProducts(req: Request, res: Response){
    const products = await getAllProducts();

    return res.json(products);
}