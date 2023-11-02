import express, { type Request, type Response } from 'express';
import sequelize from './db/db';
import cors from 'cors';
import { QueryTypes } from 'sequelize';

const app = express();
const port = 3000;
app.use(cors());
app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
  res.send('Działa!!! :D');
});

app.get('/products', (req: Request, res: Response) => {
  const getAllProducts = async () => {
    const products = await sequelize.query('SELECT * FROM "Phones"', { type: QueryTypes.SELECT });

    return products;
  };

  const page = Number(req.query.page) > 0 ? Number(req.query.page) : 1; // page number (default 1)
  const limit = Number(req.query.limit) > 0 ? Number(req.query.limit) : 5; // devices per page (default 5)
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const result = getAllProducts().then(result => {
    const paginatedProducts = result.slice(startIndex, endIndex);
    res.json(paginatedProducts);
  });

  return result;
});

// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.listen(port, async () => {
  console.log(`Now listening on port ${port}`);
  await sequelize.authenticate();
});
