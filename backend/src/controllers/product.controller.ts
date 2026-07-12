import type { Request, Response } from 'express';
import { getAllProducts } from '../services/product.service.js';

export function getProducts(req: Request, res: Response){
    const products = getAllProducts();

    return res.json(products);
}