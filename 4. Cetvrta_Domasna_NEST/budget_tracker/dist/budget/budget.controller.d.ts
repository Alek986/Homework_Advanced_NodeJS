import { BudgetService } from "./budget.service";
import { BudgetORMEntity } from "src/entities/budget.entity";
import { BudgetDTO, UpdatedBudgetDTO } from "./dto/budget.dto";
export declare class BudgetController {
    private readonly budgetService;
    constructor(budgetService: BudgetService);
    listBudgets(): Promise<BudgetORMEntity[]>;
    createBudget(requestbody: BudgetDTO): Promise<BudgetORMEntity>;
    getBudgetByID(id: string): Promise<BudgetORMEntity>;
    deleteBudgetByID(id: string): Promise<void>;
    updateBudget(id: string, requestBody: UpdatedBudgetDTO): Promise<BudgetORMEntity>;
}
