import { Injectable } from "@nestjs/common";
import { BudgetInterface, ExpenseInterface, IncomeInterface, CURRENCY } from "src/interfaces/budget.interface";

@Injectable()
export class BudgetService {
    private budgets: BudgetInterface[] = [
        { id: "1", title: "cash", balance: 1000000, currency: CURRENCY.EUR, expenses: [{ id: "1", amount: 100, description: "Basic Expenses" }], incomes: [{ id: "1", amount: 1000, description: "salary" }] }
    ];

    readBudgets(): BudgetInterface[] {
        const budgets = this.budgets;

        return budgets;
    };
};