import { BudgetService } from "./budget.service";
import { BudgetInterface } from "src/interfaces/budget.interface";
import { BudgetDTO } from "./dto/budget.dto";
export declare class BudgetController {
    private readonly budgetService;
    constructor(budgetService: BudgetService);
    listBudgets(): BudgetInterface[];
    createBudget(requestbody: BudgetDTO): {
        message: string;
        budgetId: string;
    };
    getBudgetByID(id: string): BudgetInterface;
    deleteBudgetByID(id: string): {
        message: string;
    };
    updateBudget(id: string, requestBody: BudgetDTO): {
        message: string;
        updatedBudget: BudgetInterface;
    };
}
