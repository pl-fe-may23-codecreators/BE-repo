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
const temporaryProducts_json_1 = __importDefault(require("./temporaryProducts.json"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('Działa!!! :D');
});
app.get('/products', (req, res) => {
    const page = Number(req.query.page) > 0 ? Number(req.query.page) : 1; // page number (default 1)
    const limit = Number(req.query.limit) > 0 ? Number(req.query.limit) : 5; // devices per page (default 5)
    // example call: "http://localhost:3000/products?page=2&limit=3"
    const sortField = (['year', 'price'].includes(req.query.sortField)
        ? req.query.sortField
        : undefined);
    const sortOrder = req.query.sortOrder;
    let sortedProducts = [...temporaryProducts_json_1.default];
    if (sortField && sortOrder) {
        sortedProducts.sort((a, b) => {
            const aValue = a[sortField];
            const bValue = b[sortField];
            return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
        });
    }
    // another examples: "http://localhost:3000/products?sortField=year&sortOrder=asc",
    /* ultimate call!!!: "http://localhost:3000/products?page=2&limit=3&sortField=year&sortOrder=desc"
       page number 2, 3 devices per page, sorted by year in descending order
    */
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {
        devices: sortedProducts.slice(startIndex, endIndex),
    };
    res.json(results);
});
// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Now listening on port ${port}`);
    yield db_1.default.authenticate();
}));
