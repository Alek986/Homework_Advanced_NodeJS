import { BudgetORMEntity } from "src/entities/budget.entity";
import { CreatedBudget } from "src/entities/budget.interface";
import { UpdatedBudgetDTO } from "./dto/budget.dto";
import { Repository } from "typeorm";
export declare class BudgetService {
    private budgetRepository;
    constructor(budgetRepository: Repository<BudgetORMEntity>);
    readBudgets(): Promise<BudgetORMEntity[]>;
    createBudget(createBudget: CreatedBudget): Promise<BudgetORMEntity>;
    getBudgetByID(id: string): Promise<BudgetORMEntity>;
    removeBudget(id: string): Promise<void>;
    updateBudget(id: string, updatedBudget: UpdatedBudgetDTO): Promise<BudgetORMEntity>;
}
