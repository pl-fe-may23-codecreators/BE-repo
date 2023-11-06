"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneDetails = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let PhoneDetails = class PhoneDetails extends sequelize_typescript_1.Model {
};
exports.PhoneDetails = PhoneDetails;
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true
    })
], PhoneDetails.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column
], PhoneDetails.prototype, "namespaceId", void 0);
__decorate([
    sequelize_typescript_1.Column
], PhoneDetails.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column
], PhoneDetails.prototype, "capacityAvailable", void 0);
__decorate([
    sequelize_typescript_1.Column
], PhoneDetails.prototype, "capacity", void 0);
__decorate([
    sequelize_typescript_1.Column
], PhoneDetails.prototype, "priceRegular", void 0);
__decorate([
    sequelize_typescript_1.Column
], PhoneDetails.prototype, "priceDiscount", void 0);
__decorate([
    sequelize_typescript_1.Column
], PhoneDetails.prototype, "colorsAvailable", void 0);
__decorate([
    sequelize_typescript_1.Column
], PhoneDetails.prototype, "color", void 0);
__decorate([
    sequelize_typescript_1.Column
], PhoneDetails.prototype, "images", void 0);
__decorate([
    sequelize_typescript_1.Column
], PhoneDetails.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.Column
], PhoneDetails.prototype, "screen", void 0);
__decorate([
    sequelize_typescript_1.Column
], PhoneDetails.prototype, "resolution", void 0);
__decorate([
    sequelize_typescript_1.Column
], PhoneDetails.prototype, "processor", void 0);
__decorate([
    sequelize_typescript_1.Column
], PhoneDetails.prototype, "ram", void 0);
__decorate([
    sequelize_typescript_1.Column
], PhoneDetails.prototype, "camera", void 0);
__decorate([
    sequelize_typescript_1.Column
], PhoneDetails.prototype, "zoom", void 0);
__decorate([
    sequelize_typescript_1.Column
], PhoneDetails.prototype, "cell", void 0);
exports.PhoneDetails = PhoneDetails = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'PhoneDetails',
        modelName: 'PhoneDetails',
        timestamps: false
    })
], PhoneDetails);
