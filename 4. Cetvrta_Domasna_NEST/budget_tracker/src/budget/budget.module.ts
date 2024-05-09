import { Module } from "@nestjs/common";
import { BudgetService } from "./budget.service";
import { BudgetController } from "./budget.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BudgetORMEntity } from "src/entities/budget.entity";
import { ExpenseORMEntity } from "src/expense/entity/expense.entity";
import { IncomeORMEntity } from "src/income/entity/income.entity";


@Module({
    imports: [TypeOrmModule.forFeature([BudgetORMEntity, IncomeORMEntity, ExpenseORMEntity])],
    providers: [BudgetService],
    controllers: [BudgetController]
})

export class BudgetModule{}