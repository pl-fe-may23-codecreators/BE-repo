"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phone = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Phone = class Phone extends sequelize_typescript_1.Model {
};
exports.Phone = Phone;
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true
    })
], Phone.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column
], Phone.prototype, "category", void 0);
__decorate([
    sequelize_typescript_1.Column
], Phone.prototype, "phoneId", void 0);
__decorate([
    sequelize_typescript_1.Column
], Phone.prototype, "itemId", void 0);
__decorate([
    sequelize_typescript_1.Column
], Phone.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column
], Phone.prototype, "fullPrice", void 0);
__decorate([
    sequelize_typescript_1.Column
], Phone.prototype, "price", void 0);
__decorate([
    sequelize_typescript_1.Column
], Phone.prototype, "screen", void 0);
__decorate([
    sequelize_typescript_1.Column
], Phone.prototype, "capacity", void 0);
__decorate([
    sequelize_typescript_1.Column
], Phone.prototype, "color", void 0);
__decorate([
    sequelize_typescript_1.Column
], Phone.prototype, "ram", void 0);
__decorate([
    sequelize_typescript_1.Column
], Phone.prototype, "year", void 0);
__decorate([
    sequelize_typescript_1.Column
], Phone.prototype, "image", void 0);
exports.Phone = Phone = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'Phones',
        modelName: 'Phone',
        timestamps: false
    })
], Phone);
