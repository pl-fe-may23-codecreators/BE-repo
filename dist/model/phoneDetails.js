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
    sequelize_typescript_1.Column
], PhoneDetails.prototype, "phoneId", void 0);
exports.PhoneDetails = PhoneDetails = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'PhonesDetails',
        modelName: 'PhoneDetails',
        timestamps: false,
    })
], PhoneDetails);
