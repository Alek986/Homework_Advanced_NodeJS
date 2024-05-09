import { Repository } from 'typeorm';
import { BookCreationProps, UpdateBookProps } from 'src/interface/interfaces';
import { BookORMEntity } from './entity/book_entity';
export declare class BookService {
    private bookRepository;
    constructor(bookRepository: Repository<BookORMEntity>);
    readBook(): Promise<BookORMEntity[]>;
    createBook(bookCreationProps: BookCreationProps): Promise<BookORMEntity>;
    getBookById(id: string): Promise<void>;
    deleteBook(id: string): Promise<void>;
    updateBook(id: string, updateBookProps: UpdateBookProps): Promise<void>;
}
