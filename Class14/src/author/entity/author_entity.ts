import { BookORMEntity } from 'src/book/entity/book_entity';
import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, Timestamp, JoinColumn} from 'typeorm'

@Entity({name: 'author'})
export class AuthorORMEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    from: string;

    
    @Column({type: 'bigint'})
    birthDate: Timestamp;

    @OneToMany(() => BookORMEntity, (book) => book.author )
    @JoinColumn()
    books: BookORMEntity[];
};

