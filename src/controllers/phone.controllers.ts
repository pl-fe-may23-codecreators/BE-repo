import { Request, Response } from 'express';
import { QueryTypes } from 'sequelize';
import sequelize from '../../db/db';
import { Phone } from '../models/Phone';
import { PhoneDetails } from '../models/PhoneDetails';

type SortableFields = 'year' | 'price';

const getAllPhones = async (req: Request, res: Response) => {
  const allProducts: Phone[] = await sequelize.query('SELECT * FROM "Phones"', { type: QueryTypes.SELECT });

  const page = Number(req.query.page) > 0 ? Number(req.query.page) : 1;
  const limit = Number(req.query.limit) > 0 ? Number(req.query.limit) : 5;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const sortField = req.query.sortField as string | undefined;
  const sortOrder = req.query.sortOrder as string | undefined;

  const paginatedProducts: Phone[] = allProducts.slice(startIndex, endIndex);

  if (sortField && sortOrder) {
    paginatedProducts.sort((a, b) => {
      if (sortField === 'year') {
        return sortOrder === 'asc' ? a.year - b.year : b.year - a.year;
      } else if (sortField === 'price') {
        return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
      }
    });
  }

  res.send(paginatedProducts);
};

const newPhones = async (req: Request, res: Response) => {
  const newProducts = await sequelize.query(
    'SELECT * FROM "Phones" ORDER BY year DESC LIMIT 7', { type: QueryTypes.SELECT });

  res.send(newProducts);
};

const discountedPhones = async (req: Request, res: Response) => {
  const discountedProducts = await sequelize.query(
    'SELECT * FROM "Phones" ORDER BY year LIMIT 17', {
      type: QueryTypes.SELECT
    }
  );

  res.send(discountedProducts);
};

const getPhone = async (req: Request, res: Response) => {
  const phoneId = req.params['phoneId'];

  const getPhoneById = await sequelize.query(
    `SELECT * FROM "PhoneDetails" WHERE "phoneId"='${phoneId}'`, {
      type: QueryTypes.SELECT
    }
  );

  res.send(getPhoneById);
};

const getTotalPhoneCount = async (req: Request, res: Response) => {
  const sortField = req.query.sortField as string | undefined;
  const sortOrder = req.query.sortOrder as string | undefined;

  let query = 'SELECT COUNT(*) as total FROM "Phones"';

  if (sortField && sortOrder) {
    query += ` ORDER BY "${sortField}" ${sortOrder === 'asc' ? 'ASC' : 'DESC'}`;
  }

  const result = await sequelize.query(query, { type: QueryTypes.SELECT });

  if (result && result[0] && result[0].total) {
    res.send(result[0].total);
  } else {
    res.status(500).send('Error fetching total count');
  }
};

export const phoneControllers = {
  getAllPhones,
  newPhones,
  discountedPhones,
  getPhone,
  getTotalPhoneCount,
};