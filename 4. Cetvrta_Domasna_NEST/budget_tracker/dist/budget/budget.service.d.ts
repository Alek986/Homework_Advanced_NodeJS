import { BudgetInterface, CreatedBudget } from "src/interfaces/budget.interface";
import { BudgetDTO } from "./dto/budget.dto";
export declare class BudgetService {
    private budgets;
    readBudgets(): BudgetInterface[];
    createbudget(createBudget: CreatedBudget): string;
    getBudgetByID(id: string): BudgetInterface;
    removeBudget(id: string): void;
    updateBudget(id: string, updatedBudget: BudgetDTO): BudgetInterface;
}
