"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetInterface = exports.CURRENCY = exports.IncomeInterface = exports.ExpenseInterface = void 0;
const typeorm_1 = require("typeorm");
let ExpenseInterface = class ExpenseInterface {
};
exports.ExpenseInterface = ExpenseInterface;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(`uuid`),
    __metadata("design:type", String)
], ExpenseInterface.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ExpenseInterface.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ExpenseInterface.prototype, "description", void 0);
exports.ExpenseInterface = ExpenseInterface = __decorate([
    (0, typeorm_1.Entity)()
], ExpenseInterface);
;
let IncomeInterface = class IncomeInterface {
};
exports.IncomeInterface = IncomeInterface;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(`uuid`),
    __metadata("design:type", String)
], IncomeInterface.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], IncomeInterface.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], IncomeInterface.prototype, "description", void 0);
exports.IncomeInterface = IncomeInterface = __decorate([
    (0, typeorm_1.Entity)()
], IncomeInterface);
;
var CURRENCY;
(function (CURRENCY) {
    CURRENCY["EUR"] = "EUR";
    CURRENCY["USD"] = "USD";
    CURRENCY["MKD"] = "MKD";
})(CURRENCY || (exports.CURRENCY = CURRENCY = {}));
;
let BudgetInterface = class BudgetInterface {
};
exports.BudgetInterface = BudgetInterface;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(`uuid`),
    __metadata("design:type", String)
], BudgetInterface.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BudgetInterface.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BudgetInterface.prototype, "balance", void 0);
__decorate([
    (0, typeorm_1.Column)({
        enum: CURRENCY,
        enumName: `Currency`
    }),
    __metadata("design:type", String)
], BudgetInterface.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Array)
], BudgetInterface.prototype, "expenses", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Array)
], BudgetInterface.prototype, "incomes", void 0);
exports.BudgetInterface = BudgetInterface = __decorate([
    (0, typeorm_1.Entity)()
], BudgetInterface);
;
//# sourceMappingURL=budget.entity.js.map