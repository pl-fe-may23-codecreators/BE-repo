"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
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
app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});
