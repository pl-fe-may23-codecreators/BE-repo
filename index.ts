import express, { type Request, type Response } from 'express';
import cors from 'cors';

// temporary products list (until DB is created): https://github.com/mate-academy/product_catalog/blob/main/public/api/phones.json
import products from './temporaryProducts.json';

interface PaginationResult {
  devices: typeof products;
}

const app = express();
const port = 3000;
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Działa!!! :D');
});

app.get('/products', (req: Request, res: Response) => {
  const page = Number(req.query.page) > 0 ? Number(req.query.page) : 1; // page number
  const limit = Number(req.query.limit) > 0 ? Number(req.query.limit) : 5; // limit of devices per page

  /* Example call: 
http://localhost:3000/products?page=3&limit=2 */

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results: PaginationResult = {
    devices: [],
  };

  results.devices = products.slice(startIndex, endIndex);

  res.json(results);
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
