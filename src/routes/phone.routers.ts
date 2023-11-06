import express from 'express';
import { phoneControllers } from '../controllers/phone.controllers';

export const phoneRoutes = express.Router();

phoneRoutes.get('/', phoneControllers.getAllPhones);