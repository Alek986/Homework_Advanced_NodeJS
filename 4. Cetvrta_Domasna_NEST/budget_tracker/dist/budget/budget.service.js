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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetService = void 0;
const common_1 = require("@nestjs/common");
const budget_entity_1 = require("../entities/budget.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let BudgetService = class BudgetService {
    constructor(budgetRepository) {
        this.budgetRepository = budgetRepository;
    }
    async readBudgets() {
        return this.budgetRepository.find();
    }
    ;
    async createBudget(createBudget) {
        const createdBudget = this.budgetRepository.create(createBudget);
        return this.budgetRepository.save(createdBudget);
    }
    ;
    async getBudgetByID(id) {
        return this.budgetRepository.findOneBy({ id });
    }
    ;
    async removeBudget(id) {
        await this.budgetRepository.delete(id);
    }
    ;
    async updateBudget(id, updatedBudget) {
        const budget = await this.budgetRepository.findOneBy({ id });
        const updateBudget = this.budgetRepository.merge(budget, updatedBudget);
        return this.budgetRepository.save(updateBudget);
    }
    ;
};
exports.BudgetService = BudgetService;
exports.BudgetService = BudgetService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(budget_entity_1.BudgetInterface)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BudgetService);
;
//# sourceMappingURL=budget.service.js.map