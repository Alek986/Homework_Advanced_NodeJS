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
const budget_interface_1 = require("../interfaces/budget.interface");
let BudgetService = class BudgetService {
    constructor() {
        this.budgets = [
            { id: "1", title: "cash", balance: 1000000, currency: budget_interface_1.CURRENCY.EUR, expenses: [{ id: "1", amount: 100, description: "Basic Expenses" }], incomes: [{ id: "1", amount: 1000, description: "salary" }] }
        ];
    }
    readBudgets() {
        const budgets = this.budgets;
        return budgets;
    }
    ;
};
exports.BudgetService = BudgetService;
exports.BudgetService = BudgetService = __decorate([
    (0, common_1.Injectable)()
], BudgetService);
;
//# sourceMappingURL=budget.service.js.map