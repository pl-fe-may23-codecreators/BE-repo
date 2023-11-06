import express, { type Request, type Response } from 'express';
import sequelize from './db/db';
import cors from 'cors';
import { phoneRoutes } from './src/routes/phone.routers';

const app = express();
const port = 3000;
app.use(cors());
app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
  res.send('Działa!!! :D');
});

app.use('/products', phoneRoutes);

// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.listen(port, async () => {
  console.log(`Now listening on port ${port}`);
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.log('Unable to connect to the database', error);
  }
}).on('error', function(err) {
  console.log(err);
});
