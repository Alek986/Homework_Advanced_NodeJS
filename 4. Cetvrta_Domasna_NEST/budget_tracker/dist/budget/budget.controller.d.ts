import { BudgetService } from "./budget.service";
import { BudgetInterface } from "src/interfaces/budget.interface";
export declare class BudgetController {
    private readonly budgetService;
    constructor(budgetService: BudgetService);
    listBudgets(): () => BudgetInterface[];
}
