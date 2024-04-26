import { ExpenseInterface, IncomeInterface, CURRENCY } from "src/entities/budget.interface";
import { IsNotEmpty, IsEnum, IsNumber, IsString, IsOptional } from "class-validator";

export class BudgetDTO {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsNumber()
    balance: number;
    
    @IsNotEmpty()
    @IsEnum(CURRENCY)
    currency: CURRENCY;
    
    @IsNotEmpty()
    expenses: ExpenseInterface [];
    
    @IsNotEmpty()
    incomes: IncomeInterface []
};

export class UpdatedBudgetDTO{
    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsNumber()
    balance?: number;
    
    @IsOptional()
    @IsEnum(CURRENCY)
    currency?: CURRENCY;
    
    @IsOptional()
    expenses?: ExpenseInterface[];
    
    @IsOptional()
    incomes?: IncomeInterface[]
}