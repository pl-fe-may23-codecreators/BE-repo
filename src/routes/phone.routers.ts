import express from 'express';
import { phoneControllers } from '../controllers/phone.controllers';

export const phoneRoutes = express.Router();

phoneRoutes.get('/new', phoneControllers.newPhones);
phoneRoutes.get('/discount', phoneControllers.discountedPhones);
phoneRoutes.get('/:phoneId', phoneControllers.getPhone);
phoneRoutes.get('/:phoneId/recommended', phoneControllers.getRecommended);
phoneRoutes.get('/', phoneControllers.getAllPhones);
phoneRoutes.get('/?search=phoneName', phoneControllers.getPhones);