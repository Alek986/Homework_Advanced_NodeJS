import { BookService } from './book.service';
import { BookDTO, UpdatedBookDTO } from './dto/book_dto';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    listBook(): Promise<import("./entity/book_entity").BookORMEntity[]>;
    createBook(requestBody: BookDTO): Promise<{
        message: string;
    }>;
    getbookById(id: string): Promise<void>;
    deleteBook(id: string): Promise<{
        message: string;
    }>;
    updateBook(id: string, requestBody: UpdatedBookDTO): Promise<void>;
}
