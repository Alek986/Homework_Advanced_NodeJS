import { BookORMEntity } from 'src/book/entity/book_entity';
import { Timestamp } from 'typeorm';
export declare class AuthorORMEntity {
    id: string;
    firstName: string;
    lastName: string;
    from: string;
    birthDate: Timestamp;
    books: BookORMEntity[];
}
