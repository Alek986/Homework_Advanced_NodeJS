import { Injectable, NotFoundException } from "@nestjs/common";
import { BudgetORMEntity } from "src/entities/budget.entity";
import { ExpenseORMEntity } from "src/expense/entity/expense.entity";
import { IncomeORMEntity } from "src/income/entity/income.entity";
import { BudgetInterface, CreatedBudget, CURRENCY, ExpenseInterface, IncomeInterface, UpdatedBudget } from "src/entities/budget.interface";
import { v4 as uuid } from "uuid";
import { BudgetDTO, UpdatedBudgetDTO } from "./dto/budget.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { create } from "domain";

@Injectable()
export class BudgetService {
    // private budgets: BudgetInterface[] = [];
    constructor(
        @InjectRepository(BudgetORMEntity) private budgetRepository: Repository<BudgetORMEntity>,
        @InjectRepository(ExpenseORMEntity) private expenseRepository: Repository<ExpenseORMEntity>,
        @InjectRepository(IncomeORMEntity) private incomeRepository: Repository<IncomeORMEntity>
    ) { }

    async readBudgets(): Promise<BudgetORMEntity[]> {
        return this.budgetRepository.find({ relations: ['expenses', 'incomes'] });

        // const budgets = this.budgets;
        // return budgets;
    };

    async createBudget(createBudget: CreatedBudget): Promise<BudgetORMEntity> {

        const income: IncomeInterface = {
            amount: createBudget.incomes.amount,
            description: createBudget.incomes.description,
            budget: createBudget.incomes.budget
        };

        const createdIncome = this.incomeRepository.create(income);
        await this.incomeRepository.save(createdIncome);

        const expense: ExpenseInterface = {
            amount: createBudget.expenses.amount,
            description: createBudget.expenses.description,
            budget: createBudget.expenses.budget 
        };

        const createdExpense = this.expenseRepository.create(expense);
        await this.expenseRepository.save(createdExpense);


        const budget: BudgetInterface = {
            title: createBudget.title,
            balance: createBudget.balance,
            currency: createBudget.currency,
            // expenses: createBudget.expenses,
            // incomes: createBudget.incomes
        };

        const createdBudget = this.budgetRepository.create({...budget, expenses: createdExpense, incomes: createdIncome});

        return await this.budgetRepository.save(createdBudget)
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

    async getBudgetByID(id: string): Promise<BudgetORMEntity> {

        return this.budgetRepository.findOne({ where: { id:id }, relations: ['expenses', 'incomes'] });
        //return this.budgetRepository.findOneBy({ id });


        // const budgetByID = this.budgets.find((budget) => budget.id === id);

        // if(!budgetByID){
        //     throw new NotFoundException(`Budget with ID: ${id} was not found`)
        // };

        // return budgetByID;
    };

    async removeBudget(id: string): Promise<void> {
        const budget = await this.getBudgetByID(id);
        
        const incomesById = budget.incomes.id;
        
        await this.incomeRepository.delete ({id:incomesById});

        const expensesById = budget.expenses.id;

        await this.expenseRepository.delete({id:expensesById});
        
        const response = await this.budgetRepository.delete({id:id});


        // const budget = this.budgets.find((budget) => budget.id === id);

        // if(!budget){
        //     throw new NotFoundException(`Budget with ID: ${id} was not found`);
        // };

        // this.budgets = this.budgets.filter((budget) => budget.id !== id)

    };

    async updateBudget(id: string, updatedBudget: UpdatedBudgetDTO): Promise<BudgetORMEntity> {

        const budget = await this.budgetRepository.findOneBy({ id });

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