import { ExpenseInterface, IncomeInterface, CURRENCY } from "src/interfaces/budget.interface";
export declare class BudgetDTO {
    title: string;
    balance: number;
    currency: CURRENCY;
    expenses: ExpenseInterface[];
    incomes: IncomeInterface[];
}
