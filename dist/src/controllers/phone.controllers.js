"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneControllers = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../../db/db"));
const getAllPhones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
        const products = yield db_1.default.query('SELECT * FROM "Phones"', { type: sequelize_1.QueryTypes.SELECT });
        return products;
    });
    const products = yield getAllProducts();
    const page = Number(req.query.page) > 0 ? Number(req.query.page) : 1; // page number (default 1)
    const limit = Number(req.query.limit) > 0 ? Number(req.query.limit) : 5; // devices per page (default 5)
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const sortField = (['year', 'price'].includes(req.query.sortField)
        ? req.query.sortField
        : undefined);
    const sortOrder = req.query.sortOrder;
    const paginatedProducts = products.slice(startIndex, endIndex);
    if (sortField && sortOrder) {
        paginatedProducts.sort((a, b) => {
            const aValue = a[sortField];
            const bValue = b[sortField];
            return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
        });
    }
    res.send(paginatedProducts);
    console.log(paginatedProducts);
});
exports.phoneControllers = {
    getAllPhones,
};
