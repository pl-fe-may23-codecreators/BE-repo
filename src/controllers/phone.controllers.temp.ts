import { Request, Response } from 'express';
import { QueryTypes } from 'sequelize';
import sequelize from '../../db/db';
import { Phone } from '../models/Phone';
import { PhoneDetails } from '../models/PhoneDetails';

type SortableFields = 'year' | 'price';

const getAllPhones = async (req: Request, res: Response) => {
  const allProducts: Phone[] = await sequelize.query('SELECT * FROM "Phones"', {
    type: QueryTypes.SELECT,
  });
  
  const page = Number(req.query.page) > 0 ? Number(req.query.page) : 1;
  const limit = Number(req.query.limit) > 0 ? Number(req.query.limit) : 5;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  
  const sortField = req.query.sortField as string | undefined;
  const sortOrder = req.query.sortOrder as string | undefined;
  
  let query = 'SELECT * FROM "Phones"';
  if (sortField && sortOrder) {
    query += ` ORDER BY ${sortField} ${sortOrder === 'asc' ? 'ASC' : 'DESC'}`;
  }
  
  query += ` LIMIT ${limit} OFFSET ${startIndex}`;
  
  const paginatedProducts: Phone[] = await sequelize.query(query, {
    type: QueryTypes.SELECT,
  });
  
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

const getRecommended = async (req: Request, res: Response) => {
  const phoneId = req.params['phoneId'];

  const getPhoneById: PhoneDetails[] = await sequelize.query(
    `SELECT * FROM "PhoneDetails" WHERE "phoneId"='${phoneId}'`, {
      type: QueryTypes.SELECT
    }
  );

  const phone: PhoneDetails = getPhoneById[0];


  const getRecommendedPhones = await sequelize.query(
    `SELECT * 
    FROM "Phones"
    JOIN "PhoneDetails" ON "Phones"."phoneId"="PhoneDetails"."phoneId" 
    WHERE "PhoneDetails"."namespaceId"='${phone['namespaceId']}'
    AND "PhoneDetails".color IN (${phone['colorsAvailable'].map(color => ('\'' + color + '\''))})
    OR "PhoneDetails".capacity IN (${phone['capacityAvailable'].map(capacity => ('\'' + capacity + '\''))})`, {
      type: QueryTypes.SELECT
    }
  );
  
  console.log(getRecommendedPhones);
  res.send(getRecommendedPhones);
};

export const phoneControllers = {
  getAllPhones,
  newPhones,
  discountedPhones,
  getPhone,
  getRecommended,
};