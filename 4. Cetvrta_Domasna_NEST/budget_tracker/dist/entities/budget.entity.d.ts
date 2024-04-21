export declare class ExpenseInterface {
    id: string;
    amount: number;
    description: string;
}
export declare class IncomeInterface {
    id: string;
    amount: number;
    description: string;
}
export declare enum CURRENCY {
    EUR = "EUR",
    USD = "USD",
    MKD = "MKD"
}
export declare class BudgetInterface {
    id: string;
    title: string;
    balance: number;
    currency: CURRENCY;
    expenses: ExpenseInterface[];
    incomes: IncomeInterface[];
}
export interface CreatedBudget {
    title: string;
    balance: number;
    currency: CURRENCY;
    expenses: ExpenseInterface[];
    incomes: IncomeInterface[];
}
