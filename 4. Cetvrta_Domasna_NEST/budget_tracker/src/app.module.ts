import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BudgetModule } from './budget/budget.module';
import { ExpenseModule } from './expense/expense.module';
import { IncomeModule } from './income/income.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigService, ConfigModule } from "@nestjs/config";
import { DataBaseModule } from './database/database.module';

@Module({
  imports: [DataBaseModule, BudgetModule, ExpenseModule, IncomeModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
