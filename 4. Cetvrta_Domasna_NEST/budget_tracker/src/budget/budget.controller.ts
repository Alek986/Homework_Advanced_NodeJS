import { Controller, Get, Post, Body, Param, Delete, Put } from "@nestjs/common";
import { BudgetService } from "./budget.service";
import { BudgetORMEntity } from "src/entities/budget.entity";
import { CreatedBudget } from "src/entities/budget.interface";
import { BudgetDTO, UpdatedBudgetDTO } from "./dto/budget.dto";
import { request } from "http";

@Controller()
export class BudgetController {
    constructor(
        private readonly budgetService: BudgetService) { }

    @Get(`/budgets`)
    listBudgets(): Promise<BudgetORMEntity[]> {
        
        return this.budgetService.readBudgets()
        
        // const budgets = this.budgetService.readBudgets();
        // return budgets;
    };

    @Post(`/budgets`)
    createBudget(@Body() requestbody: BudgetDTO): Promise<BudgetORMEntity> {
        
        const mappedBudget: CreatedBudget = {
        title: requestbody.title,
        balance: requestbody.balance,
        currency: requestbody.currency,
        expenses: requestbody.expenses,
        incomes: requestbody.incomes
        };
        
        return this.budgetService.createBudget(mappedBudget)


        // const createdBudget: CreatedBudget = {
        //     title: requestbody.title,
        //     balance: requestbody.balance,
        //     currency: requestbody.currency,
        //     expenses: requestbody.expenses,
        //     incomes: requestbody.incomes
        // };

        // const id = this.budgetService.createBudget(createdBudget);

        // return {message: `Budget created`, budgetId: id};
    };

    @Get(`/budgets/:id`)
    getBudgetByID(@Param(`id`) id: string): Promise<BudgetORMEntity> {
        
        return this.budgetService.getBudgetByID(id)


        // const budgetbyID = this.budgetService.getBudgetByID(id);

        // return budgetbyID;
    };

    @Delete(`/budgets/:id`)
    deleteBudgetByID(@Param(`id`) id: string): Promise<void> {
        
        return this.budgetService.removeBudget(id);

        // this.budgetService.removeBudget(id);

        // return {message: `Budget with id: ${id} was deleted successfully`}
    };

    @Put(`/budgets/:id`)
    updateBudget(@Param(`id`) id :string, @Body() requestBody: UpdatedBudgetDTO): Promise<BudgetORMEntity>{
      
        return this.budgetService.updateBudget(id, requestBody)

        // const updatedBudget = this.budgetService.updateBudget(id, requestBody);

        // return {message: `Budjet with id: ${id} was updated successfully`, updatedBudget};
    };

}