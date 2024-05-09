import { BudgetORMEntity } from "src/entities/budget.entity";
export declare class IncomeORMEntity {
    id: string;
    amount: number;
    description: string;
    budget: BudgetORMEntity;
}
