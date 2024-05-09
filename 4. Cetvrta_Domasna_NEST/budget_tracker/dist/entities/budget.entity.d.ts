import { CURRENCY } from "./budget.interface";
import { ExpenseORMEntity } from "src/expense/entity/expense.entity";
import { IncomeORMEntity } from "src/income/entity/income.entity";
export declare class BudgetORMEntity {
    id: string;
    title: string;
    balance: number;
    currency: CURRENCY;
    expenses: ExpenseORMEntity;
    incomes: IncomeORMEntity;
}
