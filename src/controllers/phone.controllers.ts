import { Request, Response } from 'express';
import { QueryTypes } from 'sequelize';
import sequelize from '../../db/db';
import { Phone } from '../models/Phone';

type SortableFields = 'year' | 'price';

const getAllPhones = async (req: Request, res: Response) => {
  const getAllProducts = async () => {
    const products = await sequelize.query('SELECT * FROM "Phones"', { type: QueryTypes.SELECT });
    
    return products as Phone[];
  };

  const products = await getAllProducts();
    
  const page = Number(req.query.page) > 0 ? Number(req.query.page) : 1; // page number (default 1)
  const limit = Number(req.query.limit) > 0 ? Number(req.query.limit) : 5; // devices per page (default 5)
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
    
  const sortField = (
        ['year', 'price'].includes(req.query.sortField as string)
          ? req.query.sortField
          : undefined
      ) as SortableFields | undefined;
  const sortOrder = req.query.sortOrder as string | undefined;
  const paginatedProducts: Phone[] = products.slice(startIndex, endIndex);

  if (sortField && sortOrder) {
    paginatedProducts.sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
    });
  }

  res.send(paginatedProducts);
  console.log(paginatedProducts);
};

export const phoneControllers = {
  getAllPhones,
};