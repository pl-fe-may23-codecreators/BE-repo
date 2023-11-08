import { Request, Response } from 'express';
import { QueryTypes } from 'sequelize';
import sequelize from '../../db/db';
import { Phone } from '../models/Phone';
import { PhoneDetails } from '../models/PhoneDetails';

type SortableFields = 'year' | 'price';
enum ProductType {
  Phones = 'phones',
}

const getAllPhones = async (req: Request, res: Response) => {
  const productType = req.query.productType as string | undefined;
  let allProducts: Phone[] = [];

  if (productType === 'phones' || productType === undefined) {
    allProducts = await sequelize.query(`SELECT * FROM "Phones" WHERE category='${ProductType.Phones}'`, { type: QueryTypes.SELECT });
  } else {
    allProducts = [];
  }
    
  const page = Number(req.query.page) > 0 ? Number(req.query.page) : 1; // page number (default 1)
  const limit = Number(req.query.limit) > 0 ? Number(req.query.limit) : 5; // devices per page (default 5)

  // example call: "http://localhost:3000/products?page=2&limit=3"

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
    
  const sortField = (
        ['year', 'price'].includes(req.query.sortField as string)
          ? req.query.sortField
          : undefined
      ) as SortableFields | undefined;
  const sortOrder = req.query.sortOrder as string | undefined;
  const paginatedProducts: Phone[] = allProducts.slice(startIndex, endIndex);

  if (sortField && sortOrder) {
    paginatedProducts.sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
    });
  }

  // another examples: "http://localhost:3000/products?sortField=year&sortOrder=asc",

  /* ultimate call!!!: "http://localhost:3000/products?page=2&limit=3&sortField=year&sortOrder=desc" 
     page number 2, 3 devices per page, sorted by year in descending order 
  */

  res.send(paginatedProducts);
  console.log(paginatedProducts);
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
    AND "PhoneDetails".capacity IN (${phone['capacityAvailable'].map(capacity => ('\'' + capacity + '\''))})`, {
      type: QueryTypes.SELECT
    }
  );
  
  console.log(getRecommendedPhones);
  res.send(getRecommendedPhones);
};

const getPhones = async (req: Request, res: Response) => {
  const phoneName = req.params['name'];

  const getPhoneByName = await sequelize.query(
    `SELECT * FROM "Phones" WHERE "name" LIKE '%${phoneName}%'`, {
      type: QueryTypes.SELECT
    }
  );

  res.send(getPhoneByName);
};

export const phoneControllers = {
  getAllPhones,
  newPhones,
  discountedPhones,
  getPhone,
  getRecommended,
  getPhones
};