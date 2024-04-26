import { Injectable, NotFoundException } from "@nestjs/common";
import { BudgetORMEntity, ExpenseORMEntity, IncomeORMEntity } from "src/entities/budget.entity";
import { CreatedBudget, CURRENCY } from "src/entities/budget.interface";
import { v4 as uuid } from "uuid";
import { BudgetDTO, UpdatedBudgetDTO } from "./dto/budget.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class BudgetService {
    // private budgets: BudgetInterface[] = [];
    constructor(
        @InjectRepository(BudgetORMEntity) private budgetRepository: Repository<BudgetORMEntity>
    ) {}

    async readBudgets(): Promise<BudgetORMEntity[]> {
        return this.budgetRepository.find({relations: ['expenses', 'incomes']});

        // const budgets = this.budgets;
        // return budgets;
    };

    async createBudget(createBudget: CreatedBudget): Promise<BudgetORMEntity> {

        const createdBudget = this.budgetRepository.create(createBudget)

        return this.budgetRepository.save(createdBudget)
        // const newBudget: BudgetInterface = {
        //     id: uuid(),
        //     title: createBudget.title,
        //     balance: createBudget.balance,
        //     currency: createBudget.currency,
        //     expenses: createBudget.expenses,
        //     incomes: createBudget.incomes
        // };

        // this.budgets.push(newBudget);

        // return newBudget.id;
    };

    async getBudgetByID(id: string) :Promise<BudgetORMEntity>{
        
        return this.budgetRepository.findOneBy({id});
        
        
        // const budgetByID = this.budgets.find((budget) => budget.id === id);

        // if(!budgetByID){
        //     throw new NotFoundException(`Budget with ID: ${id} was not found`)
        // };
        
        // return budgetByID;
    };

    async removeBudget(id: string): Promise<void> {
        
        await this.budgetRepository.delete(id)
        
        
        // const budget = this.budgets.find((budget) => budget.id === id);
        
        // if(!budget){
        //     throw new NotFoundException(`Budget with ID: ${id} was not found`);
        // };

        // this.budgets = this.budgets.filter((budget) => budget.id !== id)

    };

    async updateBudget(id: string, updatedBudget: UpdatedBudgetDTO): Promise<BudgetORMEntity>{
        
        const budget = await this.budgetRepository.findOneBy({id});

        const updateBudget = this.budgetRepository.merge(budget, updatedBudget);

        return this.budgetRepository.save(updateBudget);

        // const updateBudgetByID = this.budgets.find((budget) => budget.id === id);
        // if(!updateBudgetByID){
        //     throw new NotFoundException(`Budget with ID: ${id} was not found`);
        // };
        
        // updateBudgetByID.title = updatedBudget.title;
        // updateBudgetByID.balance = updatedBudget.balance;
        // updateBudgetByID.currency = updatedBudget.currency;
        // updateBudgetByID.expenses = updatedBudget.expenses;
        // updateBudgetByID.incomes = updatedBudget.incomes;
        
        // return updateBudgetByID
    
    };

};