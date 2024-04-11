import { Controller, Get } from "@nestjs/common";
import { BudgetService } from "./budget.service";
import { BudgetInterface } from "src/interfaces/budget.interface";

@Controller()
export class BudgetController {
    constructor(
        private readonly budgetService: BudgetService){}
        
        @Get(`/budgets`)
        listBudgets(){
            const budgets = this.budgetService.readBudgets;
                return budgets;
        }
    
}