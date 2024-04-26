export enum CURRENCY {
    EUR = "EUR",
    USD = "USD",
    MKD = "MKD"
};


export interface ExpenseInterface {
    
    amount: number;
    description: string;
    budget: BudgetInterface

};

export interface IncomeInterface {
    amount: number;
    description: string;
    budget: BudgetInterface

};


export interface BudgetInterface {
    
    title: string;
    balance: number;
    currency: CURRENCY;   //"EUR" | "USD" | "MKD",
    expenses: ExpenseInterface [];
    incomes: IncomeInterface []
};


export interface CreatedBudget {
    title: string,
    balance: number,
    currency: CURRENCY,
    expenses: ExpenseInterface [],
    incomes: IncomeInterface []
}