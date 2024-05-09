import { AuthorORMEntity } from 'src/author/entity/author_entity';
import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm'

@Entity({name: 'book'})
export class BookORMEntity{
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    genre: string;

    @ManyToOne(() => AuthorORMEntity, (author) => author.books )
    @JoinColumn()
    author: AuthorORMEntity;

    @Column()
    publisher: string;

    @Column()
    isbn: number
};