import { BudgetORMEntity } from "src/entities/budget.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

@Entity({name: 'incomes'})
export class IncomeORMEntity {
// export interface IncomeInterface {
    @PrimaryGeneratedColumn(`uuid`)
    id: string;
    
    @Column()
    amount: number;
    
    @Column()
    description: string;

    @ManyToOne(() => BudgetORMEntity, (budget) => budget.incomes)
    @JoinColumn()
    budget: BudgetORMEntity

};