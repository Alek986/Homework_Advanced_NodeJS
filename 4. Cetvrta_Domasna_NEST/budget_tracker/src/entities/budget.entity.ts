import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class ExpenseInterface {
// export interface ExpenseInterface {
    @PrimaryGeneratedColumn(`uuid`)
    id: string;
    
    @Column()
    amount: number;
    
    @Column()
    description: string
};

@Entity()
export class IncomeInterface {
// export interface IncomeInterface {
    @PrimaryGeneratedColumn(`uuid`)
    id: string;
    
    @Column()
    amount: number;
    
    @Column()
    description: string
};


export enum CURRENCY {
    EUR = "EUR",
    USD = "USD",
    MKD = "MKD"
};

@Entity()
export class BudgetInterface {
// export interface BudgetInterface {
    @PrimaryGeneratedColumn(`uuid`)
    id: string;

    @Column()
    title: string;
    
    @Column()
    balance: number;
    
    @Column({
        enum: CURRENCY,
        enumName: `Currency`
    })
    currency: CURRENCY;   //"EUR" | "USD" | "MKD",
    
    @Column()
    expenses: ExpenseInterface [];
    
    @Column()
    incomes: IncomeInterface []
};

export interface CreatedBudget {
    title: string,
    balance: number,
    currency: CURRENCY,
    expenses: ExpenseInterface [],
    incomes: IncomeInterface []
}