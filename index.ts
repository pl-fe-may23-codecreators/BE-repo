import express, { type Request, type Response } from 'express';
import sequelize from './db/db';
import cors from 'cors';

import products from './temporaryProducts.json';

interface PaginationResult {
  devices: typeof products;
}
type SortableFields = 'year' | 'price';

const app = express();
const port = 3000;
app.use(cors());
app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
  res.send('Działa!!! :D');
});

app.get('/products', (req: Request, res: Response) => {
  const page = Number(req.query.page) > 0 ? Number(req.query.page) : 1; // page number (default 1)
  const limit = Number(req.query.limit) > 0 ? Number(req.query.limit) : 5; // devices per page (default 5)

  // example call: "http://localhost:3000/products?page=2&limit=3"

  const sortField = (
    ['year', 'price'].includes(req.query.sortField as string)
      ? req.query.sortField
      : undefined
  ) as SortableFields | undefined;
  const sortOrder = req.query.sortOrder as string | undefined;

  const sortedProducts = [...products];
  if (sortField && sortOrder) {
    sortedProducts.sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
    });
  }

  // another examples: "http://localhost:3000/products?sortField=year&sortOrder=asc",

  /* ultimate call!!!: "http://localhost:3000/products?page=2&limit=3&sortField=year&sortOrder=desc" 
     page number 2, 3 devices per page, sorted by year in descending order 
  */

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results: PaginationResult = {
    devices: sortedProducts.slice(startIndex, endIndex),
  };

  res.json(results);
});

app.get('/products/new', (req: Request, res: Response) => {

  const numberOfNewModels = 7; // Here is the number of phones that we wanna display on page


  const newModels = [...products]
    .sort((a, b) => {

      const yearA = Number(a.year);
      const yearB = Number(b.year);
      return yearB - yearA; 
    })
    .slice(0, numberOfNewModels);

  res.json(newModels);
});

app.get('/products/discount', (req: Request, res: Response) => {
  const discountProducts = [...products]
    .sort((a, b) => {
      const yearA = Number(a.year);
      const yearB = Number(b.year);
      return yearA - yearB;
    })
    .slice(0, Math.floor(products.length / 4)); // The logic is that we apply a discount to 25% of oldest products

  res.json(discountProducts);
});

app.listen(port, async () => {
  console.log(`Now listening on port ${port}`);
  await sequelize.authenticate();
});