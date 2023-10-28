"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// temporary products list (until DB is created): https://mate-academy.github.io/react_phone-catalog/api/products.json
const products_json_1 = __importDefault(require("./products.json"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('Działa!!! :D');
});
app.get('/products', (req, res) => {
    const page = Number(req.query.page) > 0 ? Number(req.query.page) : 1;
    const limit = Number(req.query.limit) > 0 ? Number(req.query.limit) : 5;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {
        results: []
    };
    if (startIndex > 0) {
        results.previous = {
            page: page - 1,
            limit
        };
    }
    if (endIndex < products_json_1.default.length) {
        results.next = {
            page: page + 1,
            limit
        };
    }
    results.results = products_json_1.default.slice(startIndex, endIndex);
    res.json(results);
});
app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});
