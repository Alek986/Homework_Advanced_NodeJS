import { BudgetService } from "./budget.service";
import { BudgetInterface } from "src/entities/budget.entity";
import { BudgetDTO, UpdatedBudgetDTO } from "./dto/budget.dto";
export declare class BudgetController {
    private readonly budgetService;
    constructor(budgetService: BudgetService);
    listBudgets(): Promise<BudgetInterface[]>;
    createBudget(requestbody: BudgetDTO): Promise<BudgetInterface>;
    getBudgetByID(id: string): Promise<BudgetInterface>;
    deleteBudgetByID(id: string): Promise<void>;
    updateBudget(id: string, requestBody: UpdatedBudgetDTO): Promise<BudgetInterface>;
}
