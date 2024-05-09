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
exports.BudgetORMEntity = void 0;
const typeorm_1 = require("typeorm");
const budget_interface_1 = require("./budget.interface");
const expense_entity_1 = require("../expense/entity/expense.entity");
const income_entity_1 = require("../income/entity/income.entity");
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
    (0, typeorm_1.OneToMany)(() => expense_entity_1.ExpenseORMEntity, (expense) => expense.budget),
    __metadata("design:type", expense_entity_1.ExpenseORMEntity)
], BudgetORMEntity.prototype, "expenses", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => income_entity_1.IncomeORMEntity, (income) => income.budget),
    __metadata("design:type", income_entity_1.IncomeORMEntity)
], BudgetORMEntity.prototype, "incomes", void 0);
exports.BudgetORMEntity = BudgetORMEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'budget' })
], BudgetORMEntity);
;
//# sourceMappingURL=budget.entity.js.map