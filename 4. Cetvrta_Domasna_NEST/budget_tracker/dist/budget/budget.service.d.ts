import { BudgetORMEntity } from "src/entities/budget.entity";
import { ExpenseORMEntity } from "src/expense/entity/expense.entity";
import { IncomeORMEntity } from "src/income/entity/income.entity";
import { CreatedBudget } from "src/entities/budget.interface";
import { UpdatedBudgetDTO } from "./dto/budget.dto";
import { Repository } from "typeorm";
export declare class BudgetService {
    private budgetRepository;
    private expenseRepository;
    private incomeRepository;
    constructor(budgetRepository: Repository<BudgetORMEntity>, expenseRepository: Repository<ExpenseORMEntity>, incomeRepository: Repository<IncomeORMEntity>);
    readBudgets(): Promise<BudgetORMEntity[]>;
    createBudget(createBudget: CreatedBudget): Promise<BudgetORMEntity>;
    getBudgetByID(id: string): Promise<BudgetORMEntity>;
    removeBudget(id: string): Promise<void>;
    updateBudget(id: string, updatedBudget: UpdatedBudgetDTO): Promise<BudgetORMEntity>;
}
