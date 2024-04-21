import { BudgetInterface, CreatedBudget } from "src/entities/budget.entity";
import { UpdatedBudgetDTO } from "./dto/budget.dto";
import { Repository } from "typeorm";
export declare class BudgetService {
    private budgetRepository;
    constructor(budgetRepository: Repository<BudgetInterface>);
    readBudgets(): Promise<BudgetInterface[]>;
    createBudget(createBudget: CreatedBudget): Promise<BudgetInterface>;
    getBudgetByID(id: string): Promise<BudgetInterface>;
    removeBudget(id: string): Promise<void>;
    updateBudget(id: string, updatedBudget: UpdatedBudgetDTO): Promise<BudgetInterface>;
}
