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
exports.IncomeORMEntity = exports.ExpenseORMEntity = exports.BudgetORMEntity = void 0;
const typeorm_1 = require("typeorm");
const budget_interface_1 = require("./budget.interface");
let BudgetORMEntity = class BudgetORMEntity {
};
exports.BudgetORMEntity = BudgetORMEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(`uuid`),
    __metadata("design:type", String)
], BudgetORMEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BudgetORMEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BudgetORMEntity.prototype, "balance", void 0);
__decorate([
    (0, typeorm_1.Column)({
        enum: budget_interface_1.CURRENCY,
        enumName: `Currency`
    }),
    __metadata("design:type", String)
], BudgetORMEntity.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ExpenseORMEntity, (expense) => expense.budget),
    __metadata("design:type", Array)
], BudgetORMEntity.prototype, "expenses", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => IncomeORMEntity, (income) => income.budget),
    __metadata("design:type", Array)
], BudgetORMEntity.prototype, "incomes", void 0);
exports.BudgetORMEntity = BudgetORMEntity = __decorate([
    (0, typeorm_1.Entity)()
], BudgetORMEntity);
;
let ExpenseORMEntity = class ExpenseORMEntity {
};
exports.ExpenseORMEntity = ExpenseORMEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(`uuid`),
    __metadata("design:type", String)
], ExpenseORMEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ExpenseORMEntity.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ExpenseORMEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => BudgetORMEntity, (budget) => budget.expenses),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", BudgetORMEntity)
], ExpenseORMEntity.prototype, "budget", void 0);
exports.ExpenseORMEntity = ExpenseORMEntity = __decorate([
    (0, typeorm_1.Entity)()
], ExpenseORMEntity);
;
let IncomeORMEntity = class IncomeORMEntity {
};
exports.IncomeORMEntity = IncomeORMEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(`uuid`),
    __metadata("design:type", String)
], IncomeORMEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], IncomeORMEntity.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], IncomeORMEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => BudgetORMEntity, (budget) => budget.incomes),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", BudgetORMEntity)
], IncomeORMEntity.prototype, "budget", void 0);
exports.IncomeORMEntity = IncomeORMEntity = __decorate([
    (0, typeorm_1.Entity)()
], IncomeORMEntity);
;
//# sourceMappingURL=budget.entity.js.map