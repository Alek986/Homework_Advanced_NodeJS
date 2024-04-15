"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let BudgetService = class BudgetService {
    constructor() {
        this.budgets = [];
    }
    readBudgets() {
        const budgets = this.budgets;
        return budgets;
    }
    ;
    createbudget(createBudget) {
        const newBudget = {
            id: (0, uuid_1.v4)(),
            title: createBudget.title,
            balance: createBudget.balance,
            currency: createBudget.currency,
            expenses: createBudget.expenses,
            incomes: createBudget.incomes
        };
        this.budgets.push(newBudget);
        return newBudget.id;
    }
    ;
    getBudgetByID(id) {
        const budgetByID = this.budgets.find((budget) => budget.id === id);
        if (!budgetByID) {
            throw new common_1.NotFoundException(`Budget with ID: ${id} was not found`);
        }
        ;
        return budgetByID;
    }
    ;
    removeBudget(id) {
        const budget = this.budgets.find((budget) => budget.id === id);
        if (!budget) {
            throw new common_1.NotFoundException(`Budget with ID: ${id} was not found`);
        }
        ;
        this.budgets = this.budgets.filter((budget) => budget.id !== id);
    }
    ;
    updateBudget(id, updatedBudget) {
        const updateBudgetByID = this.budgets.find((budget) => budget.id === id);
        if (!updateBudgetByID) {
            throw new common_1.NotFoundException(`Budget with ID: ${id} was not found`);
        }
        ;
        updateBudgetByID.title = updatedBudget.title;
        updateBudgetByID.balance = updatedBudget.balance;
        updateBudgetByID.currency = updatedBudget.currency;
        updateBudgetByID.expenses = updatedBudget.expenses;
        updateBudgetByID.incomes = updatedBudget.incomes;
        return updateBudgetByID;
    }
    ;
};
exports.BudgetService = BudgetService;
exports.BudgetService = BudgetService = __decorate([
    (0, common_1.Injectable)()
], BudgetService);
;
//# sourceMappingURL=budget.service.js.map