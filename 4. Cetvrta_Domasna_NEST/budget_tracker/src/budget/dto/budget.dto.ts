import { ExpenseInterface, IncomeInterface, CURRENCY } from "src/interfaces/budget.interface";
import { IsNotEmpty, IsEnum } from "class-validator";

export class BudgetDTO {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    balance: number;
    
    @IsNotEmpty()
    @IsEnum(CURRENCY)
    currency: CURRENCY;
    
    @IsNotEmpty()
    expenses: ExpenseInterface [];
    
    @IsNotEmpty()
    incomes: IncomeInterface []
}