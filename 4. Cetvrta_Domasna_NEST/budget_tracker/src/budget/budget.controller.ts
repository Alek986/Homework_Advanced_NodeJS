import { Controller, Get, Post, Body, Param, Delete, Put } from "@nestjs/common";
import { BudgetService } from "./budget.service";
import { BudgetInterface, CreatedBudget } from "src/interfaces/budget.interface";
import { BudgetDTO } from "./dto/budget.dto";
import { request } from "http";

@Controller()
export class BudgetController {
    constructor(
        private readonly budgetService: BudgetService) { }

    @Get(`/budgets`)
    listBudgets() {
        const budgets = this.budgetService.readBudgets();
        return budgets;
    };

    @Post(`/budgets`)
    createBudget(@Body() requestbody: BudgetDTO) {
        
        const createdBudget: CreatedBudget = {
            title: requestbody.title,
            balance: requestbody.balance,
            currency: requestbody.currency,
            expenses: requestbody.expenses,
            incomes: requestbody.incomes
        };

        const id = this.budgetService.createbudget(createdBudget);

        return {message: `Budget created`, budgetId: id};
    };

    @Get(`/budgets/:id`)
    getBudgetByID(@Param(`id`) id: string){
        
        const budgetbyID = this.budgetService.getBudgetByID(id);

        return budgetbyID;
    };

    @Delete(`/budgets/:id`)
    deleteBudgetByID(@Param(`id`) id: string){
        
        this.budgetService.removeBudget(id);

        return {message: `Budget with id: ${id} was deleted successfully`}
    };

    @Put(`/budgets/:id`)
    updateBudget(@Param(`id`) id :string, @Body() requestBody: BudgetDTO){
        const updatedBudget = this.budgetService.updateBudget(id, requestBody);

        return {message: `Budjet with id: ${id} was updated successfully`, updatedBudget};
    }

}