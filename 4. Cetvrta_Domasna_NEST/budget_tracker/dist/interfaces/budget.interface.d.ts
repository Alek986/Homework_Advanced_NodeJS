export interface ExpenseInterface {
    id: string;
    amount: number;
    description: string;
}
export interface IncomeInterface {
    id: string;
    amount: number;
    description: string;
}
export declare enum CURRENCY {
    EUR = "EUR",
    USD = "USD",
    MKD = "MKD"
}
export interface BudgetInterface {
    id: string;
    title: string;
    balance: number;
    currency: CURRENCY;
    expenses: ExpenseInterface[];
    incomes: IncomeInterface[];
}
