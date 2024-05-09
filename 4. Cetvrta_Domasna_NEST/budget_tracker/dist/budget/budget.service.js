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
const expense_entity_1 = require("../expense/entity/expense.entity");
const income_entity_1 = require("../income/entity/income.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let BudgetService = class BudgetService {
    constructor(budgetRepository, expenseRepository, incomeRepository) {
        this.budgetRepository = budgetRepository;
        this.expenseRepository = expenseRepository;
        this.incomeRepository = incomeRepository;
    }
    async readBudgets() {
        return this.budgetRepository.find({ relations: ['expenses', 'incomes'] });
    }
    ;
    async createBudget(createBudget) {
        const income = {
            amount: createBudget.incomes.amount,
            description: createBudget.incomes.description,
            budget: createBudget.incomes.budget
        };
        const createdIncome = this.incomeRepository.create(income);
        await this.incomeRepository.save(createdIncome);
        const expense = {
            amount: createBudget.expenses.amount,
            description: createBudget.expenses.description,
            budget: createBudget.expenses.budget
        };
        const createdExpense = this.expenseRepository.create(expense);
        await this.expenseRepository.save(createdExpense);
        const budget = {
            title: createBudget.title,
            balance: createBudget.balance,
            currency: createBudget.currency,
        };
        const createdBudget = this.budgetRepository.create({ ...budget, expenses: createdExpense, incomes: createdIncome });
        return await this.budgetRepository.save(createdBudget);
    }
    ;
    async getBudgetByID(id) {
        return this.budgetRepository.findOne({ where: { id: id }, relations: ['expenses', 'incomes'] });
    }
    ;
    async removeBudget(id) {
        const budget = await this.getBudgetByID(id);
        const incomesById = budget.incomes.id;
        await this.incomeRepository.delete({ id: incomesById });
        const expensesById = budget.expenses.id;
        await this.expenseRepository.delete({ id: expensesById });
        const response = await this.budgetRepository.delete({ id: id });
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
    __param(0, (0, typeorm_1.InjectRepository)(budget_entity_1.BudgetORMEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(expense_entity_1.ExpenseORMEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(income_entity_1.IncomeORMEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], BudgetService);
;
//# sourceMappingURL=budget.service.js.map