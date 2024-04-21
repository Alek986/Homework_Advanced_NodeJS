import { Module } from "@nestjs/common";
import { BudgetService } from "./budget.service";
import { BudgetController } from "./budget.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BudgetInterface, ExpenseInterface, IncomeInterface } from "src/entities/budget.entity";


@Module({
    imports: [TypeOrmModule.forFeature([BudgetInterface, IncomeInterface, ExpenseInterface])],
    providers: [BudgetService],
    controllers: [BudgetController]
})

export class BudgetModule{}