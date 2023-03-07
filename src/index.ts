import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import expressHandlebars from 'express-handlebars';

import { connectToDatabase } from './databaseConnection';
// import { loadDatabase } from './generateData';
import {findAll} from './controllers/order.controller';
// import { Order } from './models/order.model';

dotenv.config();

const HOST = process.env.HOST || 'http://localhost';
const PORT = parseInt(process.env.PORT || '4500');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const clientPath = path.join(__dirname, '../', 'client/build');

  app.use(express.static(clientPath));
  app.get('/*', (_req, res) => {
    res.sendFile(path.join(clientPath, 'index.html'));
  });

app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname, './views'));

app.get('/', (req, res) => {
  return res.json({ message: 'Hello World!' });
});

app.get('/orders', findAll);
// app.get('/orders/:id', findOne);
// app.get('/orders/:id/view', viewOrder);
// app.get('/orders/:id/download', downloadOrder);

app.use(express.static(path.resolve(__dirname, '../public')));

app.listen(PORT, async () => {
  await connectToDatabase();

  // await loadDatabase('en',  true);

  console.log(`Application started on URL ${HOST}:${PORT} 🎉`);
});
