import { Module } from "@nestjs/common";
import { BudgetService } from "./budget.service";
import { BudgetController } from "./budget.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BudgetORMEntity, ExpenseORMEntity, IncomeORMEntity } from "src/entities/budget.entity";


@Module({
    imports: [TypeOrmModule.forFeature([BudgetORMEntity, IncomeORMEntity, ExpenseORMEntity])],
    providers: [BudgetService],
    controllers: [BudgetController]
})

export class BudgetModule{}