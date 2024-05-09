import { BudgetORMEntity } from "src/entities/budget.entity";
export declare class ExpenseORMEntity {
    id: string;
    amount: number;
    description: string;
    budget: BudgetORMEntity;
}
