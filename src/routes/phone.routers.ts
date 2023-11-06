import express from 'express';
import { phoneControllers } from '../controllers/phone.controllers';

export const phoneRoutes = express.Router();

phoneRoutes.get('/', phoneControllers.getAllPhones);
phoneRoutes.get('/new', phoneControllers.newPhones);
phoneRoutes.get('/discount', phoneControllers.discountedPhones);