import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { CURRENCY } from "./budget.interface";
import { ExpenseORMEntity } from "src/expense/entity/expense.entity";
import { IncomeORMEntity } from "src/income/entity/income.entity";


@Entity({name: 'budget'})
export class BudgetORMEntity {
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
    
    @OneToMany(() => ExpenseORMEntity, (expense) => expense.budget)
    expenses: ExpenseORMEntity;
    
    @OneToMany(() => IncomeORMEntity, (income) => income.budget)
    incomes: IncomeORMEntity
};


// @Entity({name: 'expenses'})
// export class ExpenseORMEntity {
// // export interface ExpenseInterface {
//     @PrimaryGeneratedColumn(`uuid`)
//     id: string;
    
//     @Column()
//     amount: number;
    
//     @Column()
//     description: string;

//     @ManyToOne(() => BudgetORMEntity, (budget) => budget.expenses)
//     @JoinColumn()
//     budget: BudgetORMEntity

// };

// @Entity({name: 'incomes'})
// export class IncomeORMEntity {
// // export interface IncomeInterface {
//     @PrimaryGeneratedColumn(`uuid`)
//     id: string;
    
//     @Column()
//     amount: number;
    
//     @Column()
//     description: string;

//     @ManyToOne(() => BudgetORMEntity, (budget) => budget.incomes)
//     @JoinColumn()
//     budget: BudgetORMEntity

// };

// export interface ExpenseInterface {
    
//     amount: number;
//     description: string;
//     budget: BudgetInterface

// };

// export interface IncomeInterface {
//     amount: number;
//     description: string;
//     budget: BudgetInterface

// };


// export interface BudgetInterface {
    
//     title: string;
//     balance: number;
//     currency: CURRENCY;   //"EUR" | "USD" | "MKD",
//     expenses: ExpenseInterface [];
//     incomes: IncomeInterface []
// };


// export interface CreatedBudget {
//     title: string,
//     balance: number,
//     currency: CURRENCY,
//     expenses: ExpenseInterface [],
//     incomes: IncomeInterface []
// }