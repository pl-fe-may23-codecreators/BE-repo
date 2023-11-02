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
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db/db"));
const cors_1 = __importDefault(require("cors"));
const sequelize_1 = require("sequelize");
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.static('public'));
app.get('/', (req, res) => {
    res.send('Działa!!! :D');
});
app.get('/products', (req, res) => {
    const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
        const products = yield db_1.default.query('SELECT * FROM "Phones"', { type: sequelize_1.QueryTypes.SELECT });
        return products;
    });
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
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Now listening on port ${port}`);
    yield db_1.default.authenticate();
}));
