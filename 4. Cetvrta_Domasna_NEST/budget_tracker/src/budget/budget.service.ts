import { Injectable, NotFoundException } from "@nestjs/common";
import { BudgetInterface, CreatedBudget, ExpenseInterface, IncomeInterface, CURRENCY } from "src/interfaces/budget.interface";
import { v4 as uuid } from "uuid";
import { BudgetDTO } from "./dto/budget.dto";

@Injectable()
export class BudgetService {
    private budgets: BudgetInterface[] = [];
    // { id: "1", title: "cash", balance: 1000000, currency: CURRENCY.EUR, expenses: [{ id: "1", amount: 100, description: "Basic Expenses" }], incomes: [{ id: "1", amount: 1000, description: "salary" }] }


    readBudgets(): BudgetInterface[] {
        const budgets = this.budgets;

        return budgets;
    };

    createbudget(createBudget: CreatedBudget) {
        const newBudget: BudgetInterface = {
            id: uuid(),
            title: createBudget.title,
            balance: createBudget.balance,
            currency: createBudget.currency,
            expenses: createBudget.expenses,
            incomes: createBudget.incomes
        };

        this.budgets.push(newBudget);

        return newBudget.id;
    };

    getBudgetByID(id: string){
        
        const budgetByID = this.budgets.find((budget) => budget.id === id);

        if(!budgetByID){
            throw new NotFoundException(`Budget with ID: ${id} was not found`)
        };
        
        return budgetByID;
    };

    removeBudget(id: string){
        const budget = this.budgets.find((budget) => budget.id === id);
        
        if(!budget){
            throw new NotFoundException(`Budget with ID: ${id} was not found`);
        };

        this.budgets = this.budgets.filter((budget) => budget.id !== id)

    };

    updateBudget(id: string, updatedBudget: BudgetDTO){
        const updateBudgetByID = this.budgets.find((budget) => budget.id === id);
        if(!updateBudgetByID){
            throw new NotFoundException(`Budget with ID: ${id} was not found`);
        };

        updateBudgetByID.title = updatedBudget.title;
        updateBudgetByID.balance = updatedBudget.balance;
        updateBudgetByID.currency = updatedBudget.currency;
        updateBudgetByID.expenses = updatedBudget.expenses;
        updateBudgetByID.incomes = updatedBudget.incomes;
        
        return updateBudgetByID
    
    };

};