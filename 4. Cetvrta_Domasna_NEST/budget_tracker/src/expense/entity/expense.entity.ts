import { BudgetORMEntity } from "src/entities/budget.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

@Entity({name: 'expenses'})
export class ExpenseORMEntity {
// export interface ExpenseInterface {
    @PrimaryGeneratedColumn(`uuid`)
    id: string;
    
    @Column()
    amount: number;
    
    @Column()
    description: string;

    @ManyToOne(() => BudgetORMEntity, (budget) => budget.expenses)
    @JoinColumn()
    budget: BudgetORMEntity

};
