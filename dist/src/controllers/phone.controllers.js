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
var ProductType;
(function (ProductType) {
    ProductType["Phones"] = "phones";
})(ProductType || (ProductType = {}));
const getAllPhones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productType = req.query.productType;
    let allProducts = [];
    if (productType === 'phones' || productType === undefined) {
        allProducts = yield db_1.default.query(`SELECT * FROM "Phones" WHERE category='${ProductType.Phones}'`, { type: sequelize_1.QueryTypes.SELECT });
    }
    else {
        allProducts = [];
    }
    const page = Number(req.query.page) > 0 ? Number(req.query.page) : 1; // page number (default 1)
    const limit = Number(req.query.limit) > 0 ? Number(req.query.limit) : 5; // devices per page (default 5)
    // example call: "http://localhost:3000/products?page=2&limit=3"
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const sortField = (['year', 'price'].includes(req.query.sortField)
        ? req.query.sortField
        : undefined);
    const sortOrder = req.query.sortOrder;
    if (sortField && sortOrder) {
        allProducts.sort((a, b) => {
            const aValue = a[sortField];
            const bValue = b[sortField];
            return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
        });
    }
    // another examples: "http://localhost:3000/products?sortField=year&sortOrder=asc",
    /* ultimate call!!!: "http://localhost:3000/products?page=2&limit=3&sortField=year&sortOrder=desc"
       page number 2, 3 devices per page, sorted by year in descending order
    */
    const paginatedProducts = allProducts.slice(startIndex, endIndex);
    res.send(paginatedProducts);
    console.log(paginatedProducts);
});
const newPhones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newProducts = yield db_1.default.query('SELECT * FROM "Phones" ORDER BY year DESC LIMIT 7', { type: sequelize_1.QueryTypes.SELECT });
    res.send(newProducts);
});
const discountedPhones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const discountedProducts = yield db_1.default.query('SELECT * FROM "Phones" ORDER BY year LIMIT 17', {
        type: sequelize_1.QueryTypes.SELECT
    });
    res.send(discountedProducts);
});
const getPhone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const phoneId = req.params['phoneId'];
    const getPhoneById = yield db_1.default.query(`SELECT * FROM "PhoneDetails" WHERE "phoneId"='${phoneId}'`, {
        type: sequelize_1.QueryTypes.SELECT
    });
    res.send(getPhoneById);
});
const getRecommended = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const phoneId = req.params['phoneId'];
    const getPhoneById = yield db_1.default.query(`SELECT * FROM "PhoneDetails" WHERE "phoneId"='${phoneId}'`, {
        type: sequelize_1.QueryTypes.SELECT
    });
    const phone = getPhoneById[0];
    const getRecommendedPhones = yield db_1.default.query(`SELECT * 
    FROM "Phones"
    JOIN "PhoneDetails" ON "Phones"."phoneId"="PhoneDetails"."phoneId" 
    WHERE "PhoneDetails"."namespaceId"='${phone['namespaceId']}'
    AND "PhoneDetails".color IN (${phone['colorsAvailable'].map(color => ('\'' + color + '\''))})
    AND "PhoneDetails".capacity IN (${phone['capacityAvailable'].map(capacity => ('\'' + capacity + '\''))})`, {
        type: sequelize_1.QueryTypes.SELECT
    });
    console.log(getRecommendedPhones);
    res.send(getRecommendedPhones);
});
const getPhones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const phoneName = req.params['name'];
    const getPhoneByName = yield db_1.default.query(`SELECT * FROM "Phones" WHERE "name" LIKE '%${phoneName}%'`, {
        type: sequelize_1.QueryTypes.SELECT
    });
    res.send(getPhoneByName);
});
exports.phoneControllers = {
    getAllPhones,
    newPhones,
    discountedPhones,
    getPhone,
    getRecommended,
    getPhones
};
