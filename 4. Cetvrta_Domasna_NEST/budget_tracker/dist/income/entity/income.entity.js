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
exports.IncomeORMEntity = void 0;
const budget_entity_1 = require("../../entities/budget.entity");
const typeorm_1 = require("typeorm");
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
    (0, typeorm_1.ManyToOne)(() => budget_entity_1.BudgetORMEntity, (budget) => budget.incomes),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", budget_entity_1.BudgetORMEntity)
], IncomeORMEntity.prototype, "budget", void 0);
exports.IncomeORMEntity = IncomeORMEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'incomes' })
], IncomeORMEntity);
;
//# sourceMappingURL=income.entity.js.map