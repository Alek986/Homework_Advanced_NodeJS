import { AuthorORMEntity } from 'src/author/entity/author_entity';
export declare class BookORMEntity {
    id: string;
    title: string;
    description: string;
    genre: string;
    author: AuthorORMEntity;
    publisher: string;
    isbn: number;
}
