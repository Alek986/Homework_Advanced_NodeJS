import { CURRENCY } from "./budget.interface";
export declare class BudgetORMEntity {
    id: string;
    title: string;
    balance: number;
    currency: CURRENCY;
    expenses: ExpenseORMEntity[];
    incomes: IncomeORMEntity[];
}
export declare class ExpenseORMEntity {
    id: string;
    amount: number;
    description: string;
    budget: BudgetORMEntity;
}
export declare class IncomeORMEntity {
    id: string;
    amount: number;
    description: string;
    budget: BudgetORMEntity;
}
