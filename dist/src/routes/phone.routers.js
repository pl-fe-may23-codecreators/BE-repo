"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneRoutes = void 0;
const express_1 = __importDefault(require("express"));
const phone_controllers_1 = require("../controllers/phone.controllers");
exports.phoneRoutes = express_1.default.Router();
exports.phoneRoutes.get('/new', phone_controllers_1.phoneControllers.newPhones);
exports.phoneRoutes.get('/discount', phone_controllers_1.phoneControllers.discountedPhones);
exports.phoneRoutes.get('/:phoneId', phone_controllers_1.phoneControllers.getPhone);
exports.phoneRoutes.get('/:phoneId/recommended', phone_controllers_1.phoneControllers.getRecommended);
exports.phoneRoutes.get('/', phone_controllers_1.phoneControllers.getAllPhones);
exports.phoneRoutes.get('/?search=phoneName', phone_controllers_1.phoneControllers.getPhones);
