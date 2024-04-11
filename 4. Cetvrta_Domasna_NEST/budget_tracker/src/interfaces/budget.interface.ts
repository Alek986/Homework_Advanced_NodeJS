export interface ExpenseInterface {
    id: string,
    amount: number,
    description: string
};


export interface IncomeInterface {
    id: string,
    amount: number,
    description: string
};


export enum CURRENCY {
    EUR = "EUR",
    USD = "USD",
    MKD = "MKD"
};


export interface BudgetInterface {
    id: string,
    title: string,
    balance: number,
    currency: CURRENCY,   //"EUR" | "USD" | "MKD",
    expenses: ExpenseInterface [],
    incomes: IncomeInterface []
}