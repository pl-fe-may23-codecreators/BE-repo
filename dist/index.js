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
const phone_routers_1 = require("./src/routes/phone.routers");
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.static('public'));
app.get('/', (req, res) => {
    res.send('Działa!!! :D');
});
app.use('/products', phone_routers_1.phoneRoutes);
// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Now listening on port ${port}`);
    try {
        yield db_1.default.authenticate();
    }
    catch (error) {
        console.log('Unable to connect to the database', error);
    }
})).on('error', function (err) {
    console.log(err);
});
