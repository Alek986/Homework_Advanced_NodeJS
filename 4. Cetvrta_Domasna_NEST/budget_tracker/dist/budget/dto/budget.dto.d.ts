import { ExpenseInterface, IncomeInterface, CURRENCY } from "src/entities/budget.interface";
export declare class BudgetDTO {
    title: string;
    balance: number;
    currency: CURRENCY;
    expenses: ExpenseInterface;
    incomes: IncomeInterface;
}
export declare class UpdatedBudgetDTO {
    title?: string;
    balance?: number;
    currency?: CURRENCY;
    expenses?: ExpenseInterface;
    incomes?: IncomeInterface;
}
